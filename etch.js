//12-1 Need to fix clear so that it will return the proper amount of squares
//TO-DO Need to work on color function
//      Need to add eraser feature
//      Fix the expanding borders of etch a sketch
//      

const Draw_button=document.getElementById("a2");
const Eraser_button=document.getElementById("a1");
const Rainbow_button=document.getElementById("a3");
const Fill_button=document.getElementById("a4");
const Color_button=document.getElementById("a5");
const grid_div=document.getElementById("grid");
const Clear_button=document.getElementById("clear");
const Save_button=document.getElementById("save");
const Slider=document.getElementById("slider");
const Dimension=document.getElementById("dimension");
const Box=document.getElementById("box");
const Default=16;
const array=[];
const nameArray=[Draw_button,Eraser_button,Rainbow_button,Fill_button,Color_button];
let x=0;
let currentSize;


Draw_button.addEventListener("click", function() {
    for (let i = 0; i <= 4 ; i++) {
        nameArray[i].style.backgroundColor="#FE3540";
    }
    Draw_button.style.backgroundColor="darkred";
}); 
Eraser_button.addEventListener("click", function(e) {
    for (let i = 0; i <= 4 ; i++) {
        nameArray[i].style.backgroundColor="#FE3540";
    }
    Eraser_button.style.backgroundColor="darkred";
}); 
Rainbow_button.addEventListener("click", function() {

    for (let i = 0; i <= 4 ; i++) {
        nameArray[i].style.backgroundColor="#FE3540";
    }
    Rainbow_button.style.backgroundColor="darkred";
}); 
Fill_button.addEventListener("click", function() {
    for (let i = 0; i <= 4 ; i++) {
        nameArray[i].style.backgroundColor="#FE3540";
    }
    Fill_button.style.backgroundColor="darkred";
}); 
Color_button.addEventListener("click", function() {
    for (let i = 0; i <= 4 ; i++) {
        nameArray[i].style.backgroundColor="#FE3540";
    }
    Color_button.style.backgroundColor="darkred";
});

Clear_button.addEventListener("click", function() {
    Clear_button.style.backgroundColor="darkred";
    animate();
    setTimeout(() => {
        Clear_button.style.backgroundColor="#FE3540";
        Box.style.animation = "reset";
        generate(16);
        //temporary fix to make it small again
    }, 700); 
}); 


function reset(){

}
function generate(gridSize){
    grid_div.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    grid_div.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    clear();
    for (let i = 0; i < gridSize * gridSize; i++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            grid_div.appendChild(pixel);
            pixel.id=('pixel');
          }
            let gridBoxes=document.querySelectorAll('.pixel');
            gridBoxes.forEach((pixel)=> {
                pixel.addEventListener('mouseover', (e) => {
                    pixel.classList.add('active');
                    
                });
        });
}

function small() {
    let gridSize=16;
    generate(gridSize);
}

function medium() {
    let gridSize=32;
    generate(gridSize);
    return gridSize;
}
function large() {
    let gridSize=50;
    generate(gridSize);
}
function clear(){
    grid_div.innerHTML = '';
}

//grid_item.addEventListener("click", color);
function color(){

}

function animate(){
    Box.style.animation = "eraseEtch 1s ease";
}

window.onload = () => {small();Draw_button.style.backgroundColor="darkred";}


document.addEventListener("keyup", function(key) {
    if (key.code == 'Backspace'){
      key.preventDefault();
      Clear_button.style.backgroundColor="darkred";
        animate();
        setTimeout(() => {
            Clear_button.style.backgroundColor="#FE3540";
            Box.style.animation = "reset";
            generate(32);
        }, 700);
    }
});



 function mooed(){
     console.log("moooed");
     pixel.classList.add('active');

 }
