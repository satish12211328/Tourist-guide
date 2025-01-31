gsap.from(".trendingimg img",{
    scale:0,
    duration:2,
    scrollTrigger:{
        trigger:".section3",
        scroller:"body",
        markers:true,
        start:"Top 250%",
        scrub:true
    }
})
gsap.from(".part1", {
opacity: 0,    
duration: 2,  
delay: 0.5,    
ease: "power2.out" ,
scrollTrigger:{
        trigger:".subpart11",
        scroller:"body",
        markers:true,
         start:"Top 170%",
        scrub:true
    }
});

gsap.from(".part2",{
    scale:0,
    x:500,
    duration:1,
    scrollTrigger:{
        trigger:".subpart11",
        scroller:"body",
        markers:true,
         start:"Top 370%",
        scrub:true
    }
})
gsap.from(".con1",{
    scale:0,

    x:500,
    duration:2,
    scrollTrigger:{
        trigger:".container",
        scroller:"body",
        markers:true,
         start:"Top 250%",
        scrub:true
    }
})
gsap.from("#tx1",{
    x:500,
    duration:1,
    ease: "none"
})
gsap.from("#tx2",{
    x:-500,
    duration:1,
    ease: "none"
})
gsap.from("#tx3",{
    y:-500,
    duration:1,
    ease: "none"
})
gsap.from("#trnim1",{
    opacity:0,
    duration:1,
    ease:"none"
})