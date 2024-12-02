// script.js
const text = "<Code Checker>";
const typingSpeed = 100; // Geschwindigkeit des Tippens (ms pro Zeichen)
const pauseTime = 300; // Pause nach dem Tippen (in ms)

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const buttoncontainer = document.querySelector(".buttoncontainer");

const modalButton = document.getElementById("modalButton");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const button = document.getElementById("burgermenu");

let charIndex = 0;

function type() {
    if (charIndex < text.length) {
        typedTextSpan.textContent += text.charAt(charIndex); // Nächsten Buchstaben hinzufügen
        charIndex++;
        setTimeout(type, typingSpeed); // Nächsten Buchstaben nach einer kurzen Verzögerung tippen
    } else {
        // Nach Abschluss der Animation werden die Knöpfe sichtbar
        setTimeout(() => {
            buttoncontainer.classList.add("visible"); // Zeige die Knöpfe an
        }, pauseTime);
    }
}
// Starte die Animation, wenn die Seite geladen wurde
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500); 
});

document.addEventListener("DOMContentLoaded", () => {
    const tutorialButton = document.getElementById("modalButton");
    const modal = document.getElementById("tutorialModal");
    const closeModal = document.getElementById("closeModal");

    // Event-Listener für den "?"-Button, um das Modal zu öffnen
    tutorialButton.addEventListener("click", () => {
        modal.style.display = modal.style.display === "block" ? "none" : "block";
    });

    // Event-Listener für das Schließen des Modals, wenn auf das "X" geklickt wird
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Event-Listener für das Schließen des Modals, wenn der Benutzer außerhalb des Modals klickt
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    const burgermenu = document.getElementById("burgermenu");
    const sidebar = document.getElementById("sidebar");

    burgermenu.addEventListener("click", (event) => {
            sidebar.classList.toggle("active");
    });

    const closeSideBar = document.getElementById("closeSideBar");
    //const close = document.querySelector("close");

    closeSideBar.addEventListener("click", (event) => {
        sidebar.classList.toggle("active");
    });

});