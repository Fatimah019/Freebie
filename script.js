let menu=document.querySelector("#menu");
let menuBtn=document.querySelector("#menubtn");
let navBtn=document.querySelector("#navBtn")
let navClose=document.querySelector("#navClose");

navBtn.addEventListener('click', function(e){
    if (menu.style.display==="block" && menuBtn.style.display==="block"){
        menu.style.display="none";
        menuBtn.style.display="none";
        navBtn.style.display="none";
        navClose.style.display="block";
    }
    else{
        menu.style.display="block";
        menuBtn.style.display="block"
        menu.style.position="block";
        navClose.style.display="block";
        navBtn.style.display="none";
    }
    e.preventDefault();
});
navClose.addEventListener('click', function(e){
    if (menu.style.display==="block" && menuBtn.style.display==="block"){
        menu.style.display="none";
        menuBtn.style.display="none";
        navClose.style.display="none";
        navBtn.style.display="block";
    }
    else{
        menu.style.display="inline-block";
        menuBtn.style.display="inline-block"
        menu.style.position="block";
        menu.style.position="block";
        navBtn.style.display="block";
    }
    e.preventDefault();
})
