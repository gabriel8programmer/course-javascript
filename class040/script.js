
//get elements of the webpage
const box = document.getElementById("box");
const boxes = [...document.getElementsByClassName("box")];

//get length of box by your children
const length_box = box.children.length;

const new_elements = ["MySql", "Nodejs", "Sass", "Bootstrap", "Python"];

//create and define props for a new elements
new_elements.map ( ( e, k ) =>{
    //create element div
    //add class in element
    //add id in element
    //text in element
    //add element in div box
    const new_element = document.createElement("div");
    new_element.setAttribute("class", "box");
    new_element.setAttribute("id", `item${k+length_box}`);
    new_element.innerHTML = e;
    box.appendChild(new_element);
});

console.log(box.children.length);