const {convertToNum} = require('./logic.js');



test("That jest is working",()=>{
    expect(2+2).toBe(4)
})
test("That function convertToNum works for string",()=>{
    expect(convertToNum("2")).toBe(2)
})
test("That the correct flag returns", ()=>{
    expect(loadFlag("USD"))
})