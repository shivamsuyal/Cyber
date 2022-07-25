let Mobile = false
gsap.registerPlugin(ScrollTrigger)

// variables
var header = document.querySelector("header")
var navMarker = document.getElementById("navMarker")
var navLinks = document.querySelectorAll("#navLinks a")
var cyberImg = document.getElementById("cyberImg")
var pedestal = document.getElementById("pedestal")
var light = document.getElementById("light")
// var lightSpot = document.getElementsByClassName('moveUp1')[0]
// var homeTxt = document.getElementById("homeTxt")
// var homeImg = document.getElementById("homeImg")
// var homeTxt1 = document.querySelector("#homeTxt h1")
// var homeTxt2 = document.querySelector("#homeTxt p")
const pages = document.getElementById("pages")
const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
const page3 = document.getElementById("page3")
const page4 = document.getElementById("page4")
const page5 = document.querySelector("footer")
const abt = document.getElementById("aboutImg")
const abtImg = document.querySelector("#aboutImg img")
const abtImgBor = document.querySelectorAll("#aboutImg span")
const carousel = document.getElementById("sliderBody")
const circleSVG ='<svg xmlns="http://www.w3.org/2000/svg" onclick="slider.circleScroll({1})" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8"/></svg>'
const gradColor = {
    "page1":document.getElementById("bcGrad1"),
    "page2":document.getElementById("bcGrad2"),
    "page3":document.getElementById("bcGrad3"),
    "page4":document.getElementById("bcGrad4"),
    // "page5":document.getElementById("bcGrad5"),
}

// variables

/* popUp function */
function popUP1(b) {
    if(b==1){ // OPEN
        popUPBG.style.opacity = '1'
        popUPBG.style.zIndex = '100'
    }else{ // CLOSE
        popUPBG.style.opacity = '0'
        popUPBG.style.zIndex = '-10'
    }
}
/* popUp function */

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


/** Nav Marker */
navLinks.forEach(e=>{
    e.onmouseover = ()=>{
        navMarker.style.left = e.offsetLeft-2.5+'px'
        navMarker.style.width = e.offsetWidth+2+'px'
        navLinks.forEach(link=>{
            if(e==link){
                link.classList.add("activeLink")
                link.classList.remove("nonActiveLink")
            }else{
                link.classList.remove("activeLink")
                link.classList.add("nonActiveLink")
            }
        })
    }
})
navLinks[0].onmouseover()
/** Nav Marker */


/** Cyber Sentinal anim */
setTimeout(()=>{
    light.style.opacity = "1"
},4500)
setTimeout(()=>{
    // document.getElementById("cyberImg").style.animation = "CyberImg 1500ms ease-in-out forwards" 
    document.getElementById("cyberImg").style.opacity = "1" 
    setTimeout(()=>{
        VanillaTilt.init(cyberImg, {
            reverse : true,
            max: 30,
            speed: 1000,
            scale:1.1,
            startX : -20
        });
    },1000)
},5500)
/** Cyber Sentinal anim */

