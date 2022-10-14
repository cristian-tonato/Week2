let sherlock={
    surname: "Holmes",
    adrres:{
        stret: "Baker"
    },
    grettings:()=>{
        console.log("hola")
    }
}
//se puede añadir propiedades afuera de la varibale.
sherlock.adrres.number = "221B";
sherlock.adrres.city = "London"
// se puede añadir propiedades nueva fuera.
sherlock.hollydays={city: "Mallorca"};

////
let john ={ }
john.adrress={...sherlock.adrres}
let obj={}
console.log(obj.algo?.foo?.bar);

