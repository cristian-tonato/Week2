//los parametros casualemente coinciden con los this
function Person(name = "", age= null){
    this.name=name;
    this.age= age;
}
    Person.prototype.greetings = function(target="bro"){
        console.log(`Hola ${target}, soy ${this.name} y tengo ${this.age} años`);
    
}




//instancia un objeto -> p1={}
// se ejecuta y this apunta al nuevo objeto
//el __proto__ del objeyo es el prototype de la funcion
//la propiedad constructor apunta a la funcion

const p1=new Person("pepe",33);
console.log(p1); //Person { name: 'pepe', age: 33 }
p1.greetings() //Hola bro, soy pepe y tengo 33 años

const p2 = new Person('Elena', 37);
console.log(p2); //Person { name: 'Elena', age: 37 }
p2.greetings(p1.name)//Hola pepe, soy Elena y tengo 37 años

const p3 = new Person('Alonso', 3);
console.log(p3); //Person { name: 'Alonso', age: 3 }
p3.greetings(p1.name);//Hola pepe, soy Alonso y tengo 3 años

