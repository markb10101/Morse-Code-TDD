///////////////////////////////////////////////////
// english / morse code translator
///////////////////////////////////////////////////

import { translateInput } from "./translators.js";

const inputTextArea = document.getElementById("input");
const outputTextArea = document.getElementById("output");
const translateButton = document.getElementById("translate");




translateButton.addEventListener("click", () =>{
    outputTextArea.value = translateInput(inputTextArea.value);  
});





