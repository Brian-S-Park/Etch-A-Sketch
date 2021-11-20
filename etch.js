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
let x=0;
let y=0;

function Draw() {
    x++;
    if(x % 2 === 0){
        Draw_button.style.backgroundColor= "#FE3540";
        Eraser_button.disabled = false;
        Rainbow_button.disabled = false;
        Fill_button.disabled = false;
        Color_button.disabled = false;
        x=0; 
    } 
    else{
        Draw_button.style.backgroundColor="darkred";
        Eraser_button.disabled = true;
        Rainbow_button.disabled = true;
        Fill_button.disabled = true;
        Color_button.disabled = true;
    }
}

function Eraser() {
    x++;
    if(x % 2 === 0){
        Eraser_button.style.backgroundColor="#FE3540";
        Draw_button.disabled = false;
        Rainbow_button.disabled = false;
        Fill_button.disabled = false;
        Color_button.disabled = false;
        x=0;
    } 
    else{
        Eraser_button.style.backgroundColor="darkred";
        Rainbow_button.disabled = true;
        Fill_button.disabled = true;
        Color_button.disabled = true;
        Draw_button.disabled = true;
    }
}
function Rainbow() {
    x++;
    if(x % 2 === 0){
        Rainbow_button.style.backgroundColor="#FE3540";
        Eraser_button.disabled = false;
        Draw_button.disabled = false;
        Fill_button.disabled = false;
        Color_button.disabled = false;
        x=0;
        
    } 
    else{
        Rainbow_button.style.backgroundColor="darkred";
        Eraser_button.disabled = true;
        Fill_button.disabled = true;
        Color_button.disabled = true;
        Draw_button.disabled = true;
    }
}
function Fill() {
    x++;
    if(x % 2 === 0){
        Fill_button.style.backgroundColor="#FE3540";
        Eraser_button.disabled = false;
        Rainbow_button.disabled = false;
        Draw_button.disabled = false;
        Color_button.disabled = false;
    } 
    else{
        Fill_button.style.backgroundColor="darkred";
        Eraser_button.disabled = true;
        Rainbow_button.disabled = true;
        Color_button.disabled = true;
        Draw_button.disabled = true;
    }
}
function Color() {
    x++;
    if(x % 2 === 0){
        Color_button.style.backgroundColor="#FE3540";
        Eraser_button.disabled = false;
        Rainbow_button.disabled = false;
        Fill_button.disabled = false;
        Draw_button.disabled = false;
    } 
    else{
        Color_button.style.backgroundColor="darkred";
        Eraser_button.disabled = true;
        Fill_button.disabled = true;
        Rainbow_button.disabled = true;
        Draw_button.disabled = true;
    }
}


function Clear() {
    y++;
    if(y === 1){
        Clear_button.style.backgroundColor="darkred";
        animate();
        setTimeout(() => {
            Clear_button.style.backgroundColor="#FE3540";
            Box.style.animation = "reset";
        }, 1000);
        y=0;
    } 
}
function reset(){

}
function small() {
    grid_div.style.gridTemplateColumns = `repeat(16, 1fr)`
    grid_div.style.gridTemplateRows = `repeat(16, 1fr)`
    
    for (let i = 0; i < 16 * 16; i++) {
          const div = document.createElement("div");
          grid_div.appendChild(div);
        }

}
function medium() {
    grid_div.style.gridTemplateColumns = `repeat(32, 1fr)`
    grid_div.style.gridTemplateRows = `repeat(32, 1fr)`
    
    for (let i = 0; i < 32 * 32; i++) {
          const div = document.createElement("div");
          grid_div.appendChild(div);
        }

}
function large() {
    grid_div.style.gridTemplateColumns = `repeat(64, 1fr)`
    grid_div.style.gridTemplateRows = `repeat(64, 1fr)`
    for (let i = 0; i < 64 * 64; i++) {
          const div = document.createElement("div");
          grid_div.appendChild(div);
        }

}
function startover(){


}
function animate(){
    Box.style.animation = "eraseEtch 1s ease";
}

window.onload = () => {medium()}

