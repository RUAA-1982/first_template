let arrayimage=["1.jpg","2.jpg","3.jpg","4.jpg"];
let sliderphoto= document.querySelector(".slider");

function randomise(){
    setInterval(()=>{
        let randonnumber= Math.floor((Math.random()*arrayimage.length));
        
        sliderphoto.style.background = 'url("image/' + arrayimage[randonnumber] + '")';
    },3000)
}
randomise();