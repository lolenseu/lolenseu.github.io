document.addEventListener("DOMContentLoaded", function() {
    const sections = [
        {id: "home", nav: "home"},
        {id: "education-section", nav: "education"},
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