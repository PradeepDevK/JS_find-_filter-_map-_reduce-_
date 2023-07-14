/**
 * find()
 * The find method will return the first element that satisfies the condition defined by the callback
 * function. It is looking for a simple true/false answer and once it finds a single true, it returns that 
 * true, and then exits out.
 */

const array1 = [ 3, 5, 7, 9, 10 ];
const found = array1.find(element => element > 5);
console.log(found);

/**
 * filter()
 * The filter method is used to filter the array based on conditions you provide. 
 * The filter() method also creates a new array.
 */
const array2 = ["Hello", "Apple", "Fruit", "Kiwi", "Pray", "Bless"];
const _result = array2.filter(element => element.length < 5);
console.log(_result);

/**
 * map()
 * The map method takes in an array and then manipulates in it some way and returns a new array.
 */
const array3 = [3, 4, 5, 6, 7, 8];
const map1 = array3.map(element => element + 1);
console.log(map1);

/**
 * reduce()
 * The reduce method reduces an array to a single value by performing the desired operation on the elements 
 * collectively.
 */
const array4 = [1, 2, 3, 4, 5, 6, 7, 8];
const intialValue = 0;
const sumWithInitial = array4.reduce((accumulator, currentValue) => accumulator + currentValue, intialValue);
console.log(sumWithInitial);