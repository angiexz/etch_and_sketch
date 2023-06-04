
var dim, container, box, boxes; 
//Default value
num = 16;
boxes = generateGraph(num);

//Add an event listener to the button --> new graph is generated with every click
//will need to account for edge cases in the future --> entered a non number, or number > 100, or negative
const b = document.querySelector('#e');
let t = document.querySelector('#num_box');
b.addEventListener('click',()=>{
    num = t.value;
    removePrevious(boxes);
    boxes = generateGraph(num);
})

//remove elements from DOM so can create new graph
function removePrevious(prev_squares){
    let c = document.getElementById('big_container');
    for (let s = 0 ; s<prev_squares.length;s++){
        c.removeChild(prev_squares[s]);
        console.log('slay');
    }
}

 //Function to generate new graph & add event listeners to the boxes
function generateGraph(n){
    dim = 960/n;
    //Create new div
    for(let i = 0;i<n**2;i++){
        //Get parent div
        container = document.getElementById('big_container');
        //Create new HTML element
        box = document.createElement('div');
        box.id = 'square'
        //Add HTML to DOM
        container.appendChild(box); 
        //sizing
        let sizing = dim+"px";
        box.style.width = sizing;
        box.style.height = sizing
    }

    //Get all boxes
    let squares=document.querySelectorAll('#square');
    Array.from('squares');

    //Add an event listener to every square
    for(let j = 0; j<n**2; j++){
        let s = squares[j];
        s.addEventListener('mouseover',()=>{
        s.style.backgroundColor='black';
        })
    }
    return squares;
}


