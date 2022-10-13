export function add(a,b){
    if(a===0 || b===0){
        return "error";
    }
    return +a + +b;
}

export function subtraction (a,b){
    return a-b;
}

export function divided(a,b){
    const zeroError= new Error ("Error no se puede dividir por 0");
    const paramError= new Error('Error: parámetro no válido')
    if(b === 0){
        throw zeroError;
    }
    if(isNaN(a) || isNaN(b)){
       throw paramError; 
    }
    return a /b
}


///controlar yo mismo los errores
/*try {
    console.log(divided(4,0))
} catch (e) {
    console.log(e.message);
}

console.log("hola")*/