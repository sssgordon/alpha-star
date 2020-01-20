// NAV

$(".burgerIcon").hover(
    function() {
        gsap.to(".burgerLine:first-child", { duration: 0.2, x: -10 });
        gsap.to(".burgerLine:last-child", { duration: 0.2, x: 10 });
    },

    function() {
        gsap.to(".burgerLine:first-child", { duration: 0.2, x: 0 });
        gsap.to(".burgerLine:last-child", { duration: 0.2, x: 0 });
    }
);

const tlmenu = gsap.timeline({ paused: true }); // paused is imperative, otherwise the timeline plays by default
tlmenu
    .to("nav", { duration: 0.3, autoAlpha: 1 }) // autoAlpha is opacity & visibility for gsap
    .fromTo(
        "nav li",
        { y: 100, opacity: 0 },
        { duration: 0.5, stagger: 0.1, y: 0, opacity: 1 }
    );

// when the burger icon is clicked, the tlmenu animation will play at 0 second
$(".burgerIcon").click(function() {
    tlmenu.play(0);
});

$(".closeButton").click(function() {
    tlmenu.reverse(0);
});

// HERO SECTION
gsap.fromTo(
    "#hero h1",
    { y: 80, opacity: 0 },
    { duration: 0.6, y: 0, opacity: 1, delay: 0.5 }
);

gsap.fromTo(
    "#hero .learnMoreButton",
    { y: 100, opacity: 0 },
    { y: 20, opacity: 1, duration: 0.6, delay: 1.1, ease: "back.out" }
);

// FOUR COLUMN SECTION
$(".fourColItem").hover(
    function() {
        //$(this) selects only the fourColItem hovered over, NOT ALL fourColItem
        gsap.to($(this), { y: -10, scale: 1.03, duration: 0.5 });
        gsap.to($(this), {
            boxShadow: "0 0 20px rgba(0,0,0,0.36)",
            duration: 0.5
        });
    },
    function() {
        gsap.to($(this), { y: 0, scale: 1, duration: 0.5 });
        gsap.to($(this), {
            boxShadow: "0 0 20px rgba(0,0,0,0.06)",
            duration: 0.5
        });
    }
);

// SERVICES SECTION
gsap.set(".serviceBoxInner", { y: 200, opacity: 0 });

$(".serviceBox").hover(
    function() {
        gsap.to($(this).find(".serviceBoxInner"), {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 0.5
        });
    },
    function() {
        gsap.to($(this).find(".serviceBoxInner"), {
            y: 200,
            opacity: 0,
            ease: "power2.out",
            duration: 0.5
        });
    }
);

// COG SECTION
gsap.to(".cogLeft", { rotation: 360, ease: "none", repeat: -1, duration: 8 });
gsap.to(".cogRight", { rotation: -360, ease: "none", repeat: -1, duration: 8 });
