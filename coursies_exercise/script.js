
//course and course selected
const course_added = document.getElementById("course");
const course_selected = document.getElementById("course-selected");

//btns
//add course
const btn_add = document.getElementById("btn-add");
//remove course
const btn_remove = document.getElementById("btn-remove");
//select course
const btn_select = document.getElementById("btn-select");

//coursies element
const coursies_element = document.getElementById("coursies");

//coursies array
const coursies = ["HTML", "CSS", "Javascript", "PHP", "React"];

//add cousies in element #course_element
coursies.map( (course, index) => {
    
    //create a new container for course
    const container_course = document.createElement("div");
    container_course.setAttribute("class", "course");
    container_course.setAttribute("id", `course-${index+1}`);
 
    //create a legend for the course
    const legend_course = document.createElement("label");
    legend_course.innerHTML = course;

    //create a control for to select a course
    const control_course = document.createElement("input");
    control_course.setAttribute("type", "radio");
    control_course.setAttribute("name", "rdb-course");
    
    //add elements (course, legend and control)
    coursies_element.appendChild(container_course);
    container_course.appendChild(legend_course);
    container_course.appendChild(control_course);
});

//select course
btn_select.addEventListener("click", (e)=>{
    //get all elements course
    const all_radios = [...document.querySelectorAll(".course input[type=radio]")];

    //search course
    const control_actived = all_radios.filter(radio =>{
        return radio.checked;
    });
    
    //attribute value in input of the course selected
    //try exception case none course exist
    try {
        course_selected.value = control_actived[0].previousSibling.innerHTML;
    }
    catch (exception){
        course_selected.value = "nenhum curso selecionado!";
    }
    
});
