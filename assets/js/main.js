"use strict";

// As fotos só entram no DOM perto da viewport; os slots já reservam seu espaço.
// Sem JavaScript, o HTML em noscript mantém as imagens disponíveis.
const deferredPhotos = [...document.querySelectorAll("template[data-deferred-photo]")];
const revealPhoto = (slot) => {
    const template = slot.querySelector("template[data-deferred-photo]");
    if (template) template.replaceWith(template.content);
};
if ("IntersectionObserver" in window) {
    const photoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(({ target, isIntersecting }) => {
            if (!isIntersecting) return;
            revealPhoto(target);
            observer.unobserve(target);
        });
    }, { rootMargin: "400px 0px", threshold: 0 });
    deferredPhotos.forEach((template) => photoObserver.observe(template.parentElement));
} else {
    deferredPhotos.forEach((template) => revealPhoto(template.parentElement));
}

const intro = document.querySelector(".home-intro");
const introSkip = document.querySelector(".home-intro__skip");
const homeHeader = document.querySelector("#inicio-home");

if (intro && introSkip && homeHeader) {
    const listeners = new AbortController();
    const homeRegions = [homeHeader, document.querySelector(".home-main"), document.querySelector(".home-footer")]
        .filter(Boolean)
        .map((element) => ({ element, wasInert: element.inert }));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let leaving = false;
    let finished = false;
    let focusHome = false;
    let touchStartY = null;
    let exitTimeout;

    const finishIntro = () => {
        if (finished) return;
        finished = true;
        window.clearTimeout(exitTimeout);
        listeners.abort();
        intro.hidden = true;
        introSkip.hidden = true;
        document.documentElement.classList.remove("intro-is-active");
        homeRegions.forEach(({ element, wasInert }) => { element.inert = wasInert; });

        if (focusHome || document.activeElement === introSkip) {
            homeHeader.focus({ preventScroll: true });
        }
    };

    const dismissIntro = (moveFocus = false) => {
        if (leaving || finished) return;
        leaving = true;
        focusHome = moveFocus;
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });

        if (reducedMotion.matches) {
            finishIntro();
            return;
        }

        intro.classList.add("home-intro--leaving");
        // Segurança caso transitionend não seja emitido; nunca inicia o avanço sozinho.
        exitTimeout = window.setTimeout(finishIntro, 600);
    };

    intro.addEventListener("transitionend", (event) => {
        if (leaving && event.target === intro && event.propertyName === "transform") finishIntro();
    }, { signal: listeners.signal });

    window.addEventListener("wheel", (event) => {
        if (event.ctrlKey || event.deltaY <= 0) return;
        if (event.cancelable) event.preventDefault();
        dismissIntro();
    }, { passive: false, signal: listeners.signal });

    window.addEventListener("touchstart", (event) => {
        touchStartY = event.touches.length === 1 ? event.touches[0].clientY : null;
    }, { passive: true, signal: listeners.signal });

    window.addEventListener("touchmove", (event) => {
        if (touchStartY === null || event.touches.length !== 1) return;
        if (touchStartY - event.touches[0].clientY <= 6) return;
        if (event.cancelable) event.preventDefault();
        dismissIntro();
    }, { passive: false, signal: listeners.signal });

    window.addEventListener("keydown", (event) => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (event.key === " " && event.shiftKey) return;
        if (!["ArrowDown", "PageDown", " ", "Spacebar", "End"].includes(event.key)) return;
        event.preventDefault();
        dismissIntro(true);
    }, { signal: listeners.signal });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) dismissIntro();
    }, { passive: true, signal: listeners.signal });

    introSkip.addEventListener("click", (event) => {
        event.preventDefault();
        dismissIntro(true);
    }, { signal: listeners.signal });

    homeRegions.forEach(({ element }) => { element.inert = true; });
    document.documentElement.classList.add("intro-is-active");
    intro.hidden = false;
}