/** Random letter function */
var stringRandom = (function() {

    var data = {
        isScrolling : false,
        repeat : 0,
        target : [],
        letters : '*+-/@_$[%£!XO1&>',
        originalStrings : '',
        singleLetters : []
    }

    Array.prototype.shuffle = function() {
        var input = this;
         
        for (var i = input.length-1; i >=0; i--) {
         
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = input[randomIndex]; 
             
            input[randomIndex] = input[i]; 
            input[i] = itemAtIndex;
        }
        return input;
    }

    function checkLength(x) {
        return Array.from(document.querySelectorAll(x)).length > 0;
    }

    function changeLetter(letter) {
        if(letter.textContent != ' ') {
            letter.classList.add('is-changing');
            letter.style.animationDuration = Math.random().toFixed(2) + 's';
            
            var newChar = data.letters.substr( Math.random() * data.letters.length, 1);

            letter.textContent = newChar;
            letter.setAttribute('data-txt', newChar);
        }
    }

    function resetLetter(letter, value) {
            letter.classList.remove('is-changing');
            letter.textContent = value;
            letter.setAttribute('data-txt', value);
    }


    function divideLetters() {
        data.target.forEach( (element, index) => {
            var text = element.textContent;
            var textDivided = '';
            data.originalStrings += text;
            for(var i = 0; i < text.length; i++) {
                textDivided += `<span class="el-sp el-st-${index}-span-${i}" data-txt="${text.substr(i, 1)}">${text.substr(i, 1)}</span>`;
            }
            element.innerHTML = textDivided;
        }); 
        data.singleLetters = document.querySelectorAll('.el-sp');
    }

    // changes letters
    function changeLetters() {
        if(data.isScrolling) {
            data.singleLetters.forEach(function(el, index){
                changeLetter(el);
            });
        }

        setTimeout(changeLetters, 100);
    }

    // reset to initial letters
    function resetLetters() {

        var randomArray = [];  
        for(var i = 0; i < data.singleLetters.length;i++) {
            randomArray.push(i);
        }

        randomArray.shuffle();

        randomArray.forEach(function(el, index){

            setTimeout(function(){
                resetLetter(data.singleLetters[el], data.originalStrings.substring(el, el + 1));
            }, (index * 60 * (Math.random() * 5))).toFixed(2);
                
        });
    }

    function updateScrollState() {
        clearTimeout(delay);
        data.isScrolling = true;
        
        var delay = setTimeout(function() {
            data.isScrolling = false;
            resetLetters();
        }, 1000);
    };

    return {
        init: function(selector){

            if(checkLength(selector)) {
                data.target = Array.from(document.querySelectorAll(selector));
                divideLetters();
                changeLetters();
                updateScrollState()
            }
        }
    }

})();
stringRandom.init("#homeTxt h1")
/** Random letter function */



/** intersetion oberserver */
// background gradient observer
pageIOBJ = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        try {
            if(e.isIntersecting){
                // alert(e.target.id)
                for (key in gradColor) {
                    if (key == e.target.id){
                        // console.log(e.target.id)
                        navLinks[e.target.id[4]-1].onmouseover()
                        // console.log(e.target.id[4]-1)
                        gradColor[e.target.id].style.opacity="1"
                        gradColor[e.target.id].style.zIndex="-10"
                    }else{
                        gradColor[key].style.opacity="0"
                        gradColor[key].style.zIndex="-20"
                    }
                }
            }
        } catch (TypeError) {}
    })
},{
    // threshold : 0.8
    rootMargin : "-50% 0px -30% 0px"
})

pageIOBJ.observe(page1)
pageIOBJ.observe(page2)
pageIOBJ.observe(page3)
pageIOBJ.observe(page4)
// pageIOBJ.observe(page5)


// page objs observer
elesIOBJ_L = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        // console.log(e.isIntersecting)
        try {
            if(e.isIntersecting){
                if(getComputedStyle(e.target).opacity == "0"){
                    if(e.target.dataset.animated){
                        e.target.style.animation = "slide-in-elliptic-left-fwd 1.3s ease-in both"
                        setTimeout(()=>{
                            e.target.style.animation = ""
                        },1500)
                    }else{
                        e.target.dataset.animated = "true"
                    }
                }
                // console.log("come back")
            }else{
                if(getComputedStyle(e.target).opacity == "1"){
                    e.target.style.animation = "slide-out-elliptic-left-bck 1s ease-in both"
                }
            }
        } catch (TypeError) {}
    })
},{
    // threshold : 0.8
    root:pages,
    rootMargin : "-35% 0px 0px 0px"
})
elesIOBJ_R = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        // console.log(e.isIntersecting)
        try {
            if(e.isIntersecting){
                if(getComputedStyle(e.target).opacity == "0"){
                    if(e.target.dataset.animated){
                        e.target.style.animation = "slide-in-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards"
                        setTimeout(()=>{
                            e.target.style.animation = ""
                        },1000)
                    }else{
                        e.target.dataset.animated = "true"
                    }
                }
                // console.log("come back")
            }else{
                if(getComputedStyle(e.target).opacity == "1"){
                    e.target.style.animation = "slide-out-right 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"
                }
            }
        } catch (TypeError) {}
    })
},{
    // threshold : 0.8
    root:pages,
    rootMargin : "-50% 0px 0px 0px"
})

elesIOBJ_L.observe(document.getElementById("homeTxtHead"))
elesIOBJ_L.observe(document.querySelector("#homeTxt p"))
elesIOBJ_R.observe(cyberImg)
elesIOBJ_R.observe(document.getElementById("pedestal"))


