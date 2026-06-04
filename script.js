const toggleButton = document.getElementById('dark-mode-toggle');

// 1. Semak memori browser semasa halaman mula dibuka
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    // Jika ada butang di halaman ini (index), tukar teksnya
    if (toggleButton) toggleButton.textContent = '☀️ Mod Terang';
}

// 2. Fungsi apabila butang ditekan (hanya berjalan di halaman index yang ada butang)
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Simpan pilihan pengguna ke dalam localStorage
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️ Mod Terang';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = '🌙 Mod Gelap';
            localStorage.setItem('theme', 'light');
        }
    });
}