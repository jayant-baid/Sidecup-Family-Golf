let crsr = document.querySelector("#cursor");
let crsr_blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (value) => {
  crsr.style.left = value.x + "px";
  crsr.style.top = value.y  + "px";

  crsr_blur.style.left = value.x - 200 + "px";
  crsr_blur.style.top = value.y - 200 + "px";
});

let h4All = document.querySelectorAll("#nav h4");
h4All.forEach((ele) => {
  ele.addEventListener("mouseenter", () => {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  ele.addEventListener("mouseleave", () => {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95c11e";
    crsr.style.backgroundColor = "#95c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top 11%", // scrolling trigger ko end kb karna h
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img, #about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  // stagger:0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  // stagger:0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#quote1", {
  y: -70,
  x: -70,
  // stagger:0.4,
  scrollTrigger: {
    trigger: "#quote1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 2,
  },
});
gsap.from("#quote2", {
  y: 70,
  x: 70,
  //   duration: 1,
  // stagger:0.4,
  scrollTrigger: {
    trigger: "#quote2",
    scroller: "body",
    // markers: true,
    start: "top 155%",
    end: "top 45%",
    scrub: 2,
  },
});

gsap.from("#page4 h1", {
    y:50, 
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 2,
      },
})