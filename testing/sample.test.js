import { add} from "./sample.js";

describe("testing add", ()=>{

    test("if a =2 and b=2 add should be", () =>{
        let a =2;
        let b=2;
        expect(add(a,b)).toBe(4)
})

});


