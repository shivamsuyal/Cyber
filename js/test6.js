navLinks = document.querySelectorAll("#navLinks a")
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