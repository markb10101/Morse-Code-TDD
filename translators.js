import { englishArr, morseCodeArr, englishRegExp, morseRegExp } from "./data.js";


// check if user has inputted english or morse code
function translateInput(textInput) {

    let output = "";

    // convert input to uppercase
    textInput = textInput.toUpperCase();

    //check for mixed input of english and morse
    if(morseRegExp.test(textInput) && englishRegExp.test(textInput) ||
    englishRegExp.test(textInput) && morseRegExp.test(textInput)){

        // display message warning about mixed input
        output = "Mix of Morse Code and English detected. Please enter either English or Morse Code";

    } else {
        // check if input contains letters
        if (englishRegExp.test(textInput)) {

            // if it does then call the english to morse translation function
            output = translateEnglishToMorse(textInput);

        } else {
            // if it doesn't then check for morse
            if (morseRegExp.test(textInput)) {

                output = translateMorseToEnglish(textInput);
            } else {

                //display invalid message
                output = "Invalid input - please use English or International Morse Code";
            }
        }

    }

    return output;

}


// translate english input to morse code output
function translateEnglishToMorse(stringToConvert) {

    let outputString = "";

    // make array from input
    let arrayToConvert = stringToConvert.split("");
   
    // loop through input array 
    arrayToConvert.forEach((sequence,position) => {

        // compare entries against morse code array
        englishArr.forEach((char, index) => {

            if (char == sequence) {
                // build output string
                outputString += morseCodeArr[index];

                // check if we need to add a "/" to separate letters
                // ie. input was longer than 1 letter and we are not at the end
                if (arrayToConvert.length > 1 && position < arrayToConvert.length - 1) {
                    // add a "/" to the end of the string
                    outputString += "/";
                }
            }
        });
    });

    return outputString;
}


// translate morse code input to english output
function translateMorseToEnglish(stringToConvert) {

    let outputString = "";

    // make array from input
    let arrayToConvert = stringToConvert.split("/");

    // loop through input array 
    arrayToConvert.forEach((sequence) => {

        // compare entries against morse code array
        morseCodeArr.forEach((char, index) => {

            if (char == sequence) {
                // build output string
                outputString += englishArr[index];
            }
        });
    });

    return outputString;
}



export {translateInput};


