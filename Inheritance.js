

/* Inheritance - Process where one class acquires properties (methods and fields) from another class */

/* Parent class-> child  class , Super class -> Sub Class , Base class -> Derived Class */

class car{

    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine started for '+this.name);
    }
    
    stopEngine(){
        console.log('Engine stopped for ' +this.name);
    }

}


class Toyota extends car {


    topSpeed(speed){
        console.log('Top speed for ' +this.name+ ' is ' +speed);
    }
}

let myCar = new Toyota();
myCar.setName('RAV4');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed('200KM');
