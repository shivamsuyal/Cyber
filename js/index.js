// variables
var navMarker = document.getElementById("navMarker")
var navLinks = document.querySelectorAll("#navLinks a")
var cyberImg = document.getElementById("cyberImg")
var pedestal = document.getElementById("pedestal")
var light = document.getElementById("light")
var lightSpot = document.getElementsByClassName('moveUp1')[0]
var homeTxt = document.getElementById("homeTxt")
var homeImg = document.getElementById("homeImg")
// var homeTxt1 = document.querySelector("#homeTxt h1")
// var homeTxt2 = document.querySelector("#homeTxt p")
const pages = document.getElementById("pages")
const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
const page3 = document.getElementById("page3")
const page4 = document.getElementById("page4")
const page5 = document.getElementById("page5")
const abtImg = document.getElementById("aboutImg")
const carousel = document.getElementById("sliderBody")
const circleSVG ='<svg xmlns="http://www.w3.org/2000/svg" onclick="slider.circleScroll({1})" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8"/></svg>'
const gradColor = {
    "page1":document.getElementById("bcGrad1"),
    "page2":document.getElementById("bcGrad2"),
    "page3":document.getElementById("bcGrad3"),
    "page4":document.getElementById("bcGrad4"),
    "page5":document.getElementById("bcGrad5"),
}

// variables



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

            data.originalStrings = text;

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
                for (key in gradColor) {
                    if (key == e.target.id){
                        // console.log(e.target.id)
                        navLinks[e.target.id[4]-1].onmouseover()
                        // console.log(e.target.id[4]-1)
                        gradColor[e.target.id].style.opacity="1"
                    }else{
                        gradColor[key].style.opacity="0"
                    }
                }
            }
        } catch (TypeError) {}
    })
},{
    threshold : 0.8
    // rootMargin : "0px 0px -10% 0px"
})

pageIOBJ.observe(page1)
pageIOBJ.observe(page2)
pageIOBJ.observe(page3)
pageIOBJ.observe(page4)
pageIOBJ.observe(page5)


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

elesIOBJ_L.observe(document.querySelector("#homeTxt h1"))
elesIOBJ_L.observe(document.querySelector("#homeTxt p"))
elesIOBJ_R.observe(cyberImg)
elesIOBJ_R.observe(document.getElementById("pedestalGroup"))


// about image observer
aboutIOBJ = new IntersectionObserver((entries,observer)=>{
    entries.forEach(e=>{
        // console.log(e.isIntersecting)
        try {
            if(e.isIntersecting){
                console.log("gotit")
                e.target.style.visibility = "visible"
                e.target.style.display = "none"
                setTimeout(()=>{
                    observer.unobserve(e.target)
                    e.target.style.display = "block"
                    elesIOBJ_L.observe(e.target)
                    e.target.dataset.animated = "true"
                },100)
            }
        } catch (TypeError) {}
    })
},{
    rootMargin : "0px 0px -30% 0px"
})

aboutIOBJ.observe(document.querySelector("#design"))

/** intersetion oberserver */


/** about */
function updateAboutImg(){
    var dia = Math.min(abtImg.offsetHeight,abtImg.offsetWidth)
    var side = dia/Math.SQRT2
    document.documentElement.style.setProperty('--aboutImgSide', side-10+'px');
}
/** about */

/** Carousel Functions */

const sliderIOBJ = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            slider.updateCircle(e.target.dataset.page)
        }
    })
},{
    root : carousel,
    threshold : [0.9]
})

