
/* Encapsulation - A mechanism of restricting direct access to some of the object's components ,
a mechanism of bundling data with methods that operate on the data. **/


class Employee{

    setEmpDetails (name,id,sex){
      this.name = name;
      this.id = id;
      this.sex = sex;
    }

    getEmpName(){
        return this.name;
    }
    
    getEmpId(){
        return this.id;
    }

    getEmployeeSex(){
        return this.sex;
    }

}

    let emp1 = new Employee();

    emp1.setEmpDetails('John','1001','12123421');
    console.log (emp1.getEmpName());
    console.log (emp1.getEmpId());
    console.log (emp1.getEmployeeSex());


