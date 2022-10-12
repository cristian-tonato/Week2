console.log(22,typeof 22)
console.log("22");
let a = {}
a="pepe"
console.log(a);

//mutables e inmutabless

const arr= [12,24,84];
let str="Pepe"

console.log(arr[0]);
console.log(str[0]);
arr[0]=13;
console.log(arr[0]);
console.log(+"22");
console.log(+"pepe");


isNaN()
Number.isNaN();

console.log("22",isNaN("22"));
console.log("pepe",isNaN('pepe'));



console.log(Number.isNaN("pepe"))
console.log(Number.isNaN(0/0));


const t=2
const big=2n
console.log(t + Number(big));
console.log(BigInt(t) +(big));
console.log(2 +"2")
console.log(2+Number("2"))