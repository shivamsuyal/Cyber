gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.config({trialWarn: false})



/** Breathing */
let breathVal = 40
let addBreath = 0.5

setInterval(()=>{
    if( breathVal > 60 || breathVal < 40){
        addBreath *= -1 
    }
    breathVal += addBreath
    document.documentElement.style.setProperty('--breath', breathVal +"%");
},100)
/** Breathing */

document.documentElement.style.setProperty('--cardW', document.documentElement.offsetWidth/5-20+'px');
document.documentElement.style.setProperty('--cardH', document.documentElement.offsetWidth/5-20+'px');

document.documentElement.style.setProperty('--cardAW', document.documentElement.offsetWidth/3-20+'px');
// document.documentElement.style.setProperty('--cardAH', document.documentElement.offsetWidth/3-20+'px');

const bugS = 20 //added extra
const start = "center 30%"
const dur = 40
mark = document.getElementById("marker") 
function marker(x,y){
    mark.style.zIndex = "100000"
    mark.style.opacity = "1"
    mark.style.left = x - 5 + 'px'
    mark.style.top = y - 5 + 'px'
}


const screenW = document.body.offsetWidth 
const screenH = document.body.offsetHeight 

const bgGrid = document.getElementById('bgGrid')
let rows = 5
let cols = 8
const valMax = 200
const valMin = 50





function getY(e){
    var top = Math.abs(e.offsetTop - (e.offsetHeight/2))
    var bottom = screenH - e.offsetTop - (e.offsetHeight/2)

    if(top >= bottom){
        return getRand(valMin,valMax)
    }else{
        return getRand(valMin,valMax)*-1
    }
    
}
function getX(e) {
    var left = Math.abs(e.offsetLeft - (e.offsetWidth/2))
    var right = screenW - e.offsetLeft - (e.offsetWidth/2)
    
    if(left >= right){
        return getRand(valMin,valMax)

    }else{
        return getRand(valMin,valMax)*-1
    }
}


for(var i = 0; i < 40; i++){
    bgGrid.insertAdjacentHTML("beforeend",`<div class="bgGrid__item" data-delay="0"></div>`)
}

function getRand(min=0, max) {
    return Math.random() * (max - min) + min;
}


function adjust(){
    if(window.screen.width < 700){

        if(window.screen.width < 500){
            if(window.screen.width < 400){
                bgGrid.style.gridTemplateColumns = "repeat(4,1fr)"
                bgGrid.style.gridTemplateRows = "repeat(6,1fr)"
                cols = 4
                rows = 6
                return   
            }
            bgGrid.style.gridTemplateColumns = "repeat(5,1fr)"
            bgGrid.style.gridTemplateRows = "repeat(6,1fr)"
            cols = 5
            rows = 6
            return   
        }
        bgGrid.style.gridTemplateColumns = "repeat(6,1fr)"
        bgGrid.style.gridTemplateRows = "repeat(6,1fr)"
        cols = 6
        rows = 6
        return
    }

}
adjust()




gsap.timeline({
    scrollTrigger : {
        trigger : "#adv",
        start : "bottom center",
        // markers : true,
        scroller : "#people",
        scrub : true,
        // pin : true,
        // pinType : 'transform',
        toggleActions : "restart pause reverse pause",
    }
})
.from("#pres",{opacity : 0, duration : 10})
// .to("#adv",{opacity : 0, duration : 10},"<")

gsap.timeline({
    scrollTrigger : {
        trigger : "#pres",
        start : "bottom center",
        // markers : true,
        scroller : "#people",
        scrub : true,
        // pin : true,
        // pinType : 'transform',
        toggleActions : "restart pause reverse pause",
    }
})
.from("#sec",{opacity : 0, duration : 10})
// .to("#pres",{opacity : 0, duration : 10},"<")


gsap.timeline({
    scrollTrigger : {
        trigger : "#sec",
        start : "bottom center",
        // markers : true,
        scroller : "#people",
        scrub : true,
        // pin : true,
        // pinType : 'transform',
        toggleActions : "restart pause reverse pause",
    }
})
.from("#t",{opacity : 0, duration : 10})
// .to("#sec",{opacity : 0, duration : 10},"<")

gsap.timeline({
    scrollTrigger : {
        trigger : "#t",
        start : "bottom center",
        // markers : true,
        scroller : "#people",
        scrub : true,
        // pin : true,
        // pinType : 'transform',
        toggleActions : "restart pause reverse pause",
    }
})
.from(".o1",{opacity : 0, duration : 10})
.to("#t",{opacity : 0, duration : 10},"<")

gsap.timeline({
    scrollTrigger : {
        trigger : "#heads",
        start : "bottom center",
        // markers : true,
        scroller : "#people",
        scrub : true,
        // pin : true,
        // pinType : 'transform',
        toggleActions : "restart pause reverse pause",
    }
})
// .from("#mis",{opacity : 0, duration : 10})
// .to("#heads",{opacity : 0, duration : 10},"<")



