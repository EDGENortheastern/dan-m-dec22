import {
    convertToNum,
    convertCurrency
} from './logic.js';


test("That jest is working",()=>{
    expect(2+2).toBe(4)
});
test("That function convertToNum works for string",()=>{
    expect(convertToNum("2")).toBe(2);
    expect(convertToNum("27987985")).toBe(27987985);
    expect(convertToNum("-8")).toBe(-8);
});
test("That function convertToNum returns a number",()=>{
    expect(typeof convertToNum("2")).toBe('number');
    expect(typeof convertToNum("27987985")).not.toBe(27987985);
});
test("That function convertCurrency is accurate",()=>{
    expect(convertCurrency("2", "2")).toBe("4.00");
    expect(convertCurrency("1000", "1.30")).toBe("1300.00");
});
test('Thar function convertCurrency works with many decimals', () => {
    expect(parseFloat(convertCurrency("1000.567", "0.57"))).toBeCloseTo(parseFloat("570.32"));
    expect(parseFloat(convertCurrency("547.405832", "0.11"))).toBeCloseTo(parseFloat("60.21"));
});



