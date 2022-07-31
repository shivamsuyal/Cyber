// gsap.registerPlugin(MotionPathPlugin)
// gsap.registerPlugin(ScrollTrigger)
// gsap.config({trialWarn: false})



/** Breathing *
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


const navTime = gsap.timeline({
    onComplete : ()=>{
        mhLinks1.style.pointerEvents = "all"  
    },
    onReverseComplete : ()=>{
        mhLinks1.style.pointerEvents = "none"  
    }
})
.fromTo("#mhLinks1",{zIndex : -50,opacity : 0 },{zIndex : 2, opacity : 1,duration : 0.5})
.to("#mhLinks2",{clipPath : "circle(50% at 50%)",duration : 0.5,ease : Power0.easeNone})
.to("#mhLinks2 a span",{height : "100%",duration : 1,ease : Power4.easeNone,delay : 0.2,stagger : 0.1}).pause()



mhSVG.onclick = ()=>{
    if(mhSVG.dataset.open == "true"){
        mhSVG.dataset.open = "false"
        navTime.reverse()
    }else{
        mhSVG.dataset.open = "true"
        navTime.play()
    }
} 

window.addEventListener('scroll',function(e) {
    // console.log( document.documentElement.scrollTop)
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        toTop.style.opacity = "1"
        return
    }
    toTop.style.opacity = "0"
});