let names = ['Biplob','Symun','Hassan','Arif','Iqbal','Ripon'];
console.log(names); // Print the array

names.pop() // Remove the last element of the array 
console.log(names);

names.shift() // Remove the 1st element of the array 
console.log(names);

names.push('Biplob') // Add a element 
console.log(names);

names.unshift('Biplob') // remove the element 
console.log(names);

delete names[1]; // delete a element in 1 position 
console.log(names);

names[1] = 'Symun' //add a element in 1 position 
console.log(names);

names.splice(0,2); // remove elements from 0 to 2 index
console.log(names);

let talenttekOut = names.slice(0,3,2);//remove 1st 3 elements and print them with another class
console.log(names);
console.log(talenttekOut);

let evenNumbers = [2,4,6];
let oddNumbers = [1,3,5];
let primeNumbers = [3,5,7,11];
let numbers = evenNumbers.concat(oddNumbers,primeNumbers);// addin 2 arrays and print 
console.log(numbers);
