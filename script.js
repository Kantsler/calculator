let display = document.getElementById("display");
let number1 = 0;
let number2 = 0;
let ifPoint = false;
let test = document.getElementById("test");
let ifNumberOneSet = false;
let number = 0;
let operation = "";
let r = 10;
let rd = 1;
let dec = 0;
let per = 100;

display.innerText = 0;

function insertpoint() {
    ifPoint = true;
}

function allclear() {
    display.style.fontSize = '70px';
    number = 0;
    display.innerText = number;
    ifPoint = false;
    r = 10;
    rd = 1;
    ifNumberOneSet = false;
    number1 = 0;
    number2 = 0;
    operation  = "";
    per = 100;
}

function insert(x) {
    if (x === 10) {
        display.style.fontSize = '70px';
        number = 0;
        display.innerText = number;
        ifPoint = false;
        r = 10;
        rd = 1;
        per = 100;
    } else {
        if (ifPoint) {
            if (!(number.toFixed(rd).toString().length > 8)) {
                if ((number === 0) || (number.toString().substring(number.toFixed(1).toString().indexOf(".")+1)) === 0) {
                    number = number + (x / r);
                    r = r*10;
                    rd = rd+1;
                    display.innerText = number;
                } else {
                    number.toFixed(rd+1);
                    number = +number.toFixed(rd+1) + +(x / r).toFixed(rd);
                    display.innerText = number.toFixed(rd);
                    r = r*10;
                    rd = rd+1;
                }
            } 
        } else {
            if (number.toString().length < 8) {
                display.style.fontSize = '70px';
                number = number*10 + x;
                display.innerText = number;
            }
        }
    }
}

function divide() {
    if (operation !== "") {
        equal();
    } else {
        if (ifNumberOneSet === false) {
            ifNumberOneSet = true;
            number1 = number;
            number = 0;
            display.innerText = number1;
            ifPoint = false;
            r = 10;
            rd = 1;
        }
    }
    operation = "division";
}

function multiply() {
    if (operation !== "") {
        equal();
    } else {
        if (ifNumberOneSet === false) {
            ifNumberOneSet = true;
            number1 = number;
            number = 0;
            display.innerText = number1;
            ifPoint = false;
            r = 10;
            rd = 1;
        }
    }
    operation = "multiplication";
}

function subtract() {
    if (operation !== "") {
        equal();
    } else {
        if (ifNumberOneSet === false) {
            ifNumberOneSet = true;
            number1 = number;
            number = 0;
            display.innerText = number1;
            ifPoint = false;
            r = 10;
            rd = 1;
        }
    }
    operation = "subtraction";
}

function add() {
    if (operation !== "") {
        equal();
    } else {
        if (ifNumberOneSet === false) {
            ifNumberOneSet = true;
            number1 = number;
            number = 0;
            display.innerText = number1;
            ifPoint = false;
            r = 10;
            rd = 1;
        }
    }
    operation = "addition";
}

function percent() {
    per = 1;
    equal();
}

function factorial() {
    if (ifNumberOneSet === false) {
        number1 = number;
    }
    let otherNumber = number1;
    if ((number1 < 0) || (Math.trunc(number1).toString().length !== number1.toString().length)) {
        display.innerText = "Error";
    } else {
        if (number1 === 0) {
            number1 = 1;
            display.innerText = number1;
        } else {
            if (number1 > 11) {
                display.innerText = "Length Error";
                display.style.fontSize = "49px";
            } else {
                number1 = 1;
                for (let i = 1; i <= otherNumber; i = i + 1) {
                    number1 = number1 * i;
                }
                display.innerText = number1;
            }
        }
    }
    ifNumberOneSet = true;
    number = 0;
    ifPoint = false;
    r = 10;
    rd = 1;
}

function root() {
    if (ifNumberOneSet === false) {
        number1 = number;
    }
    if (number1 < 0) {
        display.innerText = "Error";
    } else {
        if (Math.sqrt(number1).toString().length > 8) {
            number1 = (Math.sqrt(number1)).toFixed(7 - Math.trunc(Math.sqrt(number1)).toString().length);
            display.innerText = number1;
        } else {
            number1 = Math.sqrt(number1);
            display.innerText = number1;
        }
    }
    ifNumberOneSet = true;
    number = 0;
    ifPoint = false;
    r = 10;
    rd = 1;
}

