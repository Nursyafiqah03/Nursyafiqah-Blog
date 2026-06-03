// Mengambil butang berdasarkan ID
const toggleButton = document.getElementById('dark-mode-toggle');

// Mendengar arahan klik pada butang
toggleButton.addEventListener('click', () => {
    // Tukar kelas 'dark-mode' pada elemen body
    document.body.classList.toggle('dark-mode');
    
    // Tukar teks butang mengikut mod semasa
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ Mod Terang';
    } else {
        toggleButton.textContent = '🌙 Mod Gelap';
    }
});