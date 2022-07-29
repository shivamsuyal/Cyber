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

mark = document.getElementById("marker") 
function marker(x,y){
    mark.style.zIndex = "100000"
    mark.style.opacity = "1"
    mark.style.left = x - 5 + 'px'
    mark.style.top = y - 5 + 'px'
}





