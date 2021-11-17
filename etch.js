const Draw_button=document.getElementById("a2");
const Eraser_button=document.getElementById("a1");
const Rainbow_button=document.getElementById("a3");
const Fill_button=document.getElementById("a4");
const Color_button=document.getElementById("a5");
const canvas_div=document.getElementById("canvas");
const Clear_button=document.getElementById("clear");
const Save_button=document.getElementById("save");
let x=0;
let y=0;


function Draw() {
    x++;
    if(x % 2 === 0){
        Draw_button.style.backgroundColor="orangered";
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
        Eraser_button.style.backgroundColor="orangered";
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
        Rainbow_button.style.backgroundColor="orangered";
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
        Fill_button.style.backgroundColor="orangered";
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
        Color_button.style.backgroundColor="orangered";
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
function Save() {
    x++;
    if(x % 2 === 0){
        Save_button.style.backgroundColor="orangered";
    } 
    else{
        Save_button.style.backgroundColor="darkred";
    }
}
function Clear() {

}
function reset(){

}