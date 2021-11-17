const Draw_button=document.getElementById("a2");
const Eraser_button=document.getElementById("a1");
const Rainbow_button=document.getElementById("a3");
const Fill_button=document.getElementById("a4");
const Fill_button=document.getElementById("a5");
const canvas_div=document.getElementById("canvas");

function Draw() {
    
    document.getElementById("test").innerHTML="boom baby";
}
document.getElementById("a2").addEventListener("click", function() {
    document.getElementById("test").innerHTML = "Hello World";
    Draw_button.style.color="blue";
});