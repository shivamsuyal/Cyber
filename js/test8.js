// gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.config({trialWarn: false})


/** Calculation of Canvas animation width */
const canvas = document.getElementById('navCanvas')
const ctx = canvas.getContext('2d')
let navFill = {
    r : 0,
    i : 0,
    n : 25,
    ani : true
}
// canvas.height = window.innerHeight
// canvas.width = window.innerWidth
// ctx.fillStyle = 'red'
ctx.lineWidth = 50
ctx.lineJoin = "round";
var a = canvas.width 
var b = canvas.height - 40 
var c = Math.sqrt((a*a)+(b*b)) 

/** Calculation of Canvas animation width */


// var mhLinks = document.getElementById("mhLinks")
// var mhLinksA = document.querySelectorAll("#mhLinks a")
var mhSVG = document.getElementById("mhSVG")
// var blurBG = document.getElementById("blurBG")
var transition = 700

mhSVG.onclick = ()=>{
    if(mhSVG.dataset.open == "true"){
        mhSVG.dataset.open = "false"
        navFill.ani = true
        navTime.reverse()
        // close it
        // mhLinksA.forEach(e=>{
        //     e.style.opacity = "0"
        // })
        setTimeout(()=>{    
            // mhSVG.classList.toggle("open") 
            // mhSVG.style.height = "initial"
            // mhLinks.style.height = "10%"
            // mhLinks.style.borderRadius = "1rem"
            mhSVG.style.borderRadius = "1rem"
            // setTimeout(()=>{
            //     // mhLinks.style.width = "0%"
            //     // blurBG.style.opacity = "0"
            //     // blurBG.style.zIndex = "-50"
            // },transition)
        },transition)
    }else{
        // open it
        // blurBG.style.opacity = "1"
        // blurBG.style.zIndex = "50"
        // mhLinksA.forEach(e=>{
        //     e.style.opacity = "0"
        // })
        // mhLinks.style.transition = `all ${transition}ms`
        mhSVG.dataset.open = "true"
        navTime.play()
        // mhLinks.style.width = "100%"
        setTimeout(()=>{
            mhSVG.style.transition = `all ${transition*1.5}ms`
            // mhLinks.style.height = "100%"
            // // mhSVG.style.height = "100%"
            // mhLinks.style.borderRadius = "0 0rem 0rem 0"
            mhSVG.style.borderRadius = "0 0rem 0rem 0"
            // mhSVG.classList.toggle("open")
            // setTimeout(()=>{
            //     mhLinksA.forEach(e=>{
            //         e.style.opacity = "1"
            //     })
            // },transition)
        },transition)
    }
} 



function drawShape(){
    if(navFill.ani){
        r = navFill.r
        i = navFill.i
        n = navFill.n
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath()
        ctx.save()
        ctx.translate(canvas.width,0)
        ctx.moveTo(0,0-r)
        for (var j = 0; j < n; j++) {
            ctx.rotate(Math.PI/n)
            ctx.lineTo(0,0-(r*i))
            ctx.rotate(Math.PI/n)
            ctx.lineTo(0,0-r)
        }
        ctx.restore()
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
    }
}

gsap.ticker.add(drawShape)
const navTime = gsap.timeline({
    onStart : ()=>{
        // console.log('Start')
        navFill.ani = true
    },
    onComplete : ()=>{
        // console.log('Complete')
        navFill.ani = false
    },
    onReverseComplete : ()=>{
        // console.log('ReverseComplete')
        navFill.ani = false
    },
    // onRepeat : ()=>{
    //     console.log('Repeat')
    // }
})
.from(canvas,{opacity : 0,duration : 1})
.to(navFill,{r : c,i : 1 ,duration : 2, ease:Circ.easeIn},"<")
.to("#mhLinks a span",{height : "100%",duration : 1,ease : Power4,delay : 0.2,stagger : 0.1}).pause()


// gsap.timeline()
//     .fromTo("#Csvg1 path",{
//         strokeDasharray : (i,t)=>{
//             return t.getTotalLength()
//         },
//         strokeDashoffset : (i,t)=>{
//             return t.getTotalLength()
//         }
//     },{
//         duration : 4,
//         strokeDashoffset : 0,
//         ease : Power3.easeInOut
//     })
//     .to("#page1Txt p",{opacity : 1,duration : 2,stagger : 0.6},"<2")
//     .fromTo("#scrollD path",{
//         strokeDasharray : (i,t)=>{
//             return t.getTotalLength()
//         },
//         strokeDashoffset : (i,t)=>{
//             return t.getTotalLength()
//         }
//     },{
//         // delay : 0.3,
//         duration : 2,
//         strokeDashoffset : 0,
//         ease : Power2.easeInOut
//     })
//     .from("#scrollD path",{fill : "transparent",duration : 0.5})

