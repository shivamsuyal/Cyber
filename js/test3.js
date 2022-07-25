
/** window Loaded */
window.onload = ()=>{
    // updateAboutImg()
    // abt.style.height = abtImg.offsetHeight + 'px'
    // abt.style.width = abtImg.offsetWidth + 'px'
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



