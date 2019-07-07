let price = 0;
let possiblePrise = 100;
let startPrice = 100;
let startAttempt = 3;
let attempt = 3;
let max = 8;
let stepPockets = 4;
let win = false;
let round = 2;

let startGame = confirm('Do you want to play a game?');
let pocket = parseInt(Math.random() * max);

if (startGame === true) {
    let inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: 0$
Possible prize on current attempt: ${possiblePrise}$`);
    if (inputPocket === pocket) {
        price += possiblePrise;
        win = confirm(`Congratulation, you won!   Your prize is: ${price}$. Do you want to continue?`);
        max = max + stepPockets;
        attempt = startAttempt;
        if (win === true) {
            if (startGame === true) {
                possiblePrise *= round;
                let inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: ${price}$
Possible prize on current attempt: ${possiblePrise}$`);
                if (inputPocket === pocket) {
                    price += possiblePrise;
                    win = confirm(`Congratulation, you won!   Your prize is: ${price}$. Do you want to continue?`);
                } else {
                    attempt--;
                    possiblePrise /= attempt;
                    inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: ${price}$
Possible prize on current attempt: ${possiblePrise}$`);
                    if (inputPocket === pocket) {
                        price += possiblePrise;
                        win = confirm(`Congratulation, you won!   Your prize is: ${price}$. Do you want to continue?`);
                    } else {
                        possiblePrise /= attempt;
                        attempt--;
                        inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: ${price}$
Possible prize on current attempt: ${possiblePrise}$`);
                        if (inputPocket === pocket) {
                            price += possiblePrise;
                            win = confirm(`Congratulation, you won!   Your prize is: ${price}$.
Do you want to continue?`);
                        } else {
                            alert('Thank you for your participation. Your prize is: 0$');
                            confirm('Do you want to play again?');
                        }
                    }
                }
            } else {
                alert('You did not become a billionaire, but can.');
            }
        } else {
            alert(`Thank you for your participation. Your prize is: ${price}$`);
            confirm('Do you want to play again?');
        }
    } else {
        attempt--;
        possiblePrise /= attempt;
        inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: ${price}$
Possible prize on current attempt: ${possiblePrise}$`);
        if (inputPocket === pocket) {
            price = possiblePrise;
            win = confirm(`Congratulation, you won!   Your prize is: ${price}$. Do you want to continue?`);
            max = max + stepPockets;
            attempt = startAttempt;
            if (win === true) {
                if (startGame === true) {
                    possiblePrise = startPrice;
                    possiblePrise *= round;
                    let inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: ${price}$
Possible prize on current attempt: ${possiblePrise}$`);
                    if (inputPocket === pocket) {
                        price += possiblePrise;
                        win = confirm(`Congratulation, you won!   Your prize is: ${price}$. Do you want to continue?`);
                    } else {
                        attempt--;
                        possiblePrise /= attempt;
                        inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: ${price}$
Possible prize on current attempt: ${possiblePrise}$`);
                        if (inputPocket === pocket) {
                            price += possiblePrise;
                            win = confirm(`Congratulation, you won!   Your prize is: ${price}$. 
Do you want to continue?`);
                        } else {
                            possiblePrise /= attempt;
                            attempt--;
                            inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: ${price}$
Possible prize on current attempt: ${possiblePrise}$`);
                            if (inputPocket === pocket) {
                                price += possiblePrise;
                                win = confirm(`Congratulation, you won!   Your prize is: ${price}$.
Do you want to continue?`);
                            } else {
                                alert('Thank you for your participation. Your prize is: 0$');
                                confirm('Do you want to play again?');
                            }
                        }
                    }
                } else {
                    alert('You did not become a billionaire, but can.');
                }
            } else {
                alert(`Thank you for your participation. Your prize is: ${price}$`);
                confirm('Do you want to play again?');
            }
        } else {
            possiblePrise /= attempt;
            attempt--;
            inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: ${price}$
Possible prize on current attempt: ${possiblePrise}$`);
            if (inputPocket === pocket) {
                price = possiblePrise;
                win = confirm(`Congratulation, you won!   Your prize is: ${price}$. Do you want to continue?`);
                max = max + stepPockets;
                attempt = startAttempt;
                possiblePrise = startPrice;
                if (win === true) {
                    if (startGame === true) {
                        possiblePrise *= round;
                        let inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: ${price}$
Possible prize on current attempt: ${possiblePrise}$`);
                        if (inputPocket === pocket) {
                            price += possiblePrise;
                            win = confirm(`Congratulation, you won!   Your prize is: ${price}$. 
Do you want to continue?`);
                        } else {
                            attempt--;
                            possiblePrise /= attempt;
                            inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: ${price}$
Possible prize on current attempt: ${possiblePrise}$`);
                            if (inputPocket === pocket) {
                                price += possiblePrise;
                                win = confirm(`Congratulation, you won!   Your prize is: ${price}$. 
Do you want to continue?`);
                            } else {
                                possiblePrise /= attempt;
                                attempt--;
                                inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: ${price}$
Possible prize on current attempt: ${possiblePrise}$`);
                                if (inputPocket === pocket) {
                                    price += possiblePrise;
                                    win = confirm(`Congratulation, you won!   Your prize is: ${price}$.
Do you want to continue?`);
                                } else {
                                    alert('Thank you for your participation. Your prize is: 0$');
                                    confirm('Do you want to play again?');
                                }
                            }
                        }
                    } else {
                        alert('You did not become a billionaire, but can.');
                    }
                } else {
                    alert(`Thank you for your participation. Your prize is: ${price}$`);
                    confirm('Do you want to play again?');
                } 
            } else {
                alert('Thank you for your participation. Your prize is: 0$');
                confirm('Do you want to play again?');
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}