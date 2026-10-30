"use strict";

// Impedir a abertura do currículo enquanto o PDF não tiver sido fornecido.
// Remover aria-disabled no HTML quando o documento estiver disponível.
document.querySelectorAll('.home-header__link[aria-disabled="true"]').forEach((link) => {
    const preventUnavailableNavigation = (event) => event.preventDefault();
    link.addEventListener("click", preventUnavailableNavigation);
    link.addEventListener("auxclick", preventUnavailableNavigation);
});

const emailButton = document.querySelector(".home-footer__email");
const emailStatus = document.querySelector(".home-footer__email-status");

if (emailButton && emailStatus) {
    const emailAddress = emailButton.textContent.replace(/^e-mail:\s*/i, "").trim();
    let feedbackTimeout;
    let copyingEmail = false;

    // O botão nativo também dispara click ao pressionar Enter ou Espaço.
    emailButton.addEventListener("click", async () => {
        if (copyingEmail) return;

        copyingEmail = true;
        window.clearTimeout(feedbackTimeout);
        emailStatus.textContent = "";

        try {
            if (!navigator.clipboard || typeof navigator.clipboard.writeText !== "function") {
                emailStatus.textContent = "Cópia indisponível. Copie o e-mail manualmente.";
                return;
            }

            await navigator.clipboard.writeText(emailAddress);
            emailStatus.textContent = "Copiado!";
            feedbackTimeout = window.setTimeout(() => {
                emailStatus.textContent = "";
            }, 2000);
        } catch {
            emailStatus.textContent = "Não foi possível copiar. Copie o e-mail manualmente.";
        } finally {
            copyingEmail = false;
        }
    });
}
