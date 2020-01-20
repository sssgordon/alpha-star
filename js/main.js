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
