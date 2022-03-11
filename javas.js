const display = document.querySelector('.screen');
const numKeysList = document.querySelectorAll('.numKey');
const numKeys = Array.prototype.slice.call(numKeysList);
const btnEquals = document.querySelector('#equals');
const btnClear = document.querySelector('#clear');
const btnDivide = document.querySelector('#divide');
const btnMult = document.querySelector('#multiply');
const btnAdd = document.querySelector('#add');
const btnSub = document.querySelector('subtract');

let num1 = 0;
let num2 = 0;
let sign1 = '';
let sign2 = '';
display.textContent = undefined;


function addToScreen(x){
    if(display.textContent == num1){
        display.textContent = x;
    }else{
    
    display.textContent += x;
    }
}
         
    
 

function clearAll(){
    display.textContent = '';
    num1 = 0;
    num2= 0;
    sign = '';
}

function add(){
    if (num1 == 0){
        num1 = Number(display.textContent);
    }else {
        num2 = Number(display.textContent);
        num1 = num1 + num2;
        display.textContent = num1;
        num2 =0;
    }
    if (sign1 == ''){
        sign1 = '+';
    }

}


function operate(num1,num2, x){
    if (x == "+"){
        add (num1,num2)
    }else {return;}
}

function equals(){
  if((!num1 == 0) && (display.textContent != 0))
    num2 = Number(display.textContent);
        switch(sign1){

            case "+":
                num1 = num1 +num2;
                num2 = 0;
                break;
            case "-":
                num1 = num1 - num2;
                num2 = 0;
                break;
                
            default: num2 = "not works";
            
        }
    

    display.textContent = num1;
    sign2 = "=";
    console.log(num1,num2, display.textContent, sign1,sign2);
}
    

numKeys.forEach(e => e.addEventListener('click', (btn)=>{addToScreen(btn.target.textContent);}
));

btnClear.addEventListener('click',clearAll);
btnAdd.addEventListener('click', add);
btnEquals.addEventListener('click',equals);

console.log



    