const singleNumbers = {
    0: 'zero',
    1: 'one',
    2: 'two', 
    3: 'three', 
    4: 'four', 
    5: 'five', 
    6: 'six', 
    7: 'seven', 
    8: 'eight',
    9: 'nine'
}

const doublesNumbers = { 
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
}

const decadeNumbers = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
}

function singleNumber(number) {
    return singleNumbers[number];
}

function doubleNumber(number) {
    const firstNumber = number.toString()[0];
    const secondNumber = number.toString()[1];

    if (+firstNumber === 0 && +secondNumber === 0) {
        return '';
    } else if (+firstNumber === 0){
        return singleNumber(secondNumber);
    } else if (+firstNumber === 1){
        return doublesNumbers[number];
    } else if (decadeNumbers[number]) {
        return decadeNumbers[number];
    } else {
        return decadeNumbers[firstNumber + '0'] + ' ' + singleNumber(secondNumber);
    }
}

function tripleNumber(number){
    const firstNumber = number.toString()[0];
    const secondNumber = number.toString()[1];
    const trirdNumber = number.toString()[2];
    return singleNumber(firstNumber) + ' hundred ' + doubleNumber(secondNumber + trirdNumber);
}


function toReadable (number) {
    const numberLength = number.toString().length;
    let result = '';

    if (numberLength === 1) {
        result = singleNumber(number);
    } else if (numberLength === 2) {
        result = doubleNumber(number);
    } else {
        result = tripleNumber(number);
    }

    return result.trim();
}

module.exports = toReadable;