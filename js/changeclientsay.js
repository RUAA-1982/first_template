let opin1= document.querySelector(".all-opinin .client-opin1");
let opin2= document.querySelector(".all-opinin .client-opin2");
let opin3= document.querySelector(".all-opinin .client-opin3");
let bulets= document.querySelectorAll(".bullets ul li")
let counterimage=0;
let distance=-1500;
let value=true;
let arrayopin =[opin1,opin2,opin3]
let distancetransform=[-1500,-3000,2000];



setInterval(function(){
    let myrandomnumber= Math.floor(Math.random()* distancetransform.length);
  
    bulets.forEach(item=>{
       
    
     if(myrandomnumber== 0 && item.dataset.bul=="red"){
        setTimeout(function(){
            opin1.style.transform= "translatex("+ 1500+"px)";
            opin2.style.opactity="0";
            opin3.style.opactity="0";
            item.classList.add("active");
            
           
            
          
        },2000) 
        setTimeout(function(){
            opin2.style.transform= "translatex("+ 0+"px)";
           
        },1000) 
        setTimeout(function(){
            opin3.style.transform= "translatex("+ 0+"px)";
           
        },1000) 
    }  
    if(myrandomnumber== 1&& item.dataset.bul=="green"){
        setTimeout(function(){
            opin1.style.transform= "translatex("+ 0+"px)";
           
        },2000) 
        setTimeout(function(){
            opin2.style.transform= "translatex("+ 1500+"px)";
            item.classList.add("active");
           
        },2000) 
        setTimeout(function(){
            opin3.style.transform= "translatex("+ 0+"px)";
           
        },1000) 
    }
    if(myrandomnumber== 2&& item.dataset.bul=="blue"){
        setTimeout(function(){
            opin1.style.transform= "translatex("+ 0+"px)";
           
        },1000) 
        setTimeout(function(){
            opin2.style.transform= "translatex("+ 0+"px)";
          
           
        },1000) 
        setTimeout(function(){
            opin3.style.transform= "translatex("+ -1500+"px)";
            opin1.style.opactity="0";
            opin2.style.opactity="0";
            item.classList.add("active");
           
        },2000) 
    }
    
})
document.querySelectorAll(".active").forEach(bul=>{
    bul.classList.remove("active");
})
 
        
    },5000)
   



