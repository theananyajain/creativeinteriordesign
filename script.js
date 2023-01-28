
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();













gsap.from("#page1 #head, #link", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "circ.out",
});
gsap.from("#right h1,#p1img2", {
  x: 40,
  duration: 2,
  ease: "circ.out",
});
gsap.from("#circle ,#year", {
  opacity: 0,
  duration: 1.2,
});

gsap.from("#para", {
  x: -20,
  duration: 1,
});
gsap.from("#heroimg,#p2pica", {
  height: "0vh",
  duration: 1.5,
  ease: "sine",
  borderBottomRightRadius: "0%",
  borderBottomLeftRadius: "0%",
});

gsap.to("#leftover", {
  scrollTrigger: {
    trigger: "#leftover",
    scroller: "#main",
    //  markers : true,
    scrub: 3.5,
    end: "top 20%",
  },
  y: 420,
  duration: 2,
  ease: "sine",
});

// gsap.from("#left",{
//   scrollTrigger:{
// trigger : "#left",
// scroller : "body",
// // markers : true,
// scrub : 1,
// start : "top 90%"
//   },
//   //  opacity : 0,
//    duration : 2,
//    x : 30,
//   //  height : "80vh",

// })
// gsap.from("#beauti h1",{
//   scrollTrigger:{
//   trigger  : "#beauti h1",
//   // markers : true,
//   scroller : "body",
//   start : "top 100%",
//   scrub : 1,
//   },
//   // opacity : 0,
//   duration : 1.5,
//   fontSize : "13vh",
//   top : "7%",
//   y : 12,

// })
gsap.to("#middleover", {
  scrollTrigger: {
    trigger: "#middleover",
    scroller: "#main",
    // markers : true,
    start: "top 90%",
    end: "top 60%",
    scrub: 4,
  },
  x: 180,
  duration: 3,
});
gsap.to("#mid2over", {
  scrollTrigger: {
    trigger: "#mid2over",
    scroller: "#main",
    // markers : true,
    start: "top 90%",
    end: "top 70%",
    scrub: 4,
  },
  x: -270,
  duration: 3,
});

gsap.from("#mainh1,#beauti h1,#p2para h3", {
  scrollTrigger: {
    trigger: "#mainh1,#beauti h1,#p2para h3",
    scroller: "#main",
    //  markers : "true",
    scrub: 2,
  },
  opacity: 0.5,
  y: 40,
  duration: 1.5,
});

gsap.from("#p3head", {
  scrollTrigger: {
    trigger: "#p3head",
    scroller: "#main",
    // markers : true,
    start: "top 80%",
    scrub: 2,
  },
  x: -40,
  duration: 2,
});
gsap.from("#p4head", {
  scrollTrigger: {
    trigger: "#p4head",
    scroller: "#main",
    // markers : true,
    start: "top 80%",
    scrub: 2,
  },
  x: 35,
  duration: 2,
});

gsap.to("#box1cover", {
  scrollTrigger: {
    trigger: "#box1cover",
    scroller: "#main",
    // markers : true,
    start: "top 100%",
    end: "top 20%",
    scrub: 2,
  },
  y: 400,
  duration: 3,
  ease: "sine",
});
gsap.to("#box2cover,#box3cover", {
  scrollTrigger: {
    trigger: "#box2cover,#box3cover",
    scroller: "#main",
    // markers : true,
    start: "top 100%",
    end: "top 20%",
    scrub: 2,
  },
  y: -500,
  duration: 3,
  ease: "easeInOut",
});

var menu = document.querySelector("#three");
var page1 = document.querySelector("#page1");
var sidenav = document.querySelector("#sidenav");
var cross = document.querySelector("#cross");

menu.addEventListener("click", function () {
  page1.style.transform =
    "translateX(100px) scale(0.65) rotateY(-9deg) skewY(29deg)";
  page1.style.filter = "blur(1.2px)";
  sidenav.style.left = "2%";
});
cross.addEventListener("click", function () {
  page1.style.transform = "translateX(0px) scale(1)";
  page1.style.filter = "blur(0px)";
  sidenav.style.left = "-50%";
});

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 50,
    modifier: 3,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// $(document).ready(function(){
//   $("#letter,").lettering();

//   var tl = gsap.timeline();

//   tl.from("#letter",{
//     x : -20,
//     duration : 2,
//     opacity : 0,
//     stagger : .1,
//   })
// })

gsap.to("#leftp5", {
  scrollTrigger: {
    trigger: "#leftp5",
    scroller: "#main",
    // markers : true,
    scrub: 1,
  },
  x: -80,
  ease: Expo.easeInOut,
  duration: 2,
});
gsap.to(".rightp5", {
  scrollTrigger: {
    trigger: ".rightp5",
    scroller: "#main",
    // markers : true,
    scrub: 1,
  },
  x: 80,
  ease: Expo.easeInOut,
  duration: 2,
});

// gsap.from("#topbox", {
//   scrollTrigger: {
//     trigger: "#topbox",
//     scroller: "body",
//     markers: true,
//     scrub:1,
//   },
// x : 10,
//   duration: 1.5,
//   ease: Expo.easeInOut,
// });
gsap.from("#bigbox", {
   scrollTrigger:{
    trigger:"#bigbox",
    scroller:"#main",
    scrub:1,
   },
  x: -50,
  ease: Expo.easeInOut,
});
gsap.from("#newsletter", {
   scrollTrigger:{
    trigger:"#newsletter",
    scroller:"#main",
    scrub:1,
   },
  x: 70,
  ease: Expo.easeInOut,
});

