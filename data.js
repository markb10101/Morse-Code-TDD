// array of english letters
let englishArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array of morse code letters
let morseCodeArr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

// arrays for numbers
const  englishNumbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const  morseCodeNumbersArr = ["-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----."];

// concat numbers to letters
englishArr = englishArr.concat(englishNumbersArr);
morseCodeArr = morseCodeArr.concat(morseCodeNumbersArr);

// reg exp to match english
let englishRegExp = /[a-zA-Z0-9]/;

// reg exp to match morse code
let morseRegExp = /[.-]/;

export { englishArr, morseCodeArr, englishRegExp, morseRegExp};
