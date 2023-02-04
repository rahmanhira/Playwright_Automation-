
/* Polymorphism - poly -many and morph means forms - many forms - In object oriented programming is the ability to 
create a variable , a function or an object that has more than one form. */


class Animal{

    constructor(name){
        this.name = name
    }

    eats(){
         console.log(this.name+' eats food');
    
    }
}

class Alligator extends Animal{
    eats(){
        super.eats();
        console.log(this.name+ ' eats fishes');
        console.log(this.name+ ' looks big')
    }
}

let murphy = new Alligator('Murphy');
murphy.eats();