obj1 = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            document.querySelector("#mainTxt").style.opacity = "0"
        }else{
            document.querySelector("#mainTxt").style.opacity = "1"
        }
    })
},{
    threshold : 0.8
})

obj1.observe(document.querySelector("footer"))

let t1 = "" 
let t2 = "" 
let id = 1
// function connectSVG(c,opts=[]){
function connectSVG(e1,e2,c,sp=0){
    // console.log(opts)
    // t1 = opts
    t1 = e1
    t2 = e2
    x1 = e1.offsetLeft + e1.offsetWidth/2
    y1 = e1.offsetTop + e1.offsetHeight

    if(sp == 1){
        y2 = e2.offsetParent.offsetTop + e2.offsetTop
    }else{
        y2 = e2.offsetTop
    }
    x2 = e2.offsetLeft + e2.offsetWidth/2

    var extra = 10
    // c.style.height = y2-y1 + extra*2 + 'px'
    // c.style.top = y1 - extra + 'px'
    // ctx = c.getContext('2d')
    // opts.forEach(e=>{
    //     // draw line
    //     // draw circle
    // })

    var svg = `
    <svg id="line${id}" height="${y2-y1 + extra*2}px" style="top : ${y1 - extra}px" class="Lsvg ${c}">
        <path d="M${x1},0 L${x2},${y2-y1 + extra *2}"/>
        <circle cx="50" cy="50" r="10"/>
    </svg>
  `
    id++
    people.insertAdjacentHTML('beforeend',svg)
    // console.log(svg)
}

// connectSVG([
//     {
//         e1 : document.querySelector("#adv").children[3],
//         e2 : document.querySelector("#pres").children[0]
//     }
// ])
connectSVG(document.querySelector("#adv").children[3],document.querySelector("#pres").children[0])
connectSVG(document.querySelector("#adv").children[5],document.querySelector("#pres").children[1])
connectSVG(document.querySelector("#adv").children[4],document.querySelector("#sec").children[0])
connectSVG(document.querySelector("#sec").children[0],document.querySelector("#t").children[0])
document.querySelectorAll("#heads .cardContainer").forEach(e=>{
    connectSVG(document.querySelector("#t").children[0],e,"headSVG")
})
// connectSVG(document.querySelector("#heads").children[2],document.querySelector("#mis").children[0].children[0],"",1)




