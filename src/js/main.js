gsap.registerPlugin(ScrollTrigger);

gsap.to(".navbar",{
    scrollTrigger:{
        trigger:".navbar",
        start:"bottom -75%",
        end:"bottom -2000%",
        toggleClass:"navbar__active"
    }
});

const tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#container3D",
        /* markers:true, */
        start:"top 10%",
        end:"center -110%",
        scrub:3,
        pin:true
    }
})

tl.to("#container3D", {x:"-27.5%", duration:10})
  .to("#container3D", {x:"-55%", duration:10})


gsap.to(".description__opis",{
    x :"150%",
    duration:3,
    scrollTrigger:{
        trigger:".description__opis",
        start:"top 65%",
        end:"center 35%",
        scrub:2
    }
})

gsap.to(".description__praca",{
    x :"-150%",
    duration:3,
    scrollTrigger:{
        trigger:".description__praca",
        start:"top 65%",
        end:"center 35%",
        /* markers:true,  */
        scrub:2
    }
})

gsap.from(".patreonImg__container",{
    x:"130%",
    duration:1.5,
    ease:Bounce.easeOut,
    scrollTrigger:{
        trigger:".patreonImg__container",
        start:"top 17%",
        end:"bottom -210%",
        toggleActions:"restart none none reverse", 
        /* markers:true, */
        pin:true,
    }
});

gsap.from(".patreonImg__container",{
    x:0,
    duration:0.1,
    scrollTrigger:{
        trigger:".destroy__patreonImg",
        /* markers:true, */
    }
});

gsap.to(".patreonImg__container",{
    x:"-180%",
    duration:1.5,
    scrollTrigger:{
        trigger:".destroy__patreonImg",
        start:"top 100%",
        end:"bottom 10%",
        toggleActions:"none none none reverse", 
        /* markers:true, */
        scrub:2
    }
});

gsap.from(".youtubeImg__container",{
    x:"130%",
    duration:1.5,
    ease:Bounce.easeOut,
    scrollTrigger:{
        trigger:".youtubeImg__container",
        start:"top 23%",
        end:"bottom -250%",
        toggleActions:"restart none none reverse", 
       /*  markers:true, */
        pin:true,
    }
});

gsap.from(".youtubeImg__container",{
    x:0,
    duration:0.1,
    scrollTrigger:{
        trigger:".destroy__youtubeImg",
        /* markers:true, */
    }
});

gsap.to(".youtubeImg__container",{
    x:"-180%",
    duration:1.5,
    scrollTrigger:{
        trigger:".destroy__youtubeImg",
        start:"top 100%",
        end:"bottom 10%",
        toggleActions:"none none none reverse", 
        /* markers:true, */
        scrub:2
    }
});

/* gsap.to(".patreonImg__container",{
    x:"-130%",
    duration:1.5,
    scrollTrigger:{
        trigger:".patreonImg__container",
        start:"top 17%",
        end:"bottom -150%",
        toggleActions:"restart none none reverse", 
        markers:true,
        pin:true,
    }
}) */



/* gsap.to("#container3D",{
    x:-1000,
    y:600,
    duration:3,
    scrollTrigger:{
        trigger:".description",
        start:"top 30%",
        end:"center 20%",
        markers:true,
        scrub:2

    }
}) */


/* gsap.to(".navbar",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:".navbar",
        start:"top 5%",
        end:"top 100px",
        markers:true,
        scrub:1,
        toggleClass:"navbar__active"
    }
});
 */
/* gsap.to(".description", {
    x: 400,
    duration:3,
    scrollTrigger:{
        trigger:".description",
        start: "top 40%",
        end:"center 20%",
        scrub:5,
        toggleActions:"restart none none none",
        // play pause resume reverse restart reset complete none
        //         onEnter onLeave onEnterback OnLeaveBack
        pin:true,
        markers:true,
        toggleClass:"red"
    }
}); */
/* gsap.to("#container3D", {
    x: -1100,
    duration:3,
    scrollTrigger:{
        trigger:"#container3D",
        start: "top 5%",
        end:"bottom -1050px",
        scrub:3,
        toggleActions:"restart none none none",
        // play pause resume reverse restart reset complete none
        //         onEnter onLeave onEnterback OnLeaveBack
        pin:true,
        pinSpacing:false,
        markers:true,
        toggleClass:"red"
    }
}); */

/* timeline */



/* tl.to(".description", {x:200, duration:2})
  .to(".description", {y:200, duration:3})
  .addLabel("rotate")
  .to(".description", {rotate:90, repeat:1, ease:"bounce"})

tl.play("rotate"); */
