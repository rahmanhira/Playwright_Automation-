/* Classes****/


class Employee {

constructor(name,id){
    this.name = name;
    this.id = id
  }
}

let emp1 = new Employee('John',1000111);
let emp2 = new Employee('Peter',202221)

console.log('Name of the Employee :' + emp1.name);
console.log('Employee Id : ' + emp1.id);

console.log('Name of the Employee 2:' + emp2.name);
console.log('2nd Employee Id : ' + emp2.id);