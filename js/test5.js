gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.config({trialWarn: false})



/** Breathing */
let breathVal = 40
let addBreath = 1

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

const bugS = 20 //added extra
const start = "center 30%"
const dur = 40
mark = document.getElementById("marker") 
function marker(x,y){
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


window.onload = ()=>{
    for(var i = 1; i < rows-1; i++){
        for(var j = 1; j < cols-1; j++ ){
            bgGrid.children[(i*cols)+j].dataset.delay = "4"
        }
    }
    bgTimeline = gsap.timeline({
        // defaults: {duration: 5},
        scrollTrigger : {
            trigger : bgGrid,
            start : "center center",
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
        .to("#bgGrid .bgGrid__item",{opacity : 0,duration : 20},"<")
        .to("#mainTxt p",{y: 0,fontSize : "2rem",padding : "1rem 2rem",duration : 20},"<20")
        .to("#people",{opacity : 1,zIndex : 350,duration : 20})
        // duration : 40, opacity :0,stagger : 1})    
}


obj1 = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            document.querySelector("#mainTxt").style.opacity = "0"
        }else{
            document.querySelector("#mainTxt").style.opacity = "1"
        }
    })
},{
    threshold : 0.9
})

obj1.observe(document.querySelector("footer"))


