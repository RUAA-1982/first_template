let smothlink= document.querySelector(".button-return");

smothlink.onclick=function(){
    document.querySelector("."+smothlink.dataset.link).scrollIntoView({behavior: "smooth"});

}
    
