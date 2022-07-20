// gsap.registerPlugin(ScrollTrigger)
const abtImg = document.getElementById("static-1")
function updateAboutImg(){
    var dia = Math.min(abtImg.offsetHeight,abtImg.offsetWidth)
    var side = dia/Math.SQRT2
    document.documentElement.style.setProperty('--aboutImgSide', side-10+'px');
}
updateAboutImg()

const tl = gsap.timeline()
    .from("#bg1",{width : "100vw",height : "100vh",left : 0,top : 0,duration:2})
    .to("#imgBorder",{opacity : 1,duration : 1})
    .to('#move-1',{opacity : 0,duration : 1})
    .to('#move-2',{yPercent : -100,duration : 2})


ScrollTrigger.create({
    animation : tl,
    start : "center center",
    markers : true,
    scrub : true,
    pin : ["#pages",],
    toggleActions : "restart pause reverse pause",
})



// gsap.to('#move-2',{
//     scrollTrigger : {
//         trigger : '#move-1',
//         start : "center center",
//         end : "+=100%",
//         markers : true,
//         scrub : true,
//         pin : ".container",
//         toggleActions : "restart pause reverse pause"
//     },
//     y : "-100%",
//     // opacity : 1,
//     duration : 3
// })
// gsap.to('#move-1',{
//     scrollTrigger : {
//         trigger : '#move-1',
//         start : "center center",
//         end : "+=10%",
//         markers : true,
//         scrub : true,
//         // pin : true,
//         // pin : ".container",

//         toggleActions : "restart pause reverse pause"
//     },
//     // y : "-100%",
//     opacity : 0,
//     duration : 1
// })