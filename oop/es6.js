// ES6+ 2es2015 ---es2022
//clases envueltas 
import { Student } from "./student.js";
export class Person{
    static isPerson (value){
    return value instanceof Object
}

    constructor (name = "", age= null){
         this.name=name;
        this.age= age;
    }
    greetings (target ={name:"bro"}) {
        console.log(`Hola ${target.name}, soy ${this.name} y tengo ${this.age} años`);  
    };
};


const p1=new Person("pepe",33);
console.log(p1); //Person { name: 'pepe', age: 33 }
p1.greetings() //Hola bro, soy pepe y tengo 33 años

const p2 = new Person('Elena', 37);
console.log(p2); //Person { name: 'Elena', age: 37 }
p2.greetings(p1.name)//Hola pepe, soy Elena y tengo 37 años

const p3 = new Person('Alonso', 3);
console.log(p3); //Person { name: 'Alonso', age: 3 }
p3.greetings(p1.name);//Hola pepe, soy Alonso y tengo 3 años





/*//los parametros casualemente coinciden con los this
function Person(name = "", age= null){
    this.name=name;
    this.age= age;
}
Person.define=function() {
    console.log("Las personas tenemos cerebro")
};

Person.prototype.greetings = function(target="bro"){
        console.log(`Hola ${target}, soy ${this.name} y tengo ${this.age} años`);
    
};//LA MAS USADA

Person.isPerson =function(value){
    return value instanceof Person
}*/
class Student extends Person{
    constructor (name, age, course){
        super(name, age)
        this.course = course;
    }
    greetings( target={name:"bro"}){
        super.greetings(target)
        console.log(`Estudio ${this.course}`)
    }
    
}

const s1= new Student("pepito",12, "Angular")

console.log(s1);
s1.greetings(p1.name);//cambio en function de greetins/
s1.greetings(p2)