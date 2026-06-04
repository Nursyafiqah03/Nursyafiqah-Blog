const toggleButton = document.getElementById('dark-mode-toggle');

// 1. Semak memori browser semasa halaman dibuka
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (toggleButton) toggleButton.textContent = '☀️ Mod Terang';
}

// 2. Fungsi tukar mod apabila butang di index ditekan
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️ Mod Terang';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = '🌙 Mod Gelap';
            localStorage.setItem('theme', 'light');
        }
    });
}