
//create array for age
const agies = [5, 10, 15, 20, 25, 30, 35, 40, 50];

//array more than 18 year
const more_than_18 = agies.filter( age => {
    return age >= 18;
});
//array less than 18 year
const less_than_18 = agies.filter( age => {
    return age < 18;
});

//output agies
console.log(agies);
console.log(more_than_18);
console.log(less_than_18);