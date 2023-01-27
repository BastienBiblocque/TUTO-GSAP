gsap.registerPlugin(MotionPathPlugin);

gsap.to(".mybox", {
    x:200,
    backgroundColor: "blue",
    height: 100,
    width: 100,
    duration: 2,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
})

gsap.to("#rect", {
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    }
});