const sliderColorIOBJ = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            try {
                color = e.target.parentElement.dataset.color.split(',')
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

document.querySelectorAll(".sliderCard").forEach(e=>{
    sliderColorIOBJ.observe(e)
})


class mySliderClass {
    'use strict';
    constructor({
        target = undefined,
        items = 3,
        bnts = {
            prev : undefined,
            nxt : undefined
        },
        scrollBy = undefined,
        circle  = undefined,
    }={}) {
        this.target = target
        this.showItems = items
        this.bnts = bnts
        this.scrollBy = scrollBy
        this.circle = circle
        // declaring vars
        this.isDown = false
        this.startX
        this.scrollLeft
        // Setting up buttons
        if(this.bnts){
            if(this.bnts.prev && this.bnts.nxt){
                this.bnts.prev.onclick = ()=>{
                    if(this.target.scrollLeft == 0){
                        this.target.scrollLeft = slider.target.scrollLeftMax
                    }else{
                        this.target.scrollLeft -= this.scrollBy
                    }
                }
                this.bnts.nxt.onclick = ()=>{
                    if(this.target.scrollLeft == slider.target.scrollLeftMax){
                        this.target.scrollLeft = 0
                    }else{
                        this.target.scrollLeft += this.scrollBy
                    }
                }
            }else{
                console.log("Not all buttons are given",this.bnts)
            }
        }
        


        // setting up mouse scroll
        this.target.addEventListener('mousedown',(e)=>{
            this.isDown = true
            this.target.classList.add("active")
            this.startX = e.pageX - this.target.offsetLeft
            this.scrollLeft = this.target.scrollLeft
        })
        this.target.addEventListener('mouseleave',()=>{
            this.isDown = false
            this.target.classList.remove("active")
        })
        this.target.addEventListener('mouseup',()=>{
            this.isDown = false
            this.target.classList.remove("active")
        })
        this.target.addEventListener('mousemove',(e)=>{
            if(!this.isDown) return;
            e.preventDefault()
            var x = e.pageX - this.target.offsetLeft
            var walk = this.scrollLeft - ((x - this.startX)*1)
            this.target.scrollLeft = walk
        })

        // calc the card width and scroll
        if(!this.scrollBy){
            this.updateWidthScroll()
        }

        // setting up page observer
        var tmp2 = this.target.children
        for(var j=0, z = 0; j < tmp2.length ; j++){
            if( (j % (this.showItems)) == 0){
                tmp2[j].dataset.page = z
                sliderIOBJ.observe(tmp2[j])
                z++
            }
        }

    }
    updateWidthScroll(x = this.showItems){
        this.showItems = x
        var sliderW = this.target.offsetWidth
        var cardW = this.target.children[0].children[0].offsetWidth
        var capacity = parseInt(sliderW/cardW)  
        if(capacity < this.showItems){
            this.showItems = capacity
        }
        this.cardWidth = sliderW / this.showItems
        this.scrollBy = sliderW 
        this.setroot('cardWidth',this.cardWidth+'px')
        this.target.scrollLeft = 0
        this.pages = this.target.children.length / this.showItems
        if(parseInt(this.pages) < this.pages){
            this.pages = parseInt(this.pages) + 1
        }
        this.activePage = 0
        this.drawCircle()
    }
    updateCircle(x){
        this.circle.children[this.activePage].classList.remove('activeCircle')
        this.activePage = x
        this.circle.children[this.activePage].classList.add('activeCircle')
    }
    drawCircle(){
        this.circle.innerHTML = ""
        for(var i = 0; i < this.pages ; i++){
            this.circle.insertAdjacentHTML('beforeend',circleSVG.replace("{1}",i))
        }
        this.circle.children[this.activePage].classList.add('activeCircle')
    }
    getroot(x){
        return getComputedStyle(document.documentElement).getPropertyValue('--'+x);
    }
    setroot(x,y){
        document.documentElement.style.setProperty('--'+x, y);
    }
    circleScroll(x){
        this.target.scrollLeft = (this.scrollBy * x)
    }
}

const slider = new mySliderClass({
    target : carousel,
    items : 3,
    bnts : {
        prev : document.getElementById("prevBnt"),
        nxt : document.getElementById("nxtBnt")
    },
    circle : document.getElementById('sliderCircle')
    // scrollBy : 100
})
/** Carousel Functions */


/* page 5 rbg color disco **/
const contactField = document.querySelectorAll(".formField input")

contactField.forEach(e => {
    e.onfocus = ()=>{
        e.parentNode.classList.add("activeField")
    }
    e.onblur = ()=>{
        e.parentNode.classList.remove("activeField")
    }
});

/* page 5 rbg color disco **/




/** window resizes */
window.onresize = ()=>{
    light.style.width = lightSpot.getBoundingClientRect().width-5 + 'px'
    updateAboutImg()
    slider.updateWidthScroll()
}
window.onresize()
/** window resizes */


