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

const setCurrentSection = (id) => {
    sectionLinks.forEach((link) => {
        if (link.dataset.section === id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
    });
};

if (sections.length) {
    setCurrentSection(null);
    if ("IntersectionObserver" in window) {
        const visibleSections = new Set();
        const lastSection = sections[sections.length - 1];
        let lastSectionFullyVisible = false;
        const updateCurrentSection = () => {
            const current = [...visibleSections].sort((a, b) =>
                Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top)
            )[0];
            if (sections[0].getBoundingClientRect().top > window.innerHeight * 0.13) {
                setCurrentSection(null);
            } else if (lastSectionFullyVisible) {
                setCurrentSection(lastSection.id);
            } else if (current) {
                setCurrentSection(current.id);
            }
        };
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) visibleSections.add(entry.target);
                else visibleSections.delete(entry.target);
            });
            updateCurrentSection();
        // Uma faixa estreita identifica a seção na linha de leitura,
        // sem ativar a próxima só porque ela apareceu no fim da viewport.
        }, { rootMargin: "-12% 0px -87% 0px", threshold: 0 });
        sections.forEach((section) => sectionObserver.observe(section));

        // Uma última seção curta pode não alcançar a faixa de leitura antes
        // do fim da página. Quando cabe inteira na viewport, ela fica ativa.
        const lastSectionObserver = new IntersectionObserver(([entry]) => {
            lastSectionFullyVisible = entry.isIntersecting && entry.intersectionRatio === 1;
            updateCurrentSection();
        }, { threshold: 1 });
        lastSectionObserver.observe(lastSection);

        // Um salto de um bloco independente até a Hero pode não cruzar
        // nenhum alvo do observador. Limpa a seleção também nesse caso.
        window.addEventListener("scroll", () => {
            if (sections[0].getBoundingClientRect().top > window.innerHeight * 0.13
                && sectionLinks.some((link) => link.hasAttribute("aria-current"))) {
                setCurrentSection(null);
            }
        }, { passive: true });
    }
}

// Política compartilhada pelos vídeos que serão adicionados ao Case.
// Movimento reduzido oferece reprodução manual; fora da viewport, pausa.
const videos = [...document.querySelectorAll(".case-content video")];
if (videos.length) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const visibleVideos = new Set();
    const updateVideo = (video) => {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.autoplay = !reducedMotion.matches;
        video.controls = reducedMotion.matches;
        if (reducedMotion.matches || !visibleVideos.has(video)) video.pause();
        else video.play().catch(() => { video.controls = true; });
    };
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
        if (!video.hasAttribute("preload")) video.preload = "metadata";
        if (videoObserver) videoObserver.observe(video);
        else visibleVideos.add(video);
        updateVideo(video);
    });
    reducedMotion.addEventListener("change", () => videos.forEach(updateVideo));
}
