const CHAR_DELAY = 50
const LETTER_DELAY = 2000
const WORD_DELAY = 4000

function logMorseLetter(letter, next) {
    if (letter.length === 0) {
        return next();
    }
    setTimeout(() => {
        console.log(letter[0]);
        logMorseLetter(letter.slice(1), next)
    }, CHAR_DELAY)
}

function logMorseWord(word, next) {
    if (word.length === 0) {
        return next();
    }
    logMorseLetter(word.splice(0, 1)[0], () => {
        setTimeout(() => {
            console.log("-----------------")
            logMorseWord(word, next)
        }, LETTER_DELAY)
    })
}

function logMorseText(text, next) {
    if (text.length === 0) {
        return next();
    }
    logMorseWord(text.splice(0, 1)[0], () => {
        setTimeout(() => {
            console.log("*****************")
            logMorseText(text, next)
        }, WORD_DELAY - LETTER_DELAY)
    })
}

// Step-1
// logMorseLetter(".-..", () => null)

// Step-2
// logMorseWord([".-..", "---", ".-.", ".", "--"], () => null)

// Step-3

logMorseText([
    [".-..", "---", ".-.", ".", "--"],
    ["..", ".--.", "...", "..-", "--"],
    ["-..", "---", ".-..", "---", ".-."],
    ["...", "..", "-"],
    [".-", "--", ".", "-"],
], () => null)