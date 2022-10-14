const person={
    arms: 2
}

const alumno={
    course: "Coders",
    __proto__: person
}

const pepe={
    age:23,
    __proto__: alumno
};

const ernesto={
    favorite: "pepperoni"
}

Object.prototype.favorite= "bacon";




console.log(pepe.course);
console.log(pepe.arms);
console.log(pepe.__proto__);
console.log(person.__proto__);
console.log(pepe.favorite);
console.log(ernesto.favorite);