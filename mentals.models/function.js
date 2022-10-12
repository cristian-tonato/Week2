function foo(a) {
    let b
    b=a*a
    return b
}


const z=2
foo(z);

const obj={
    name: "pepe",
    age: 23

}

obj.isAlumno = true
console.log(obj);

const prop = "name";
console.log(obj[prop]);
///////////////////////
/*const numbers = [3,5,6,]
console.log(numbers[0]);
numbers[100]=6
console.log(numbers);*/

///
const numbers = [3, 5, 6];
console.log(numbers[0]);
numbers[numbers.length] = 8;
console.log(numbers);
numbers[numbers.length]=9;

////
numbers.push(53);
//
function myPush(array,value){
    array[array.length] = value
   
    return array
}
let data = [];
data = myPush(data,"pepa");

console.log(data)