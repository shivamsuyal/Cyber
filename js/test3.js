gsap.fromTo("#all path",{
    strokeDasharray : (i,t)=>{
        return t.getTotalLength()
    },
    strokeDashoffset : (i,t)=>{
        return t.getTotalLength()
    }
},{
    // delay : 0.3,
    duration : 2,
    strokeDashoffset : 0,
    ease : Power2.easeInOut
})