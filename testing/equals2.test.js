import { strictEquals } from './equals.js';

describe('GIVEN striEquals', () => {
    const cases = [
        { a: 1, b: 1, r: true },
        { a: NaN, b: NaN, r: false },
        { a: 0, b: -0, r: true },
        { a: -0, b: 0, r: true },
        { a: 1, b: '1', r: false },
        { a: true, b: false, r: false },
        { a: false, b: false, r: true },
        { a: 'water', b: 'oil', r: false },
    ];

    cases.forEach((testCase) => {
        test('When parametres are ${testCase.a} y {testCase.b} son ${testCase.r} ', () => {
            //ARRANGE//PREPRARAR
            //const expectResult = strictEquals(testCase.a,testCase.b);
            //ACT//ACTUAR
            const result = strictEquals(testCase.a, testCase.b);
            //ASET//EXPECTATIVAS/ESPERO QUE...
            expect(result).toBe(testCase.r);
        })
    });
});











    
    /*test('WHEN parametres are NaN and NaN, THEM result should be false', () => {
        //ARRANGE//PREPRARAR
        const a = NaN;
        const b = NaN;
        const expectResult = false;
        //ACT//ACTUAR
        const result = strictEquals(a, b);
        //ASET//EXPECTATIVAS/ESPERO QUE...
        expect(result).toBe(expectResult);
    });
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
        const b = '1';
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
        const a = 'water';
        const b = 'oil';
        const expectResult = false;
        //ACT//ACTUAR
        const result = strictEquals(a, b);
        //ASET//EXPECTATIVAS/ESPERO QUE...
        expect(result).toBe(expectResult);
    });
});*/
