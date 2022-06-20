
var text = ["Team creative", "company creative", "we ' are creative"];
var counter = 0;
var elem = document.querySelector(".introduction h2");
var inst = setInterval(change, 3000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}




