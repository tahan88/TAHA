 let display_cal = document.querySelector(".display");
 
function showDisplay(e){
let x_dis = e.target.innerText;
if(display_cal.innerText == 0){
return display_cal.innerText = x_dis;
}
return display_cal.innerText +=x_dis;
}
//لوپ اعداد و عملگرها
 let event_cal = document.querySelectorAll(".show-display");
 event_cal.forEach(item =>{
item.addEventListener("click" , showDisplay)

 })
 function calculate(e) { 
let res = display_cal.innerText;
console.log(res)
display_cal.innerText=eval(res)
    
  }
  function allClear(e) { 
display_cal.innerText = 0
   }
   function clearLast(e) { 
    let res = display_cal.innerText;
    if(res.length === 1)
{
    display_cal.innerText = 0
}
else{
    display_cal.innerText = res.substring(0 , res.length-1)
}

    }
 //فانکشن محاسبه =
 document.querySelector(".calculate").addEventListener("click" , calculate)
 //فانکشن ac 
 document.querySelector(".all-clear").addEventListener("click" , allClear)
 //فانکشن c
 document.querySelector(".clear-last").addEventListener("click" , clearLast)