// about image observer
// aboutIOBJ = new IntersectionObserver((entries,observer)=>{
//     entries.forEach(e=>{
//         // console.log(e.isIntersecting)
//         try {
//             if(e.isIntersecting){
//                 e.target.style.visibility = "visible"
//                 e.target.style.display = "none"
//                 setTimeout(()=>{
//                     observer.unobserve(e.target)
//                     e.target.style.display = "block"
//                     if(!Mobile){
//                         elesIOBJ_L.observe(e.target)
//                         e.target.dataset.animated = "true"
//                     }
//                 },100)
//             }
//         } catch (TypeError) {}
//     })
// },{
//     rootMargin : "0px 0px -30% 0px"
// })

// aboutIOBJ.observe(document.querySelector("#design"))

/** intersetion oberserver */


/** about */
// gsap.from()
function updateAboutImg(){
    console.log(abtImg.dataset.reverse)
    if(abtImg.dataset.reverse == "false"){
        abt.style.minHeight = abtImg.offsetHeight + 'px'
        abt.style.minWidth = abtImg.offsetWidth + 'px'
        abtImgBor.forEach(e=>e.style.visibility = "visible")
        abtImg.dataset.reverse = "true"
    }else{
        abtImg.dataset.reverse = "false"
        abtImgBor.forEach(e=>e.style.visibility = "hidden")
    }
}
// updateAboutImg()

// abtImg.style.height = page2.offsetHeight+'px'
// abtImg.style.width = page2.offsetWidth+'px'

gsap.timeline({
    scrollTrigger : {
        trigger : "#page2",
        // scroller  : "#pages",
        start : "+=40% center",
        end : "+=5%",
        // endTrigger : "#page2",
        // markers : true,
        scrub : true,
        toggleActions : "restart pause reverse pause",
        // onEnterBack : updateAboutImg,
    }
})
.from("#page2",{opacity : 0,duration : 10})

gsap.timeline({
    scrollTrigger : {
        trigger : "#page2",
        // scroller  : "#pages",
        start : "center center",
        // markers : true,
        scrub : true,
        pin : "#page2",
        toggleActions : "restart pause reverse pause",
        // onEnterBack : updateAboutImg,
    }
})
    .fromTo(
        abtImg,
        {width : page2.offsetWidth+'px',height : page2.offsetHeight+'px'},
        {duration:2,width : "100%",height :abtImg.offsetHeight+'px',top : "50%",transform: "translateY(-50%)"}
    )
    // .add(updateAboutImg)
    .to('#move-1',{opacity : 0,duration : 1})
    .to('#move-2',{yPercent : -100,duration : 2})


/** about */

/** Carousel Functions */

const sliderColorIOBJ = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            try {
                // color = e.target.parentElement.dataset.color.split(',')
                color = e.target.dataset.color.split(',')
                document.documentElement.style.setProperty('--page_grad1',color[0])
                document.documentElement.style.setProperty('--page_grad2',color[1])
                document.documentElement.style.setProperty('--page_grad3',color[2])
            } catch (TypeError) {return}
        }
    })
},{
    root : carousel,
    rootMargin : "0px -90% 0px 0px"
})

document.querySelectorAll(".splide__slide").forEach(e=>{
    sliderColorIOBJ.observe(e)
})
/** Carousel Functions */



/** page4 team page */
const writerTIME = 200
const writerTxt = document.querySelector("#hashTags tt")
function writeIt(){
    if(!writerTxt.dataset.animated){
        var ori = "# Lorem, ipsum dolor"
        writerTxt.dataset.animated  = "true"
        writerTxt.innerText  = ""
        for(var i = 0; i < ori.length; i++){
            setTimeout((i)=>{
                if(ori[i] == " "){
                    writerTxt.innerHTML = writerTxt.innerText + "&nbsp;"
                }
                writerTxt.innerText = writerTxt.innerText + ori[i]
            },200*i,i)
        }
        setTimeout(()=>{
            document.querySelector("#hashTags span").style.display = "none"
        },writerTIME*ori.length + 20)
    }
}

// writeIt()


