
//course and course selected
const course_added = document.getElementById("course");
const course_selected = document.getElementById("course-selected");

//btns
//add course before of the selected course
const btn_add_before = document.getElementById("btn-add-before");
//add course after of the selected course
const btn_add_later = document.getElementById("btn-add-later");
//remove course
const btn_remove = document.getElementById("btn-remove");
//select course
const btn_select = document.getElementById("btn-select");

//coursies element
const coursies_element = document.getElementById("coursies");

//coursies array
const coursies = ["HTML", "CSS", "Javascript", "PHP", "React"];

//auxiliar functions

//this function disable other coursies
const clear_coursies_selected = ()=>{
    
    //get all coursies selected
    const coursies_selected = [...document.querySelectorAll(".selected")];
    
    coursies_selected.map( course =>{
        course.classList.remove("selected");
    })
}

//this function create  new element for a course
const create_new_course = (name)=>{
    
    //create a new container for course
    const new_course = document.createElement("div");
    new_course.setAttribute("class", "course");
    new_course.innerHTML = name;
    
    //add listener in course
    new_course.addEventListener("click", (e)=>{
        clear_coursies_selected();
        e.target.classList.toggle("selected");
    });

    //return the course
    return new_course;
}

//add cousies in element #course_element
coursies.map( (course, index) => {
    
    //new element for course
    const new_course = create_new_course(course);
    //add course in coursies elements
    coursies_element.appendChild(new_course);

});

//select course
btn_select.addEventListener("click", (e)=>{
    
    //const what attribute the value of course selected
    const course = document.querySelector(".selected");
    //attribute value in input of the course selected
    course_selected.value = course.innerHTML;
    
});

//remove a course
btn_remove.addEventListener("click", (e)=>{
    
    //const what attribute the value of course selected
    const course = document.querySelector(".selected");
 
    //test if course selected is null or not
    if (course_selected.value){
        //remove the course
        course.remove();
        course_selected.value = "";
    }
    else {
       course_selected.value = "selecione algum curso";
    }

});

//add course before
btn_add_before.addEventListener("click", (e)=>{
    //const what attribute the value of course selected
    const course = document.querySelector(".selected");
    
    //test if course is null or not
    if (course_added.value){
        
        //test if course selected is null or not
        if (course_selected.value){
            
            //create and add course
            const new_course = create_new_course(course_added.value);
            coursies_element.insertBefore(new_course, course);
            course_added.value = "";
            course_selected.value = "";
        }
        else {
            course_selected.value = "selecione algum curso";
        }
    }
    else {
        alert("Digite algum curso!");
    }
})

//add course later
btn_add_later.addEventListener("click", (e)=>{
    //const what attribute the value of course selected
    const course = document.querySelector(".selected");

    //test if course is null or not
    if (course_added.value){
        
        //test if course selected is null or not
        if (course_selected.value){
            
            //create and add course
            const new_course = create_new_course(course_added.value);
            coursies_element.insertBefore(new_course, course.nextSibling);
            course_added.value = "";
            course_selected.value = "";
        }
        else {
            course_selected.value = "selecione algum curso";
        }
    }
    else {
        alert("Digite algum curso!");
    }
})

