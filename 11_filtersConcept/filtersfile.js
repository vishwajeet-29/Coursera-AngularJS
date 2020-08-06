//a number array
var numbers = [1,2,3,4,5,6,7,8,9,10];

//pick out even numbers from given number array
//using filter function
//filter function contains another function which contains the logic to meet out our requirement
//value as an argument is provided automatically by the js through number array
//this 'value' argument is used to iterate through number array
var evenNumbers = numbers.filter(function(value){
    return value%2 == 0;
});

//pick out odd numbers from given number array
var oddNumbers = numbers.filter(function(value){
    return value%2 == 1;
});
console.log("Array containing even numbers : ",evenNumbers);
console.log("Array containing odd numbers : ",oddNumbers);

//In above two filters, we directly wrote a function in it.
//But we can do it in another way also.
//By writing that inner function seperately and just call that into the filter
//this is most recommended way to use filters

//e.g.
//pick out all numbers greater than 5 from given number array

function above5Filter(value){
    return value > 5;
};

var filtered5Array = numbers.filter(above5Filter);

console.log("Numbers greater than 5 are : ", filtered5Array);

//Another Example

var shoppingList1 = ['Milk', 'Eggs', 'Cheese', 'Honey', 'Oats', 'Bread', 'Butter', 'Yogurt'];

//value to be search in the shopping list items
var searchValue = "e";

//function we treat it as a filter to return all items containing the searchValue
function containsItemFilter(value){
    return value.indexOf(searchValue) != -1;
};

//returned values are get stored in searchShoppingList
var searchShoppingList = shoppingList1.filter(containsItemFilter);

console.log("Items containing 'e' are : ", searchShoppingList);

