"use strict";

// Impedir a abertura do currículo enquanto o PDF não tiver sido fornecido.
// Remover aria-disabled no HTML quando o documento estiver disponível.
document.querySelectorAll('.home-header__link[aria-disabled="true"]').forEach((link) => {
    const preventUnavailableNavigation = (event) => event.preventDefault();
    link.addEventListener("click", preventUnavailableNavigation);
    link.addEventListener("auxclick", preventUnavailableNavigation);
});
