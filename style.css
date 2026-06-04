/* Tetapan Asas & Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    display: flex;
    background-color: #111;
    color: #fff;
    overflow-x: hidden;
}

/* ==========================================================================
   GAYA SIDEBAR KIRI
   ========================================================================== */
.sidebar {
    width: 300px;
    height: 100vh;
    background-color: #0b0b0c;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 20px;
    border-right: 1px solid #222;
    z-index: 10;
}

/* Bahagian Profil & Nama */
.profile-section {
    text-align: center;
}

.profile-img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #4a3728; /* Tona border gelap kecoklatan */
    margin-bottom: 15px;
}

.profile-section h2 {
    font-size: 1.15rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 15px;
    letter-spacing: 0.5px;
}

/* Ikon Sosial */
.social-icons {
    display: flex;
    justify-content: center;
    gap: 12px;
}

.social-icons a {
    color: #a0a0a0;
    background-color: #1a1a1c;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.social-icons a:hover {
    background-color: #f39c12;
    color: #fff;
}

/* Menu Item Navigasi */
.nav-menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: -30px; /* Tarik sedikit ke atas supaya seimbang */
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #b0b0b0;
    text-decoration: none;
    padding: 12px 18px;
    font-size: 0.95rem;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.nav-item i {
    width: 20px;
    font-size: 1.1rem;
}

/* Keadaan menu aktif (pautan semasa yang sedang dibuka) */
.nav-item.active, .nav-item:hover {
    background-color: #1c150e; /* Warna background keemasan gelap */
    color: #f39c12; /* Warna teks keemasan tulen */
    font-weight: 600;
}

/* Footer Sidebar */
.sidebar-footer {
    text-align: center;
    font-size: 0.7rem;
    color: #555;
    line-height: 1.4;
}

/* ==========================================================================
   GAYA KANDUNGAN UTAMA SEBELAH KANAN
   ========================================================================== */
.main-content {
    margin-left: 300px; /* Mengelakkan kandungan bertindih di belakang sidebar */
    width: calc(100% - 300px);
    min-height: 100vh;
}

/* Hero Section (Latar Gambar Penuh) */
.hero-section {
    width: 100%;
    height: 100vh;
    /* Ganti gambar di bawah dengan imej latar belakang anda */
    background: url('../images/background.jpg') no-repeat center center/cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 20px;
}

/* Lapisan Gelap di atas gambar supaya tulisan mudah dibaca */
.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65); /* Kepekatan kegelapan 65% */
    z-index: 1;
}

.hero-text {
    position: relative;
    z-index: 2;
    max-width: 800px;
}

.hero-text h1 {
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: 1px;
}

.hero-text p {
    font-size: 1.3rem;
    color: #e0e0e0;
    font-weight: 300;
}

.highlight {
    color: #f39c12; /* Warna highlight emas untuk nama kos */
    border-bottom: 2px solid #f39c12;
    padding-bottom: 2px;
}

/* Gaya Butang Scroll Down */
.scroll-down {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.95rem;
    color: #b0b0b0;
}

.scroll-down i {
    margin-top: 10px;
    display: block;
    font-size: 1.2rem;
    color: #f39c12;
}

/* Animasi Anak Panah Bergerak Atas Bawah */
.arrow-animation {
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-8px);
    }
    60% {
        transform: translateY(-4px);
    }
}

/* ==========================================================================
   RESPONSIF UNTUK PAPARAN TELEFON / MOBIL
   ========================================================================== */
@media (max-width: 768px) {
    body {
        flex-direction: column;
    }
    
    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
        padding: 20px;
    }
    
    .main-content {
        margin-left: 0;
        width: 100%;
    }
    
    .hero-text h1 {
        font-size: 2.5rem;
    }
    
    .hero-text p {
        font-size: 1rem;
    }
}