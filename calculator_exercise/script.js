
//operator and result
const operator = document.getElementById("operator");
const result = document.getElementById("result");

//inputs
const inputs = [...document.querySelectorAll("#input input")];

//buttons
const btn_sum = document.getElementById("btn-sum");
const btn_sub = document.getElementById("btn-sub");
const btn_mult = document.getElementById("btn-mult");
const btn_div = document.getElementById("btn-div");

//operations
const operations = [
    //sum
    (v1, v2)=>{
        return v1+v2;
    },
    //sub
    (v1, v2)=>{
        return v1-v2;
    },
    //mult
    (v1, v2)=>{
        return v1*v2;
    },
    //div
    (v1, v2)=>{
        if (v2){
            return v1/v2;
        }
        return 0;
    }
    
];

const execute_operation = (e,i)=>{
    const char = e.target.innerHTML
    const v1 = parseInt(inputs[0].value) || 0;
    const v2 = parseInt(inputs[1].value) || 0;
    const sum = operations[i](v1,v2);
    operator.innerHTML = char
    result.innerHTML = sum;
}

//operation sum
btn_sum.addEventListener("click", e => {
    execute_operation(e, 0)});

//operation sub
btn_sub.addEventListener("click", e => {
    execute_operation(e, 1)});

//operation mult
btn_mult.addEventListener("click",e => {
    execute_operation(e, 2)});

//operation div
btn_div.addEventListener("click",e => {
    execute_operation(e, 3)});
