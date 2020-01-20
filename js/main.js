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
