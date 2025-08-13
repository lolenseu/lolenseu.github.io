// underline menu bar
document.addEventListener("DOMContentLoaded", function() {
    const sections = [
        {id: "home", nav: "home"},
        {id: "education-section", nav: "education"},
        {id: "certificates-section", nav: "certificates"},
        {id: "skills-section", nav: "skills"},
        {id: "contact-section", nav: "contact"}
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