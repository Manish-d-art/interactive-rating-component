'use strict'

const button=document.querySelector('.btn');
const container1=document.querySelector('.container');
const container2=document.querySelector('.container-thank-you');

let submitted=false;

function init(){
    for( let i=1;i<=5;i++){
        document.querySelector(`.rate-${i}`).style.backgroundColor="hsl(216, 12%, 54%, 0.07)";
    }
}
 function rateFunction(val){
    init();
     submitted=true;
    document.querySelector(`.rate-block`).textContent=`you selectet ${val} out of 5`;
    document.querySelector(`.rate-${val}`).style.backgroundColor='hsl(217, 12%, 63%)';
}

for(let i=1;i<=5;i++){
    document.querySelector(`.rate-${i}`).addEventListener('click',function(){
        rateFunction(i);
    });
}

button.addEventListener('click',function(){
    if(submitted){
        container1.classList.add('hidden');
      container2.classList.remove('hidden');
    }
});
