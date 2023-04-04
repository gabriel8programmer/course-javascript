
//elements html
const area_array = document.querySelector("#array p");
const area_result = document.querySelector("#result p");
const txt_search = document.getElementById("txt-search");
const btn_search = document.getElementById("btn-search");

//array of items
// const numbers = [2, 3, 4, 5, 6, 10, 11, 17];
const items = ["html", "css", "javascript", "PHP", "React"];

//attribute value in area_array
area_array.innerHTML = `[${items}]`;

//method for the button
btn_search.addEventListener("click", (e) => {

  //attribute value of the searchs
  const value_search = txt_search.value;

  //show result case not exist none value in array
  area_result.innerHTML = "Valor inexistente!";

  //iterate array and return value of search
  const search = items.find((item, index) => {
    if (item.toLowerCase() == value_search.toLowerCase()) {
      area_result.innerHTML = `O item ${item} foi encontrado na posicao ${index + 1}!`;
    }
  });
});