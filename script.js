const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ Mod Terang';
    } else {
        toggleButton.textContent = '🌙 Mod Gelap';
    }
});