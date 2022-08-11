'use strict'

const rate1=document.querySelector('.rate-1');
const rate2=document.querySelector('.rate-2');
const rate3=document.querySelector('.rate-3');
const rate4=document.querySelector('.rate-4');
const rate5=document.querySelector('.rate-5');
const button=document.querySelector('.btn');
const container1=document.querySelector('.container');
const container2=document.querySelector('.container-thank-you');

rate1.addEventListener('click',function(){
    container1.classList.add('hidden');
    container2.classList.remove('hidden');
})