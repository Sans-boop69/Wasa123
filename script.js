
function showMessage() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.remove('hidden');
    surpriseMessage.style.animation = 'fadeIn 2s';
}

// Animación de entrada suave
const greeting = document.getElementById('greeting');
greeting.style.opacity = 0;
setTimeout(() => {
    greeting.style.transition = 'opacity 2s';
    greeting.style.opacity = 1;
}, 500);
