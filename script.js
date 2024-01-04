var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click", function(){
  if(flag == 0){
    bulb.style.backgroundColor = "red"
    btn.innerHTML = "ON"
    flag = 1
  }
  else{
    bulb.style.backgroundColor = "green"
    btn.innerHTML = "OFF"
    flag = 0
  }
});