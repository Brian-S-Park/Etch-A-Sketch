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
const nameArray= [Draw_button,Eraser_button,Rainbow_button,Fill_button,Color_button];
let x=0;
//const currentMode;
Draw_button.addEventListener("click", function() {
    for (let i = 0; i <= 4 ; i++) {
        nameArray[i].style.backgroundColor="#FE3540";
    }
    Draw_button.style.backgroundColor="darkred";
}); 
Eraser_button.addEventListener("click", function() {
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
    }, 1000); 
}); 


function reset(){

}

function small() {
    grid_div.style.gridTemplateColumns = `repeat(16, 1fr)`
    grid_div.style.gridTemplateRows = `repeat(16, 1fr)`
    clear();
    for (let i = 0; i < 16 * 16; i++) {
          const pixel = document.createElement('div');
          pixel.classList.add('pixel');
          pixel.style.backgroundColor = 'whitesmoke';
          grid_div.appendChild(pixel);
        }
}

function medium() {
    grid_div.style.gridTemplateColumns = `repeat(32, 1fr)`
    grid_div.style.gridTemplateRows = `repeat(32, 1fr)`
    clear();
    for (let i = 0; i < 32 * 32; i++) {
          const pixel = document.createElement('div');
          pixel.classList.add('pixel');
          pixel.style.backgroundColor = 'whitesmoke';
          grid_div.appendChild(pixel);
        }
}
function large() {
    grid_div.style.gridTemplateColumns = `repeat(64, 1fr)`
    grid_div.style.gridTemplateRows = `repeat(64, 1fr)`
    clear();
    for (let i = 0; i < 64 * 64; i++) {
          const pixel = document.createElement('div');
          pixel.classList.add('pixel');
          pixel.style.backgroundColor = 'whitesmoke';
          grid_div.appendChild(pixel);
        }
}
function clear(){
    grid_div.innerHTML = '';
    //active;
}

//grid_item.addEventListener("click", color);
function color(){

}

function cursor(){
 

}
function animate(){
    Box.style.animation = "eraseEtch 1s ease";
}

window.onload = () => {small()}

document.addEventListener("keyup", function(key) {
    if (key.code == 'ArrowUp' || key.code == 'KeyW'){
      key.preventDefault();

    }
});
  document.addEventListener("keyup", function(key) {
    if (key.code == 'Backspace'){
      key.preventDefault();
      Clear_button.style.backgroundColor="darkred";
        animate();
        setTimeout(() => {
            Clear_button.style.backgroundColor="#FE3540";
            Box.style.animation = "reset";
        }, 1000);
    }
  });

// const active = () => {
//     let clickedPixels = document.querySelectorAll('.pixel');
//     clickedPixels.forEach(pxl => {
//         pixel.addEventListener('mouseover', (e) =>{
//             let currentColor = getComputedStyle(pxl, null).getPropertyValue('background-color');

//             e.target.backgroundCOlor = 'rgba(0,0,0)';


//             }
//         });
//     });
// }