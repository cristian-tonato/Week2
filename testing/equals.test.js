import { strictEquals } from "./equals.js";


describe ("GIVEN striEquals",()=>{
    test("WHEN parametres are 1 and 1, THEM result should be true",() =>{
        //ARRANGE//PREPRARAR
        const a=1;
        const b=1;
        const expectResult=true
        //ACT//ACTUAR
        const result = strictEquals(a,b)
        //ASET//EXPECTATIVAS/ESPERO QUE...
        expect(result).toBe(expectResult)
    })
    test("WHEN parametres are NaN and NaN, THEM result should be false",() =>{
        //ARRANGE//PREPRARAR
        const a=NaN;
        const b=NaN;
        const expectResult=false
        //ACT//ACTUAR
        const result = strictEquals(a,b)
        //ASET//EXPECTATIVAS/ESPERO QUE...
        expect(result).toBe(expectResult)
    })
     test('WHEN parametres are 0 and -0, THEM result should be true', () => {
         //ARRANGE//PREPRARAR
         const a = 0;
         const b = -0;
         const expectResult = true;
         //ACT//ACTUAR
         const result = strictEquals(a, b);
         //ASET//EXPECTATIVAS/ESPERO QUE...
         expect(result).toBe(expectResult);
     });
     test('WHEN parametres are -0 and 0, THEM result should be true', () => {
         //ARRANGE//PREPRARAR
         const a = -0;
         const b = 0;
         const expectResult = true;
         //ACT//ACTUAR
         const result = strictEquals(a, b);
         //ASET//EXPECTATIVAS/ESPERO QUE...
         expect(result).toBe(expectResult);
     });
     test('WHEN parametres are 1 and "1", THEM result should be false', () => {
         //ARRANGE//PREPRARAR
         const a = 1;
         const b = "1";
         const expectResult = false;
         //ACT//ACTUAR
         const result = strictEquals(a, b);
         //ASET//EXPECTATIVAS/ESPERO QUE...
         expect(result).toBe(expectResult);
     });
     test('WHEN parametres are true and false, THEM result should be false', () => {
         //ARRANGE//PREPRARAR
         const a = true;
         const b = false;
         const expectResult = false;
         //ACT//ACTUAR
         const result = strictEquals(a, b);
         //ASET//EXPECTATIVAS/ESPERO QUE...
         expect(result).toBe(expectResult);
     });
     test('WHEN parametres are false and false, THEM result should be true', () => {
         //ARRANGE//PREPRARAR
         const a = false;
         const b = false;
         const expectResult = true;
         //ACT//ACTUAR
         const result = strictEquals(a, b);
         //ASET//EXPECTATIVAS/ESPERO QUE...
         expect(result).toBe(expectResult);
     });
     test('WHEN parametres are "water" and "oil", THEM result should be false', () => {
         //ARRANGE//PREPRARAR
         const a = "water";
         const b = "oil";
         const expectResult = false;
         //ACT//ACTUAR
         const result = strictEquals(a, b);
         //ASET//EXPECTATIVAS/ESPERO QUE...
         expect(result).toBe(expectResult);
     });
})


/*console.log(strictEquals(1, 1),"1 y da 1");
console.log(strictEquals(NaN, NaN),"NaN y NaN daría false");
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, '1'));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals('water', 'oil'));*/