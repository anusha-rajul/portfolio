function page1Animation() {
    let tl = gsap.timeline()

    tl.from('.nav-links li', {
        opacity: 0,
        y: -20,
        stagger: 0.28,
        duration:0.20
    })

    tl.from('h1', {
        opacity: 0,
        y: -50,
        duration: 0.8,
    })

    tl.from('.hero-section h2', {
        opacity: 0,
        x: -500,
        duration: 0.5
    })
    tl.from('.hero-section p', {
        opacity: 0,
        x: 500,
        duration: 0.5
    })
    tl.from('.hero-section a', {
        opacity: 0,
        y: 50,
        duration: 0.5
    })
    tl.from('.hero-section img', {
        scale: 0,
        duration: 0.9
    }, "-=0.5")
}

page1Animation()

function page2Animation() {
    let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects-section",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 0",
        scrub: 2
    }
    })

    tl2.from('.projects-section h2', {
        opacity: 0,
        y: -100,
        duration: 0.8
    })

    tl2.from('.grid-item.line1.left', {
        opacity: 0,
        x: -100,
        duration: 0.8
    })

    tl2.from('.grid-item.line1.right', {
        opacity: 0,
        x: 100,
        duration: 0.8
    })

    tl2.from('.grid-item.line2.left', {
        opacity: 0,
        x: -100,
        duration: 0.8
    })

    tl2.from('.grid-item.line2.right', {
        opacity: 0,
        x: 100,
        duration: 0.8
    })
}

page2Animation()


function page3Animation() {
    
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".skills-section",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 0",
            scrub: 1
        }
    })

    tl3.from('.skills-section h2', {
        opacity: 0,
        y: -100,
        duration: 0.8
    })
    tl3.from('.skills-section li', {
        opacity: 0,
        y: -50,
        stagger: 0.25,
        duration: 0.5
    })
}

page3Animation()

function page4Animation() {
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-section",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 0",
            scrub: 1
        }
    })

    tl4.from('.about-section', {
        scale: 0,
        duration: 0.5
    })
}

page4Animation()