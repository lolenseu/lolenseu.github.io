// hamburger menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");
    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });
});


// underline menu bar
document.addEventListener("DOMContentLoaded", function() {
    const sections = [
        {id: "home", nav: "home"},
        {id: "education-section", nav: "education"},
        {id: "certificates-section", nav: "certificates"},
        {id: "skills-section", nav: "skills"},
        {id: "projects-section", nav: "projects"},
        {id: "photos-section", nav: "photos"},
    ];
    const navLinks = {};
    sections.forEach(s => {
        navLinks[s.nav] = document.getElementById(s.nav);
    });

    function onScroll() {
        let current = "home";
        for (const s of sections) {
            const section = document.getElementById(s.id);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom > 100) {
                    current = s.nav;
                }
            }
        }
        for (const nav in navLinks) {
            navLinks[nav].classList.remove("active");
        }
        navLinks[current].classList.add("active");
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
});


// typing effect for motto
const text = "\"Work is easy if you can automate it.\"";
let i = 0;
let typingInterval;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").textContent += text.charAt(i);
        i++;
    } else {
        clearInterval(typingInterval);
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            i = 0;
            document.getElementById("typing").textContent = "";
            typingInterval = setInterval(typeWriter, 100);
        } else {
            clearInterval(typingInterval);
            document.getElementById("typing").textContent = "";
            i = 0;
        }
    });
});

observer.observe(document.querySelector(".motto"));


// clickable timeline items
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.timeline-content.clickable').forEach(function(el) {
        el.addEventListener('click', function() {
            const link = el.getAttribute('data-link');
            if (link) window.open(link, '_blank');
        });
    });
});


// certificate popover
document.addEventListener("DOMContentLoaded", function() {
    const popover = document.getElementById("certificate-popover");
    const popoverImg = document.getElementById("certificate-popover-img");
    const popoverClose = document.getElementById("certificate-popover-close");

    document.querySelectorAll(".certificate-item img").forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function() {
            popoverImg.src = img.src;
            popover.style.display = "flex";
        });
    });

    popoverClose.addEventListener("click", function() {
        popover.style.display = "none";
        popoverImg.src = "";
    });

    popover.addEventListener("click", function(e) {
        if (e.target === popover) {
            popover.style.display = "none";
            popoverImg.src = "";
        }
    });

    document.addEventListener("keydown", function(e) {
        if (popover.style.display === "flex" && (e.key === "Escape" || e.key === "Esc")) {
            popover.style.display = "none";
            popoverImg.src = "";
        }
    });
});


// certificate popover navigation
document.addEventListener("DOMContentLoaded", function() {
    const certPopover = document.getElementById("certificate-popover");
    const certPopoverImg = document.getElementById("certificate-popover-img");
    const certPopoverClose = document.getElementById("certificate-popover-close");
    const certPopoverPrev = document.getElementById("certificate-popover-prev");
    const certPopoverNext = document.getElementById("certificate-popover-next");

    const certImgs = Array.from(document.querySelectorAll(".certificate-item img"));
    let certIndex = 0;

    function showCert(index) {
        if (index < 0) index = certImgs.length - 1;
        if (index >= certImgs.length) index = 0;
        certIndex = index;
        certPopoverImg.src = certImgs[certIndex].src;
    }

    certImgs.forEach((img, idx) => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function() {
            showCert(idx);
            certPopover.style.display = "flex";
        });
    });

    certPopoverPrev.addEventListener("click", function(e) {
        e.stopPropagation();
        showCert(certIndex - 1);
    });

    certPopoverNext.addEventListener("click", function(e) {
        e.stopPropagation();
        showCert(certIndex + 1);
    });

    certPopoverClose.addEventListener("click", function() {
        certPopover.style.display = "none";
        certPopoverImg.src = "";
    });

    certPopover.addEventListener("click", function(e) {
        if (e.target === certPopover) {
            certPopover.style.display = "none";
            certPopoverImg.src = "";
        }
    });

    document.addEventListener("keydown", function(e) {
        if (certPopover.style.display === "flex") {
            if (e.key === "Escape" || e.key === "Esc") {
                certPopover.style.display = "none";
                certPopoverImg.src = "";
            }
            if (e.key === "ArrowLeft") {
                showCert(certIndex - 1);
            }
            if (e.key === "ArrowRight") {
                showCert(certIndex + 1);
            }
        }
    });
});


