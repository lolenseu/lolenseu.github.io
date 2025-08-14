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
        {id: "projects-section", nav: "projects"}
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
    const popoverImg = document.getElementById("popover-img");
    const popoverClose = document.getElementById("popover-close");

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


// clickable project cards
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const link = card.getAttribute('data-link');
            if (link) window.open(link, '_blank');
        });
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