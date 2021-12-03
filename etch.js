const Draw_button=document.getElementById("a2");
const Eraser_button=document.getElementById("a1");
const Rainbow_button=document.getElementById("a3");
const Greyscale_button=document.getElementById("a4");
const Color_button=document.getElementById("a5");
const grid_div=document.getElementById("grid");
const Clear_button=document.getElementById("clear");
const Save_button=document.getElementById("save");
const Slider=document.getElementById("slider");
const Box=document.getElementById("box");
const pixel=document.getElementById("pixel");
const colorWheel=document.getElementById("favcolor"); 
const nameArray=[Draw_button,Eraser_button,Rainbow_button,Greyscale_button,Color_button];
const classArray=['rainbow','color','active'];
const defaultSize=16;
let gridSize=defaultSize;


Draw_button.addEventListener("click", function() {
    styleReset();
    Draw_button.style.backgroundColor="darkred";
    let gridBoxes=document.querySelectorAll('.pixel');
    gridBoxes.forEach((pixel)=> {
       pixel.addEventListener('mouseover', (e) => {
                reset(pixel);
                pixel.classList.add('active');
           }); 
        });
}); 

Eraser_button.addEventListener("click", function() {
    styleReset();
    Eraser_button.style.backgroundColor="darkred";
    let gridBoxes=document.querySelectorAll('.pixel');
    gridBoxes.forEach((pixel)=> {
                pixel.addEventListener('mouseover', (e) => {
                    reset(pixel);
           }); 
        });
}); 

Rainbow_button.addEventListener("click", function() {
    styleReset();
    Rainbow_button.style.backgroundColor="darkred";
     let gridBoxes=document.querySelectorAll('.pixel');
     gridBoxes.forEach((pixel)=> {
        pixel.addEventListener('mouseover', (e) => {
                reset(pixel);
                let randomColors1=Math.floor(Math.random()*255);
                let randomColors2=Math.floor(Math.random()*255);
                let randomColors3=Math.floor(Math.random()*255);
                pixel.style.backgroundColor=`rgb(${randomColors1},${randomColors2},${randomColors3})`;
            }); 
         });
}); 

Greyscale_button.addEventListener("click", function() {
    styleReset();
    Greyscale_button.style.backgroundColor="darkred";
    let gridBoxes=document.querySelectorAll('.pixel');
    gridBoxes.forEach((pixel)=> {
       pixel.addEventListener('mouseover', (e) => {
               reset(pixel);
               let randomColors=Math.floor(Math.random()*255);
               pixel.style.backgroundColor=`rgb(${randomColors},${randomColors},${randomColors})`;
           }); 
        });
}); 
Color_button.addEventListener("click", function() {
    styleReset();
    Color_button.style.backgroundColor="darkred";
    let gridBoxes=document.querySelectorAll('.pixel');
    gridBoxes.forEach((pixel)=> {
       pixel.addEventListener('mouseover', (e) => {
               reset(pixel);
               pixel.style.backgroundColor=colorWheel.value;
           }); 
        });
});
Clear_button.addEventListener("click", function() {
    Clear_button.style.backgroundColor="darkred";
    animate();
    setTimeout(() => {
        Clear_button.style.backgroundColor="#FE3540";
        Box.style.animation = "reset";
        styleReset();
        gridSize=slider.value;
        generate(gridSize);
    }, 700); 
}); 
function styleReset(){
    for (let i = 0; i <= 4 ; i++) {
        nameArray[i].style.backgroundColor="#FE3540";
    }
}
function reset(pixel){
    for (let i = 0; i < 3 ; i++) {
        pixel.classList.remove(classArray[i]);  
    }
    pixel.style.backgroundColor=null;
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
}

slider.addEventListener('click',function(){
    let gridSize=slider.value;
    styleReset();
    generate(gridSize);
});
function clear(){
    grid_div.innerHTML = '';
}
function animate(){
    Box.style.animation = "eraseEtch 1s ease";
}

window.onload = () => {generate(gridSize);}


document.addEventListener("keyup", function(key) {
    if (key.code == 'Backspace'){
      key.preventDefault();
      Clear_button.style.backgroundColor="darkred";
        animate();
        setTimeout(() => {
            Clear_button.style.backgroundColor="#FE3540";
            Box.style.animation = "reset";
            styleReset();
            gridSize=slider.value;
            generate(gridSize);
        }, 700);
    }
});
function drawToggle(){

}


 function mooed(){
     console.log("moooed");

 }
