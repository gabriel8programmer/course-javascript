
//iterators

//array numbers
const numbers = [10, 15, 39, 11];
//create a manual iterator
const it_numbers = numbers[Symbol.iterator]();

console.log(it_numbers.next().value);//next item
console.log(it_numbers.next().value);//next item
console.log(it_numbers.next().value);//next item
console.log(it_numbers.next().value);//next item
console.log(it_numbers.next().value);//next item

//string name
const name = "Gabriel";
//create a manual iterator
const it_name = name[Symbol.iterator]();

for (let c = 0; c < 8; c++){
    console.log(it_name.next().value);//next item
}