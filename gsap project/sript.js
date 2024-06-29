var g = gsap.timeline();
g.from('nav h1',{
    y: -50 ,
    opacity:0,
    delay:0.5,
    duration : .5,
    stagger:.6   
})
g.from('#maincont h1',{
    x:-400,
    opacity:0,
    duration:.7,
    stagger:.6
})
g.from('img',{
    opacity:0,
    duration:.5,
    rotate:50,
    stagger:.7
})
g.from('#bottom h2',{
    y:150,
    stagger:.7,
    opacity:0,
    duration:.5,
})
