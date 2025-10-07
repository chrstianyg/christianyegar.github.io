document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk animasi fade-in saat menggulir
    const animateSections = () => {
        const sections = document.querySelectorAll('.animate');
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            // Animasi dimulai saat 80% dari bagian terlihat (0.8)
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('animated');
            }
        });
    };

    // Panggil fungsi saat halaman dimuat dan saat menggulir
    window.addEventListener('load', animateSections);
    window.addEventListener('scroll', animateSections);
});
