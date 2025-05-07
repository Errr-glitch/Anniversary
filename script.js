//https://twitter.com/One_div

// Fungsi untuk smooth scroll ke konten
function scrollToContent() {
    document.querySelector('#messages').scrollIntoView({
        behavior: 'smooth'
    });
}

// Fungsi untuk animasi heart
function createHearts() {
    const landingPage = document.querySelector('.landing-page');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-animation';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.opacity = Math.random();
        
        landingPage.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

// Fungsi untuk preview sertifikat
function previewCertificate() {
    const modal = document.querySelector('.certificate-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCertificatePreview() {
    const modal = document.querySelector('.certificate-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listener untuk menutup modal dengan tombol ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCertificatePreview();
    }
});

// Event listener untuk menutup modal ketika mengklik di luar gambar
document.querySelector('.certificate-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCertificatePreview();
    }
});

// Music Player Control
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

// Debug: Cek apakah elemen ditemukan
console.log('Music Toggle:', musicToggle);
console.log('Background Music:', bgMusic);

let isPlaying = false;

// Fungsi untuk mengubah ikon
function updateMusicIcon() {
    const icon = musicToggle.querySelector('i');
    console.log('Updating icon, isPlaying:', isPlaying);
    if (isPlaying) {
        icon.className = 'fas fa-pause';
    } else {
        icon.className = 'fas fa-play';
    }
}

// Fungsi untuk memulai musik
function startMusic() {
    console.log('Attempting to start music...');
    
    // Set volume ke level yang nyaman
    bgMusic.volume = 0.5;
    
    // Coba putar musik
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('Music started successfully');
            isPlaying = true;
            musicToggle.classList.add('playing');
            updateMusicIcon();
        }).catch(error => {
            console.error('Error playing music:', error);
            isPlaying = false;
            musicToggle.classList.remove('playing');
            updateMusicIcon();
        });
    }
}

// Fungsi untuk menghentikan musik
function stopMusic() {
    console.log('Stopping music...');
    bgMusic.pause();
    isPlaying = false;
    musicToggle.classList.remove('playing');
    updateMusicIcon();
}

// Event listener untuk tombol musik
musicToggle.addEventListener('click', function() {
    console.log('Music toggle clicked, current state:', isPlaying);
    if (isPlaying) {
        stopMusic();
    } else {
        startMusic();
    }
});

// Event listener untuk ketika musik selesai
bgMusic.addEventListener('ended', function() {
    console.log('Music ended');
    isPlaying = false;
    musicToggle.classList.remove('playing');
    updateMusicIcon();
});

// Event listener untuk error musik
bgMusic.addEventListener('error', function(e) {
    console.error('Music error:', e);
});

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    createHearts();
    
    function scrollToContent() {
        document.querySelector('#messages').scrollIntoView({
            behavior: 'smooth'
        });
    
        // Mulai musik di sini, setelah user interaction
        startMusic();
    }
    
    // Fungsi untuk smooth scroll
    window.scrollToContent = function() {
        document.querySelector('#messages').scrollIntoView({
            behavior: 'smooth'
        });
    };

    // Set ikon awal
    updateMusicIcon();
    
    // Coba autoplay musik
    startMusic();
});