// clickable project cards
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const link = card.getAttribute('data-link');
            if (link) window.open(link, '_blank');
        });
    });
});


// photo popover
document.addEventListener("DOMContentLoaded", function() {
    const photosPopover = document.getElementById("photos-popover");
    const photosPopoverImg = document.getElementById("photos-popover-img");
    const photosPopoverClose = document.getElementById("photos-popover-close");

    document.querySelectorAll(".photo-item img").forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function() {
            photosPopoverImg.src = img.src;
            photosPopover.style.display = "flex";
        });
    });

    photosPopoverClose.addEventListener("click", function() {
        photosPopover.style.display = "none";
        photosPopoverImg.src = "";
    });

    photosPopover.addEventListener("click", function(e) {
        if (e.target === photosPopover) {
            photosPopover.style.display = "none";
            photosPopoverImg.src = "";
        }
    });

    document.addEventListener("keydown", function(e) {
        if (photosPopover.style.display === "flex" && (e.key === "Escape" || e.key === "Esc")) {
            photosPopover.style.display = "none";
            photosPopoverImg.src = "";
        }
    });
});


// photo popover navigation
document.addEventListener("DOMContentLoaded", function() {
    const photosPopover = document.getElementById("photos-popover");
    const photosPopoverImg = document.getElementById("photos-popover-img");
    const photosPopoverClose = document.getElementById("photos-popover-close");
    const photosPopoverPrev = document.getElementById("photos-popover-prev");
    const photosPopoverNext = document.getElementById("photos-popover-next");

    const photoImgs = Array.from(document.querySelectorAll(".photo-item img"));
    let currentIndex = 0;

    function showPhoto(index) {
        if (index < 0) index = photoImgs.length - 1;
        if (index >= photoImgs.length) index = 0;
        currentIndex = index;
        photosPopoverImg.src = photoImgs[currentIndex].src;
    }

    photoImgs.forEach((img, idx) => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function() {
            showPhoto(idx);
            photosPopover.style.display = "flex";
        });
    });

    photosPopoverPrev.addEventListener("click", function(e) {
        e.stopPropagation();
        showPhoto(currentIndex - 1);
    });

    photosPopoverNext.addEventListener("click", function(e) {
        e.stopPropagation();
        showPhoto(currentIndex + 1);
    });

    photosPopoverClose.addEventListener("click", function() {
        photosPopover.style.display = "none";
        photosPopoverImg.src = "";
    });

    photosPopover.addEventListener("click", function(e) {
        if (e.target === photosPopover) {
            photosPopover.style.display = "none";
            photosPopoverImg.src = "";
        }
    });

    document.addEventListener("keydown", function(e) {
        if (photosPopover.style.display === "flex") {
            if (e.key === "Escape" || e.key === "Esc") {
                photosPopover.style.display = "none";
                photosPopoverImg.src = "";
            }
            if (e.key === "ArrowLeft") {
                showPhoto(currentIndex - 1);
            }
            if (e.key === "ArrowRight") {
                showPhoto(currentIndex + 1);
            }
        }
    });
});


// animate on scroll
document.addEventListener("DOMContentLoaded", function() {
    function handleAni() {
        document.querySelectorAll('.ani').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80 && rect.bottom > 80) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }
    window.addEventListener('scroll', handleAni);
    handleAni();
});


// back to top button
document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.getElementById("back-to-top");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });
    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});