var p4TimeLine = gsap.timeline()
                .add(writeIt)
                .from(".title1",{y : "25vh",duration : 2})
                .from(".title1 h1",{fontSize : "8rem",duration : 2})
                .to("#hashTags",{opacity : 0,duration : 2})
                .to("#gyan p",{opacity : 1,duration : 1})
                .to(".hid1",{opacity : 1,duration : 3,stagger: 1})
                // .to("#page4 .title1 h1",{fontSize : "2rem",duration : 2,delay : "3.6"})
                // .to("#page4 .title1 tt",{fontSize : "1rem",duration : 0.5},"<0.5")
                // .to("#hashTags",{opacity : 0,duration : 0.5})
                // .to("#page4 .title1",{flexBasis : "0",duration : 2})
                // .to("#page4",{,duration : 1})


ScrollTrigger.create({
    trigger : ".title1",
    // scroller  : "#pages",
    animation : p4TimeLine,
    start : "center center",
    // markers : true,
    scrub : true,
    pin : "#page4",
    toggleActions : "restart pause reverse pause",
    // onEnterBack : updateAboutImg,
})





/** page4 team page */


/* page 5  **/
p5IO = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            // console.log("enter")
            header.style.backgroundColor = "#001220"
        }else{
            header.style.backgroundColor = "transparent"
            // console.log("exit")
        }
    })
},{
    // rootMargin : `0px 0px -${}px 0px`
    rootMargin : `0px 0px -${window.screen.height - header.offsetHeight}px 0px`
})

p5IO.observe(page5)

/* page 5  **/












/**
 * Mobile JS
 */

function MobileJS(x) {
    if (x.matches) { 
        Mobile = true
        elesIOBJ_L.disconnect()
        elesIOBJ_R.disconnect()

        var mhLinks = document.getElementById("mhLinks")
        var mhLinksA = document.querySelectorAll("#mhLinks a")
        var mhSVG = document.getElementById("mhSVG")
        var blurBG = document.getElementById("blurBG")
        var transition = 700
        
        mhSVG.onclick = ()=>{
            if(mhSVG.dataset.open == "true"){
                mhSVG.dataset.open = "false"
                // close it
                mhLinksA.forEach(e=>{
                    e.style.opacity = "0"
                })
                setTimeout(()=>{    
                    // mhSVG.classList.toggle("open") 
                    // mhSVG.style.height = "initial"
                    mhLinks.style.height = "10%"
                    mhLinks.style.borderRadius = "1rem"
                    mhSVG.style.borderRadius = "1rem"
                    setTimeout(()=>{
                        mhLinks.style.width = "0%"
                        blurBG.style.opacity = "0"
                        blurBG.style.zIndex = "-50"
                    },transition)
                },transition)
            }else{
                // open it
                blurBG.style.opacity = "1"
                blurBG.style.zIndex = "50"
                mhLinksA.forEach(e=>{
                    e.style.opacity = "0"
                })
                mhLinks.style.transition = `all ${transition}ms`
                mhSVG.dataset.open = "true"
                mhLinks.style.width = "100%"
                setTimeout(()=>{
                    mhSVG.style.transition = `all ${transition*1.5}ms`
                    mhLinks.style.height = "100%"
                    // mhSVG.style.height = "100%"
                    mhLinks.style.borderRadius = "0 0rem 0rem 0"
                    mhSVG.style.borderRadius = "0 0rem 0rem 0"
                    // mhSVG.classList.toggle("open")
                    setTimeout(()=>{
                        mhLinksA.forEach(e=>{
                            e.style.opacity = "1"
                        })
                    },transition)
                },transition)
            }
        }        
    } 
    // else {
    // //   document.body.style.backgroundColor = "pink";
    // }
  }
  
const x = window.matchMedia("(max-width: 500px)")
MobileJS(x)
x.addListener(MobileJS) 







/* */

/** window Loaded */
window.onload = ()=>{
    // updateAboutImg()
    abt.style.height = abtImg.offsetHeight + 'px'
    abt.style.width = abtImg.offsetWidth + 'px'
    new Splide('.splide',{
        perPage : 3,
        breakpoints: {
            661 : {
                perPage : 2,
            },
            574: {
                perPage: 1,
            },
      }
    }).mount()
    // setTimeout(popUP1,1000,1)
}


/** window Loaded */



