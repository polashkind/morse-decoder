const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

/**
 * 
 * @param {string} expr 
 */
function decode(expr) {
    const arrStr = expr.match(/.{1,10}/g);
    const resultArr = [];
    for (let i = 0; i < arrStr.length; i++) {
        let encodeChar = arrStr[i];
        if (encodeChar === '**********') {
            resultArr.push(' ');
            continue;
        }

        while (encodeChar.charAt(0) === '0') {
            encodeChar = encodeChar.substr(1);
        }
         
        const encodeArray = encodeChar.match(/.{1,2}/g);

        for (let j = 0; j < encodeArray.length; j++) {
            if (encodeArray[j] === '10') {
                encodeArray[j] = '.';
            } else if (encodeArray[j] === '11') {
                encodeArray[j] = '-';
            }
        }
        const morseChar = encodeArray.join('');
        const realChar = MORSE_TABLE[morseChar];
        resultArr.push(realChar);
    }
    return resultArr.join('');
}

module.exports = {
    decode
}