window.onload = ()=>{
    p1 = document.querySelector("#line1 path")
    p1.style.strokeDasharray = p1.getTotalLength() + 'px' 
    p1.style.strokeDashoffset = p1.getTotalLength() + 'px' 

    p2 = document.querySelector("#line2 path")
    p2.style.strokeDasharray = p2.getTotalLength() + 'px' 
    p2.style.strokeDashoffset = p2.getTotalLength() + 'px' 

    p3 = document.querySelector("#line3 path")
    p3.style.strokeDasharray = p3.getTotalLength() + 'px' 
    p3.style.strokeDashoffset = p3.getTotalLength() + 'px' 

    p4 = document.querySelector("#line4 path")
    p4.style.strokeDasharray = p4.getTotalLength() + 'px' 
    p4.style.strokeDashoffset = p4.getTotalLength() + 'px'

    headSVG = document.querySelectorAll(".headSVG path")
    headSVG.forEach(e=>{
        e.style.strokeDasharray = e.getTotalLength() + 'px' 
        e.style.strokeDashoffset = e.getTotalLength() + 'px'  
    })

    // p10 = document.querySelector("#line10 path")
    // p10.style.strokeDasharray = p10.getTotalLength() + 'px' 
    // p10.style.strokeDashoffset = p10.getTotalLength() + 'px' 
    
    for(var i = 1; i < rows-1; i++){
        for(var j = 1; j < cols-1; j++ ){
            bgGrid.children[(i*cols)+j].dataset.delay = "4"
        }
    }
    gsap.timeline({
        // defaults: {duration: 5},
        scrollTrigger : {
            trigger : bgGrid,
            start : "center center",
            // pinType: "fixed",
            // markers : true,
            scrub : true,
            pin : true,
            // pinType : 'transform',
            toggleActions : "restart pause reverse pause",
        }
    })
        .to("#bgGrid .bgGrid__item",{
            x : (i,t)=>{
                    return getX(t)
            },
            y : (i,t)=>{
                    return getY(t)
                },
            duration : 40,
            delay : (i,t)=>{
                return t.dataset.delay
            },
            scale : 2,
        })
        .to("#bgGrid .bgGrid__item",{opacity : 0,zIndex : -350,duration : 20},"<")
        .to("#mainTxt p",{y: 5,fontSize : "2rem",zIndex : -350,padding : "1rem 2rem",duration : 20},"<20")
        .to("#people",{opacity : 1,zIndex : 350,duration : 20})
        // duration : 40, opacity :0,stagger : 1})   
        
    gsap.timeline({
        // defaults: {duration: 5},
        scrollTrigger : {
            trigger : "#adv .cardContainer:nth-child(4)",
            start : "center center",
            scroller : "#people",
            // markers : true,
            scrub : true,
            // pin : true,
            // pinType : 'transform',
            toggleActions : "restart pause reverse pause",
        }
    })
    .to(p1,{duration : 10,strokeDashoffset:0})
    .to("#line1 circle",{
        duration : 10,
        immediateRender: true,
        motionPath:{
            path: p1,
            align: p1,
            alignOrigin: [0.5, 0.5]
        }
    },"<")
    .to(p2,{duration : 10,strokeDashoffset:0},"<")
    .to("#line2 circle",{
        duration : 10,
        immediateRender: true,
        motionPath:{
            path: p2,
            align: p2,
            alignOrigin: [0.5, 0.5]
        }
    },"<")

    gsap.timeline({
        scrollTrigger : {
            trigger : "#pres",
            start : "center center",
            end : "center center",
            endTrigger :  "#sec",
            scroller : "#people",
            // markers : true,
            scrub : true,
            // pin : true,
            // pinType : 'transform',
            toggleActions : "restart pause reverse pause",
        }
    })
    .to(p3,{duration : 10,strokeDashoffset:0})
    .to("#line3 circle",{
        duration : 10,
        immediateRender: true,
        motionPath:{
            path: p3,
            align: p3,
            alignOrigin: [0.5, 0.5]
        }
    },"<")

    gsap.timeline({
        scrollTrigger : {
            trigger : "#sec",
            start : "center center",
            scroller : "#people",
            // markers : true,
            scrub : true,
            // pin : true,
            // pinType : 'transform',
            toggleActions : "restart pause reverse pause",
        }
    })
    .to(p4,{duration : 10,strokeDashoffset:0})
    .to("#line4 circle",{
        duration : 10,
        immediateRender: true,
        motionPath:{
            path: p4,
            align: p4,
            alignOrigin: [0.5, 0.5]
        }
    },"<")

    gsap.timeline({
        scrollTrigger : {
            trigger : "#t",
            start : "center center",
            scroller : "#people",
            // markers : true,
            scrub : true,
            // pin : true,
            // pinType : 'transform',
            toggleActions : "restart pause reverse pause",
        }
    })
    .to(".headSVG path",{duration : 10,strokeDashoffset:0})
    .to(".headSVG circle",{
        duration : 10,
        immediateRender: true,
        motionPath:{
            path: (i)=>{
                return headSVG[i]
            },
            align: (i)=>{
                return headSVG[i]
            },
            alignOrigin: [0.5, 0.5]
        }
    },"<")
    .to(".headSVG",{opacity : 0,duration : 3})


    misCARD = document.querySelector("#mis .cardContainer")

    gsap.timeline({
        scrollTrigger : {
            trigger : "#heads",
            endTrigger : "#mis",
            end : "center center",
            start : "center center",
            scroller : "#people",
            // markers : true,
            scrub : true,
            // pin : true,
            // pinType : 'fixed',
            toggleActions : "restart pause reverse pause",
        }
    })
    .to(".o0",{opacity : 0,duration : 5})
    .from(misCARD,{y : -((misCARD.offsetParent.offsetTop + misCARD.offsetTop) - document.querySelector(".o0").offsetTop),duration : 5},"<")
    // .to(".headSVG circle",{
    //     duration : 10,
    //     immediateRender: true,
    //     motionPath:{
    //         path: (i)=>{
    //             return headSVG[i]
    //         },
    //         align: (i)=>{
    //             return headSVG[i]
    //         },
    //         alignOrigin: [0.5, 0.5]
    //     }
    // },"<")

    // gsap.timeline({
    //     scrollTrigger : {
    //         trigger : "#heads",
    //         start : "center center",
    //         scroller : "#people",
    //         // markers : true,
    //         scrub : true,
    //         // pin : true,
    //         // pinType : 'transform',
    //         toggleActions : "restart pause reverse pause",
    //     }
    // })
    // .to(p10,{duration : 10,strokeDashoffset:0})
    // .to("#line10 circle",{
    //     duration : 10,
    //     immediateRender: true,
    //     motionPath:{
    //         path: p10,
    //         align: p10,
    //         alignOrigin: [0.5, 0.5]
    //     }
    // },"<")

    
    // misCARD.style.opacity = "0"
    gsap.timeline({
        scrollTrigger : {
            trigger : "#mis",
            start : "center center",
            scroller : "#people",
            pinType: "fixed",
            // markers : true,
            scrub : true,
            pin : true,
            toggleActions : "restart pause reverse pause",
        }
    })
    // .to(".o1",{opacity : 0})
    // .from(misCARD,{opacity : 0},"<")
    .to(misCARD,
        {
            x : (misCARD.offsetLeft - 10) * -1,
            duration : 20
        }
    )
    .to("#misTxt",{opacity : 1,duration : 10})

}





