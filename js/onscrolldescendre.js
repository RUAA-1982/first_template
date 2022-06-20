
let squareprogdel = document.querySelectorAll(".prog-del h5");


let mysectionaboutcompany = document.querySelector(".our-company");


let mycompanyheightoffset = mysectionaboutcompany.offsetTop;

let companyheightoffset = mysectionaboutcompany.offsetHeight;

let pagescroll = this.innerHeight;


/******************************************** */
let slidershow = document.querySelector(".slider .navbar-all");
let slidershowimage = document.querySelector(".slider");
let linksall = document.querySelectorAll(".links ul li a");
/******************************************************* */
let intersnumber = document.querySelector(".interse");
let numberinter = document.querySelectorAll(".interse-number1 h1");
let numberinto = numberinter.textContent;
let mynumber = Number(numberinto);
/***************************************************** */

window.onscroll = function ()
 {
    if (window.pageYOffset > 0)
     {
        slidershow.style.background = "white";
        linksall.forEach(item => {
            item.style.color = "var(--main-color)";
          
            slidershow.style.boxShadow = "0px -1px 5px grey inset";

        })





        if (window.pageYOffset > (mycompanyheightoffset + companyheightoffset - pagescroll)) 
        {
            document.querySelectorAll(".exp-degree").forEach(dre => {

                dre.style.width = dre.dataset.width;
                document.querySelectorAll(".sqr").forEach(sqr => {
                    sqr.style.display = "block";
                    setTimeout(function () {
                        sqr.style.transform = "translate(" + sqr.dataset.sqr + "px)";

                    }, 1000)


                })
                






            });


            setInterval(() => {

                numberinter.forEach(elen => {
                    
                    if (elen.dataset.max!= "479") {
                        let elen1text = elen.textContent;
                        let myeletext= Number(elen1text);

                        myeletext+=1;
                        if(myeletext.toString()!==elen.dataset.max){
                            elen.innerHTML= myeletext.toString();
                        }
                        else{
                            stop;
                        }
                       
                    }
               
                    
                    })
            


        }
                   
                , 500)

            




        }
        /******************************************************* */



       
        




           

    




    /********************************************************** */

}
    else {
    slidershow.style.background = "transparent";
    linksall.forEach(item => {
        item.style.color = "white";
        slidershow.style.boxShadow = "none";

    })
}
}




