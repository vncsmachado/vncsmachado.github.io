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
    setCurrentSection(sections[0].id);
    if ("IntersectionObserver" in window) {
        const visibleSections = new Set();
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) visibleSections.add(entry.target);
                else visibleSections.delete(entry.target);
            });
            const current = [...visibleSections].sort((a, b) =>
                Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top)
            )[0];
            if (current) setCurrentSection(current.id);
        }, { rootMargin: "-12% 0px -55% 0px", threshold: 0 });
        sections.forEach((section) => sectionObserver.observe(section));
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
