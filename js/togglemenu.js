let tooglemenu= document.querySelector(".toggle");
let linksbar= document.querySelector(".links");
tooglemenu.onclick=function(){
    
    linksbar.classList.toggle("open");
}
document.addEventListener("click",(e)=>{
   if (e.target!== tooglemenu){
        if(linksbar.classList.contains("open")){
            linksbar.classList.toggle("open");
            
        }
    
    }
    
    linksbar.addEventListener("click",(e)=>{
        e.stopPropagation();
    })
   

})

