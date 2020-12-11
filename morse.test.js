import { translateInput } from "./translators.js";



//////////////////////////////////////////////////////////////////////////////
// valid inputs
it ('Should translate A to .-', () =>{
    const result = translateInput("A")
    expect(result).toBe('.-')
})

it ('Should translate .- to A', () => {
    const result = translateInput(".-")
    expect(result).toBe('A')
})


//////////////////////////////////////////////////////////////////////////////
// invalid inputs
it ('Should return mixed input warning', () => {
    const result = translateInput("A.-");
    expect(result).toBe("Mix of Morse Code and English detected. Please enter either English or Morse Code");
})

it ('Should return mixed input warning', () => {
    const result = translateInput(".-A");
    expect(result).toBe("Mix of Morse Code and English detected. Please enter either English or Morse Code");
})

it ('Should return invalid input warning', () => {
    const result = translateInput("&");
    expect(result).toBe("Invalid input - please use English or International Morse Code");
})

//////////////////////////////////////////////////////////////////////////////
// null inputs
it ('Should return invalid input warning', () => {
    const result = translateInput("");
    expect(result).toBe("Invalid input - please use English or International Morse Code");
})