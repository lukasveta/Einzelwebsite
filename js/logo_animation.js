const text = "<Code Checker>";
const typingSpeed = 100; // Geschwindigkeit des Tippens (ms pro Zeichen)
const pauseTime = 300; // Pause nach dem Tippen (in ms)
let charIndex = 0;

const typedTextSpan = document.querySelector(".typed-text");
const buttoncontainer = document.querySelector(".buttoncontainer");

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