//js
//color button
let bodyy=document.querySelector(".calculator");
let btn=document.querySelector("#change_color");
let mode="light";
btn.onclick= ()=>{
    if(mode==="light"){
        mode="dark";
        bodyy.classList.add("dark");
        bodyy.classList.remove("light");
    }
    else{
        mode="light";
        bodyy.classList.add("light");
        bodyy.classList.remove("dark");
    }
    console.log(mode)
    }
// Input
let input = document.querySelector("#inputbox");
let buttons = document.querySelectorAll("button"); // Corrected from "buttton"
let string = "";

// Adding event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', (ele) => {
        if (ele.target.innerHTML === '=') {
            
             string = eval(string); 
             input.value = string;
            
        } else if (ele.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (ele.target.innerHTML === 'X') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += ele.target.innerHTML;
            input.value = string;
        }
    });
});