function equal() {
    if ((operation === "division") && (ifNumberOneSet = true)) {
        number2 = number;
        number = 0;
        if (number2 === 0) {
            display.style.fontSize = "30px";
            display.innerText = "Error: dividing by zero";
        } else {
            number = 0;
            if (Math.trunc(number1 * 100 / (number2 * per)).toString().length > 8) {
                display.innerText = "Length Error";
                display.style.fontSize = "49px";
            } else {
                if (number1 * 100 / (number2 * per) === Math.trunc(number1 * 100 / (number2 * per))) {
                    number1 = (number1 * 100 / (number2 * per)).toFixed(0);
                    display.innerText = number1;
                } else {
                    if ((number1 * 100 / (number2 * per)).toString().length > 8) {
                        number1 = (number1 * 100 / (number2 * per)).toFixed(7 - Math.trunc(number1 * 100 / (number2 * per)).toString().length);
                        display.innerText = number1;
                    } else {
                        number1 = (number1 * 100 / (number2 * per)).toFixed(((number1 * 100 / (number2 * per)).toString().substring((number1 * 100 / (number2 * per)).toString().indexOf(".")+1)).toString().length);
                        display.innerText = number1;
                    }
                }
            }  
        }
    }

    if ((operation === "multiplication") && (ifNumberOneSet = true)) {
        number2 = number;
        number = 0;
        if (Math.trunc(number1 * number2 * per / 100).toString().length > 8) {
            display.innerText = "Length Error";
            display.style.fontSize = "49px";
        } else {
            if (number1 * number2 * per / 100 === Math.trunc(number1 * number2 * per / 100)) {
                number1 = (number1 * number2 * per / 100).toFixed(0);
                display.innerText = number1;
            } else {
                if ((number1 * number2 * per / 100).toString().length > 8) {
                    number1 = (number1 * number2 * per / 100).toFixed(7 - Math.trunc(number1 * number2 * per / 100).toString().length);
                    display.innerText = number1;
                } else {
                    number1 = (number1 * number2 * per / 100).toFixed(((number1 * number2 * per / 100).toString().substring((number1 * number2 * per / 100).toString().indexOf(".")+1)).toString().length);
                    display.innerText = number1;
                }
            }
        }
    }

    if (((operation === "subtraction") && (ifNumberOneSet = true)) && (per === 1)) {
        number2 = number;
        number = 0;
        if (Math.trunc(number1 * (100 - number2) / 100).toString().length > 8) {
            display.innerText = "Length Error";
            display.style.fontSize = "49px";
        } else {
            if ((number1 * (100 - number2) / 100) === Math.trunc(number1 * (100 - number2) / 100)) {
                number1 = (number1 * (100 - number2) / 100).toFixed(0);
                display.innerText = number1;
            } else {
                if ((number1 * (100 - number2) / 100).toString().length > 8) {
                    number1 = (number1 * (100 - number2) / 100).toFixed(7 - Math.trunc(number1 * (100 - number2) / 100).toString().length);
                    display.innerText = number1;
                } else {
                    number1 = (number1 * (100 - number2) / 100).toFixed(((number1 * (100 - number2) / 100).toString().substring((number1 * (100 - number2) / 100).toString().indexOf(".")+1)).toString().length);
                    display.innerText = number1;
                }
            }
        }
    } else if ((operation === "subtraction") && (ifNumberOneSet = true)) {
        number2 = number;
        number = 0;
        if (Math.trunc(number1 - number2).toString().length > 8) {
            display.innerText = "Length Error";
            display.style.fontSize = "49px";
        } else {
            if ((number1 - number2) === Math.trunc(number1 - number2)) {
                number1 = (number1 - number2).toFixed(0);
                display.innerText = number1;
            } else {
                if ((number1 - number2).toString().length > 8) {
                    number1 = (number1 - number2).toFixed(7 - Math.trunc(number1 - number2).toString().length);
                    display.innerText = number1;
                } else {
                    number1 = (number1 - number2).toFixed(((number1 - number2).toString().substring((number1 - number2).toString().indexOf(".")+1)).toString().length);
                    display.innerText = number1;
                }
            }
        }
    }

    if (((operation === "addition") && (ifNumberOneSet = true)) && (per === 1)) {
        number2 = number;
        number = 0;
        if (Math.trunc(number1 * (100 + number2) / 100).toString().length > 8) {
            display.innerText = "Length Error";
            display.style.fontSize = "49px";
        } else {
            if (number1 * (100 + number2) / 100 === Math.trunc(number1 * (100 + number2) / 100)) {
                number1 = (number1 * (100 + number2) / 100).toFixed(0);
                display.innerText = number1;
            } else {
                if ((number1 * (100 + number2) / 100).toString().length > 8) {
                    number1 = (number1 * (100 + number2) / 100).toFixed(7 - Math.trunc(number1 * (100 + number2) / 100).toString().length);
                    display.innerText = number1;
                } else {
                    number1 = (number1 * (100 + number2) / 100).toFixed(((number1 * (100 + number2) / 100).toString().substring((number1 * (100 + number2) / 100).toString().indexOf(".")+1)).toString().length);
                    display.innerText = number1;
                }
            }
        }
    } else if ((operation === "addition") && (ifNumberOneSet = true)) {
        number2 = number;
        number = 0;
        if (Math.trunc(number1 - -number2).toString().length > 8) {
            display.innerText = "Length Error";
            display.style.fontSize = "49px";
        } else {
            if ((number1 - -number2) === Math.trunc(number1 - -number2)) {
                number1 = (number1 - -number2).toFixed(0);
                display.innerText = number1;
            } else {
                if ((number1 - -number2).toString().length > 8) {
                    number1 = (number1 - -number2).toFixed(7 - Math.trunc(number1 - -number2).toString().length);
                    display.innerText = number1;
                } else {
                    number1 = (number1 - -number2).toFixed(((number1 - -number2).toString().substring((number1 - -number2).toString().indexOf(".")+1)).toString().length);
                    display.innerText = number1;
                }
            }
        }
    }

    ifNumberOneSet = true;
    ifPoint = false;
    r = 10;
    rd = 1;
    per = 100;
    operation = "";
}