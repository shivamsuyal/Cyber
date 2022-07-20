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
    
    // placing the bugs 
    document.querySelectorAll('.bugH').forEach(e=>{
        e.style.transform = `translate(${t.children[0].offsetLeft + t.children[0].offsetWidth/2 - bugS}px,${t.children[0].offsetTop + t.children[0].offsetHeight-bugS*2}px)`
    })
    document.querySelectorAll('.bugM').forEach((e,i)=>{
        e.style.transform = `translate(${heads.children[i].offsetLeft + heads.children[i].offsetWidth/2 - bugS}px,${heads.children[i].offsetTop + heads.children[i].offsetHeight-bugS*2}px)`
    })
    /*
    gsap.timeline()
    .to("#bug8",
        {
            visibility: "visible",
            duration : 4,
            motionPath:{
                autoRotate : 90,
                path : [
                    {
                        x : heads.children[0].offsetLeft + heads.children[0].offsetWidth + 100,
                        y : heads.children[0].offsetTop + heads.children[0].offsetHeight/2
                    },
                    {
                        x : mis.children[0].offsetLeft + mis.children[0].offsetWidth/2,
                        y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                    }
                ]
            }
        }
    )
    .to("#bug9",
        {
            visibility: "visible",
            duration : 4,
            motionPath:{
                autoRotate : 90,
                path : [
                    {
                        x : heads.children[1].offsetLeft - 100,
                        y : heads.children[1].offsetTop + heads.children[1].offsetHeight/2
                    },
                    {
                        x : mis.children[0].offsetLeft + mis.children[0].offsetWidth/2,
                        y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                    }
                ]
            }
        }
    ,"<")
    .to("#bug10",
        {
            visibility: "visible",
            duration : 4,
            motionPath:{
                autoRotate : 90,
                path : [
                    {
                        x : heads.children[2].offsetLeft + heads.children[2].offsetWidth + 100,
                        y : heads.children[2].offsetTop + heads.children[2].offsetHeight/2
                    },
                    {
                        x : mis.children[0].offsetLeft + mis.children[0].offsetWidth/2,
                        y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                    }
                ]
            }
        }
    ,"<")
    .to("#bug11",
        {
            visibility: "visible",
            duration : 4,
            motionPath:{
                autoRotate : 90,
                path : [
                    {
                        x : heads.children[3].offsetLeft - 100,
                        y : heads.children[3].offsetTop + heads.children[3].offsetHeight/2
                    },
                    {
                        x : mis.children[0].offsetLeft + mis.children[0].offsetWidth/2,
                        y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                    }
                ]
            }
        }
    ,"<")
    .from("#mis .card",{opacity : 0,duration : 5},"-=2")
*/
// .from("#heads .card",{opacity : 0,duration : 5},"-=1")
// MotionPathHelper.create("#bug4")
// MotionPathHelper.create("#bug5")
// MotionPathHelper.create("#bug6")
// MotionPathHelper.create("#bug7")
    
    for(var i = 1; i < rows-1; i++){
        for(var j = 1; j < cols-1; j++ ){
            bgGrid.children[(i*cols)+j].dataset.delay = "4"
            // bgGrid.children[(i*cols)+j].dataset.dur = "120"
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
            toggleActions : "restart pause reverse pause",
            // onUpdate: self => console.log(self.direction)
        }
    })
        .to("#bgGrid .bgGrid__item",
        {
            x : (i,t)=>{
                    return getX(t)
            },
            y : (i,t)=>{
                    return getY(t)
                },
            duration : 40,
            // duration : (i,t)=>{
            //     // console.log(t,t.dataset.dur)
            //     return t.dataset.dur
            // },

            delay : (i,t)=>{
                // console.log(t,t.dataset.delay)
                return t.dataset.delay
            },
            scale : 2,
            })
            .to("#bgGrid .bgGrid__item",{opacity : 0,duration : 20},"<")
            .to("#mainTxt p",{y: 0,fontSize : "2rem",padding : "1rem 2rem",duration : 20},"<20")
            // duration : 40, opacity :0,stagger : 1})
            
            gsap.timeline({
                scrollTrigger : {
                    trigger : pres,
                    start : start,
                    // markers : true,
                    scrub : true,
                    // pin : true,
                    toggleActions : "restart pause reverse pause",
                    onUpdate: self => {
                        gsap.to("#bug1 .bug,#bug2 .bug", {rotation: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
                    }
                }
            })  
                .fromTo("#bug1",
                    {
                        // display : "block",
                        visibility: "hidden",
                        x : ()=>{
                            return pres.children[0].offsetLeft + pres.children[0].offsetWidth/2 - bugS
                        },
                        y : ()=>{
                            return pres.children[0].offsetTop + pres.children[0].offsetHeight-bugS*2
                        },
                    },
                    {
                        
                        visibility: "visible",
                        duration : dur,
                        motionPath:{
                            autoRotate : 90,
                            // autoRotate : true,
                            immediateRender: true,
                            alignOrigin: [0.5, 0.5],
                            path : [
                                {
                                    x : sec.children[0].offsetLeft - 100,
                                    y : sec.children[0].offsetTop + 50
                                },
                                {
                                    x : sec.children[0].offsetLeft + sec.children[0].offsetWidth/2-bugS,
                                    y : sec.children[0].offsetTop + sec.children[0].offsetHeight/2
                                }
                            ]
                        },
                    }
                )
                .fromTo("#bug2",
                    {
                        // display : "block",
                        visibility: "hidden",
                        x : ()=>{
                            return pres.children[1].offsetLeft + pres.children[1].offsetWidth/2-bugS
                        },
                        y : ()=>{
                            return pres.children[1].offsetTop + pres.children[1].offsetHeight-bugS*2
                        }
                    },
                    {
                        visibility: "visible",
                        duration : dur,
                        motionPath:{
                            autoRotate : 90,
                            // autoRotate : true,
                            immediateRender: true,
                            alignOrigin: [0.5, 0.5],
                            path : [
                                {
                                    x : sec.children[0].offsetLeft + sec.children[0].offsetWidth + 100,
                                    y : sec.children[0].offsetTop + 50
                                },
                                {
                                    x : sec.children[0].offsetLeft + sec.children[0].offsetWidth/2-bugS,
                                    y : sec.children[0].offsetTop + sec.children[0].offsetHeight/2
                                }
                            ]
                        }
                    },
                "<")
                .from(sec.children[0],{opacity : 0,duration : 2},`-=${dur*0.75}`)
                gsap.set("#bug3 .bug",{rotate : -180})
                gsap.timeline({
                    scrollTrigger : {
                        trigger : sec,
                        // start : "center top",
                        start : start,
                        // markers : true,
                        scrub : true,
                        // pin : true,
                        toggleActions : "restart pause reverse pause",
                        onUpdate: self => {
                            gsap.to("#bug3 .bug", {rotation: () => self.direction === -1 ? 0 : -180, overwrite: 'auto'});
                        }
                    }
                })
                    .fromTo("#bug3",
                        {
                            visibility: "hidden",
                            x : ()=>{
                                return sec.children[0].offsetLeft + sec.children[0].offsetWidth/2 - 20
                            },
                            y : ()=>{
                                return sec.children[0].offsetTop + sec.children[0].offsetHeight-bugS*2
                            }
                        },
                        {
                            visibility: "visible",
                            duration : dur,
                            x : ()=>{
                                return t.children[0].offsetLeft + t.children[0].offsetWidth/2-bugS
                            },
                            y : ()=>{
                                return t.children[0].offsetTop +bugS*2+ 10
                            } 
                        },
                        "<"
                    )
                    .from(t.children[0],{opacity : 0,duration : 2},`-=${dur*0.75}`)
              
                    gsap.timeline({
                        scrollTrigger : {
                            trigger : t,
                            // start : "center top",
                            start : start,
                            // markers : true,
                            scrub : true,
                            // pin : true,
                            toggleActions : "restart pause reverse pause",
                            onUpdate: self => {
                                gsap.to("#bug4 .bug,#bug5 .bug,#bug6 .bug,#bug7 .bug,#bug8 .bug", {rotation: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
                            }
                        }
                    })
                    .to("#bug4",
                        {
                            visibility: "visible",
                            duration : dur,
                            motionPath:{
                                autoRotate : 90,
                                path : [
                                    {
                                        x : heads.children[0].offsetLeft + heads.children[0].offsetWidth/2,
                                        y : heads.children[0].offsetTop - 100
                                    },
                                    {
                                        x : heads.children[0].offsetLeft + heads.children[0].offsetWidth/2,
                                        y : heads.children[0].offsetTop + heads.children[0].offsetHeight/2
                                    }
                                ]
                            }
                        }
                    )
                    .to("#bug5",
                        {
                            visibility: "visible",
                            duration : dur,
                            motionPath:{
                                autoRotate : 90,
                                path : [
                                    {
                                        x : heads.children[1].offsetLeft + heads.children[1].offsetWidth/2 - bugS,
                                        y : heads.children[1].offsetTop - 100
                                    },
                                    {
                                        x : heads.children[1].offsetLeft + heads.children[1].offsetWidth/2,
                                        y : heads.children[1].offsetTop + heads.children[1].offsetHeight/2
                                    }
                                ]
                            }
                        }
                    ,"<")
                    .to("#bug6",
                        {
                            visibility: "visible",
                            duration : dur,
                            motionPath:{
                                autoRotate : 90,
                                path : [
                                    
                                    {
                                        x : heads.children[2].offsetLeft + heads.children[2].offsetWidth/2,
                                        y : heads.children[2].offsetTop + heads.children[2].offsetHeight/2
                                    }
                                ]
                            }
                        }
                    ,"<")
                    .to("#bug7",
                        {
                            visibility: "visible",
                            duration : dur,
                            motionPath:{
                                autoRotate : 90,
                                path : [
                                    {
                                        x : heads.children[3].offsetLeft + heads.children[3].offsetWidth/2 - bugS,
                                        y : heads.children[3].offsetTop - 100
                                    },
                                    {
                                        x : heads.children[3].offsetLeft + heads.children[3].offsetWidth/2,
                                        y : heads.children[3].offsetTop + heads.children[3].offsetHeight/2
                                    }
                                ]
                            }
                        }
                    ,"<")
                    .to("#bug8",
                        {
                            visibility: "visible",
                            duration : dur,
                            motionPath:{
                                autoRotate : 90,
                                path : [
                                    {
                                        x : heads.children[4].offsetLeft + heads.children[4].offsetWidth/2 - bugS,
                                        y : heads.children[4].offsetTop - 100
                                    },
                                    {
                                        x : heads.children[4].offsetLeft + heads.children[4].offsetWidth/2,
                                        y : heads.children[4].offsetTop + heads.children[4].offsetHeight/2
                                    }
                                ]
                            }
                        }
                    ,"<")
                    .from("#heads .card",{opacity : 0,duration : 3},`-=${dur*0.85}`)
                
                
                gsap.timeline({
                    scrollTrigger : {
                        trigger : heads,
                        // start : "center top",
                        start : start,

                        // end : "+=100%",
                        // markers : true,
                        scrub : true,
                        // pin : "#people",
                        toggleActions : "restart pause reverse pause",
                        onUpdate: self => {
                            gsap.to("#bug9 .bug,#bug10 .bug,#bug11 .bug,#bug12 .bug,#bug13 .bug", {rotation: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
                        }
                    }
                })
                .to("#bug9",
                    {
                        visibility: "visible",
                        duration : dur,
                        motionPath:{
                            autoRotate : 90,
                            path : [
                                {
                                    x : heads.children[0].offsetLeft + heads.children[0].offsetWidth + 100,
                                    y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                                },
                                {
                                    x : mis.children[0].offsetLeft + mis.children[0].offsetWidth/2,
                                    y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                                }
                            ]
                        }
                    }
                )
                .to("#bug10",
                    {
                        visibility: "visible",
                        duration : dur,
                        motionPath:{
                            autoRotate : 90,
                            path : [
                                {
                                    x : heads.children[1].offsetLeft + heads.children[1].offsetWidth + 100,
                                    y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                                },
                                {
                                    x : mis.children[0].offsetLeft + mis.children[0].offsetWidth/2,
                                    y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                                }
                            ]
                        }
                    }
                ,"<")
                .to("#bug11",
                    {
                        visibility: "visible",
                        duration : dur,
                        motionPath:{
                            autoRotate : 90,
                            path : [
                                {
                                    x : mis.children[0].offsetLeft + mis.children[0].offsetWidth/2,
                                    y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                                }
                            ]
                        }
                    }
                ,"<")
                .to("#bug12",
                    {
                        visibility: "visible",
                        duration : dur,
                        motionPath:{
                            autoRotate : 90,
                            path : [
                                {
                                    x : heads.children[3].offsetLeft - 100,
                                    y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                                },
                                {
                                    x : mis.children[0].offsetLeft + mis.children[0].offsetWidth/2,
                                    y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                                }
                            ]
                        }
                    }
                ,"<")
                .to("#bug13",
                    {
                        visibility: "visible",
                        duration : dur,
                        motionPath:{
                            autoRotate : 90,
                            path : [
                                {
                                    x : heads.children[4].offsetLeft + heads.children[4].offsetWidth -300,
                                    y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                                },
                                {
                                    x : mis.children[0].offsetLeft + mis.children[0].offsetWidth/2,
                                    y : mis.children[0].offsetTop + mis.children[0].offsetHeight/2
                                }
                            ]
                        }
                    }
                ,"<")
                .from(mis.children[0],{opacity : 0,duration : 2},`-=${dur*0.85}`)
                
                misCARD = document.querySelector("#mis .card")
                gsap.timeline({
                    scrollTrigger : {
                        trigger : mis,
                        start : "-=20% top",
                        // start : start,

                        // end : "+=100%",
                        // markers : true,
                        scrub : true,
                        pin : true,
                        toggleActions : "restart pause reverse pause",
                        // onUpdate: self => {
                        //     gsap.to("#bug9 .bug,#bug10 .bug,#bug11 .bug,#bug12 .bug,#bug13 .bug", {rotation: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
                        // }
                    }
                })
                .to("[id^=bug]",{opacity : 0,duration : 2})
                .to(misCARD,
                    {
                        x : (misCARD.offsetLeft - 10) * -1,
                        duration : 20
                    }
                )
                .to("#misTxt",{
                    opacity : 1,
                    duration : 10
                })

    
}




/*


// bug1.style.display = "block"
// bug2.style.display = "block"

// bug1.style.left = pres.children[0].offsetLeft + pres.children[0].offsetWidth/2 + 'px'
// bug1.style.top = pres.children[0].offsetTop + pres.children[0].offsetHeight/2 + 'px'

// bug2.style.left = pres.children[1].offsetLeft + pres.children[1].offsetWidth/2 + 'px'
// bug2.style.top = pres.children[1].offsetTop + pres.children[1].offsetHeight/2 + 'px'
*/