
//get elements of the webpage
const box = document.getElementById("box");
const boxes = [...document.getElementsByClassName("box")];

boxes.forEach( box => {
    console.log(box);
});