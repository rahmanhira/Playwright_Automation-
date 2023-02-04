let numbers = [1,2,3,4,5,6,7,8,9]
{
    console.log(numbers);
}

let names = ['Biplob','Symun','Ayaan','Abid','Jishaan','Faiek'];
console.log(names);


let cars = new Array ('BMW','Toyota','Ford','Honda','Lexus','Infinity')
console.log(cars);
console.log(cars[2]);
console.log(cars[0]); // get the name of the car with index 0

cars[1] = 'Mercedez'; // replaces the name of the car in index 1
console.log(cars[1]);
console.log(cars); //printing new array of the car 
cars[0] = 'Maruti'; // replaces the name of the car in index 0
console.log(cars); //printing new array of the car again

names.push('Arif'); // adding a name 
console.log(names);
console.log(names.length);


let x;
for (x in names){
    console.log(names[x]);
}

for(x of names){
    console.log(x);
}
