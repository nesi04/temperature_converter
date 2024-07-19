const input=document.getElementById("inp1");
const button = document.getElementById("b1");
const display = document.getElementById("p1");
const toCelsius = document.getElementById("inp2");
const toFahrenheit = document.getElementById("inp3");

button.onclick=function(){
    let temp = Number(input.value);
    if(toCelsius.checked){
        temp=(temp - 32) * 5/9;
        temp=temp.toFixed(1);
        display.textContent=`The temperature in celsius is ${temp}°`; 
    }
    else if(toFahrenheit.checked){
        temp = temp * 1.8 + 32
        temp=temp.toFixed(1);
        display.textContent=`The temperature in fahrenheit is ${temp}°`; 
    
        
    }
    else{
       display.textContent= " nothing selected";
    }

}