"use strict";

// Só ativa destinos que já têm conteúdo real. Novas seções usam os IDs do menu.
const sectionLinks = [...document.querySelectorAll(".case-menu [data-section]")];
const sections = sectionLinks.flatMap((link) => {
    const section = document.getElementById(link.dataset.section);
    if (!section) return [];
    link.href = `#${section.id}`;
    link.removeAttribute("aria-disabled");
    link.removeAttribute("title");
    return [section];
});

let currentSectionId;
const setCurrentSection = (id) => {
    if (id === currentSectionId) return;
    currentSectionId = id;
    sectionLinks.forEach((link) => {
        if (link.dataset.section === id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
    });
};

if (sections.length) {
    setCurrentSection(null);
    let updatePending = false;
    const updateCurrentSection = () => {
        const readingLine = window.innerHeight * 0.13;
        const positions = sections.map((section) => ({ section, rect: section.getBoundingClientRect() }));
        const last = positions[positions.length - 1];

        if (positions[0].rect.top > readingLine) {
            setCurrentSection(null);
        } else if (last.rect.top >= 0 && last.rect.bottom <= window.innerHeight) {
            // A última seção curta pode ficar inteira visível sem alcançar a linha.
            setCurrentSection(last.section.id);
        } else {
            // A geometria atual também cobre saltos que não cruzam uma faixa do
            // observador. Blocos independentes mantêm o marco principal anterior.
            const current = positions.filter(({ rect }) => rect.top <= readingLine).pop();
            setCurrentSection(current?.section.id ?? null);
        }
    };
    const scheduleSectionUpdate = () => {
        if (updatePending) return;
        updatePending = true;
        window.requestAnimationFrame(() => {
            updatePending = false;
            updateCurrentSection();
        });
    };

    if ("IntersectionObserver" in window) {
        // O observador sinaliza entradas/saídas e seções inteiramente visíveis;
        // a linha de leitura é calculada pela altura real da viewport.
        const sectionObserver = new IntersectionObserver(scheduleSectionUpdate, { threshold: [0, 1] });
        sections.forEach((section) => sectionObserver.observe(section));
    }
    window.addEventListener("scroll", scheduleSectionUpdate, { passive: true });
    window.addEventListener("resize", scheduleSectionUpdate);
    scheduleSectionUpdate();
}

// Carrega perto da viewport; reproduz somente quando realmente visível.
// Movimento reduzido mantém a reprodução manual com controles nativos.
const videos = [...document.querySelectorAll(".case-content video")];
if (videos.length) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const visibleVideos = new Set();
    const loadedVideos = new WeakSet();
    const loadVideo = (video) => {
        if (loadedVideos.has(video)) return;
        loadedVideos.add(video);
        video.querySelectorAll("source[data-src]").forEach((source) => {
            source.addEventListener("error", () => { video.controls = true; }, { once: true });
            source.src = source.dataset.src;
        });
        video.preload = "metadata";
        video.load();
    };
    const updateVideo = (video) => {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.autoplay = visibleVideos.has(video) && !reducedMotion.matches;
        video.controls = reducedMotion.matches;
        if (reducedMotion.matches || !visibleVideos.has(video)) video.pause();
        else {
            loadVideo(video);
            video.play().catch((error) => {
                // Pausar ou mudar rapidamente de seção pode cancelar play().
                if (error.name !== "AbortError" && visibleVideos.has(video)
                    && !reducedMotion.matches) video.controls = true;
            });
        }
    };
    const loadingObserver = "IntersectionObserver" in window
        ? new IntersectionObserver((entries, observer) => {
            entries.forEach(({ target, isIntersecting }) => {
                if (!isIntersecting) return;
                loadVideo(target);
                observer.unobserve(target);
            });
        }, { rootMargin: "400px 0px", threshold: 0 })
        : null;
    const videoObserver = "IntersectionObserver" in window
        ? new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                if (isIntersecting) visibleVideos.add(target);
                else visibleVideos.delete(target);
                updateVideo(target);
            });
        }, { threshold: 0 })
        : null;

    videos.forEach((video) => {
        // Desativa autoplay antes de ativar qualquer fonte, inclusive no prefetch.
        video.autoplay = false;
        if (videoObserver) {
            loadingObserver.observe(video);
            videoObserver.observe(video);
        } else {
            // Compatibilidade: sem observadores, os arquivos continuam acessíveis.
            loadVideo(video);
            visibleVideos.add(video);
        }
        updateVideo(video);
    });
    reducedMotion.addEventListener("change", () => videos.forEach(updateVideo));
}
