let arrowleft= document.querySelector('.arrow-left');
let arrowright= document.querySelector(".arrow-right");

let photol= document.querySelector(".photo-left");
let photor= document.querySelector(".photo-right");

arrowleft.onmouseover=function(){
    this.classList.add("imagel");
    this.classList.remove("arrow-left");
    photol.style.display="block";
   
   
}


arrowleft.onmouseout=function(){
    this.classList.add("arrow-left");
    this.classList.remove("imagel");
    photol.style.display="none";
   
}
/* start arrow-right*/
arrowright.onmouseover=function(){
    this.classList.add("imager");
    this.classList.remove("arrow-right");
    photor.style.display="block";
   
    
    
   
}
arrowright.onmouseout=function(){
    this.classList.add("arrow-right");
    this.classList.remove("imager");
    photor.style.display="none";
   
}

/* end arrow-right*/