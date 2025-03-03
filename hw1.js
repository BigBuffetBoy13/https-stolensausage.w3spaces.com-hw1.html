  /*
 Name: Diego Delgado
 Date created: 2/9/2025
 Date last edited: 2/9/2025
Version:3
Description: Homework 1 JS
*/
//dynamic datejs code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;
//name slider js code
let slider = document.getElementById("range");
let output = document.get.ElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};