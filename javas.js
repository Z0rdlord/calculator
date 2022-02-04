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


function addToScreen(x){
    display.textContent += x;
}

function clearAll(){
    display.textContent = '';
    num1 = 0;
    num2= 0;
}

function storeNum(){
    if (num1 == 0){
        num1 = display.textContent
    }else{
        num2 = display.textContent
    }
    display.textContent = '';
}

function equals(){
    console.log(num1,num2);
}

numKeys.forEach(e => e.addEventListener('click', (btn)=>{addToScreen(btn.target.textContent);}
));

btnClear.addEventListener('click',clearAll);
btnAdd.addEventListener('click', storeNum);
btnEquals.addEventListener('click',equals);



    