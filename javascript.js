//TODO
//(1) Make box generation & event listener into a function
//(2) Fix the button thing --> how to read input text? 
//(3) Fix dimension calculation --> hhow to change width and height in css from javascript

//Function to make the div 
var dim, container, box; 
//Default value
num = 16;

//Function to generate new graph & add event listeners to the boxes
dim = 960/num;
//Create new div
for(let i = 0;i<num**2;i++){
    //Get parent div
    container = document.getElementById('big_container');
    //Create new HTML element
    box = document.createElement('div');
    box.id = 'square'
    //Add HTML to DOM
    container.appendChild(box);
}

//Get all boxes
let squares=document.querySelectorAll('#square');
Array.from('squares');

//Add an event listener to every click
for(let j = 0; j<num**2; j++){
    let s = squares[j];
    s.addEventListener('mouseover',()=>{
        s.style.backgroundColor='black';
    })
}

//Add an event listener to the button --> new graph is generated with every click
let b = document.querySelector('e');
let t = document.querySelector('num_box');
b.addEventListener('onclick',()=>{
    num = toString(t);
    console.log(num);
})