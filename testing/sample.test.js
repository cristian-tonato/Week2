import { add} from "./sample.js";
import {subtraction } from "./sample.js";
import { divided } from "./sample.js";


describe("testing add", ()=>{

    test("if a =2 and b=2 add should be", () =>{
        let a =2;
        let b=2;
        expect(add(a,b)).toBe(4)
})
    test ("if a =2 and b = 2 add should be 4", ()=>{
        let a =2;
        let b=2;
        expect(add(a,b)).toBeLessThan(5);
    });

    test(`if a = 0, return should be "Error"`, ()=>{
        let a = 0;
        let b = 2;
        expect(add(a,b)).toThrowError(`Error`);
    })

});

describe ("testing subtraction", () =>{
     test('if a =2 and b=2 add should be 0', () => {
         let a = 2;
         let b = 2;
         expect(subtraction(a, b)).toBe(0);
     });
})


describe('Testing divided', () => {
    test('if a =4 and b=2 add should be 2', () => {
        let a = 4;
        let b = 2;
        expect(divided(a, b)).toBe(2);
    })
    test(`if b = 0, return should be "Error"`, () => {
        let a = 2;
        let b = 0;
        //expect(divided(a, b)).toThrowError(`Error`);
        expect(()=>{
            divided(a,b)
        }).toThrowError();
    });
    test(`if a = null, return should be "Error"`, () => {
        let a = null;
        let b = 5;
        try {
            divided(a,b)
        } catch (e){
            expect(e.message).toBe("Error:parametro no valido")
        }
        //expect(add(a, b)).toBe(`Error`);
    });
});

