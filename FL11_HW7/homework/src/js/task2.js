let price = 0;
let startPrice = 100;
let max = 4;
let stepPockets = 4;
let win = false;
let round = 1;

let startGame = confirm('Do you want to play a game?');

for (round; round < Infinity; round++) {
    let possiblePrise = 100;
    let attempt = 3;
    max = max + stepPockets;
    let pocket = parseInt(Math.random() * max);
    if (startGame === true) {
        possiblePrise *= round;
        let inputPocket = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempt}
Total price: ${price}$
Possible prize on current attempt: ${possiblePrise}$`);
        if (inputPocket === pocket) {
            price += possiblePrise;
            win = confirm(`Congratulation, you won!   Your prize is: ${price}$. Do you want to continue?`);
            if (win === true) {
                continue;
            } else {
                alert(`Thank you for your participation. Your prize is: ${price}$`);
                let again = confirm('Do you want to play again?');
                if (again === true) {
                    break;
                } else {
                    break;
                }
            }
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
                if (win === true) {
                    continue;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${price}$`);
                    let again = confirm('Do you want to play again?');
                    if (again === true) {
                        break;
                    } else {
                        break;
                    }
                }
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
                    if (win === true) {
                        continue;
                    } else {
                        alert(`Thank you for your participation. Your prize is: ${price}$`);
                        let again = confirm('Do you want to play again?');
                        if (again === true) {
                            break;
                        } else {
                            break;
                        }
                    }
                } else {
                    alert('Thank you for your participation. Your prize is: 0$');
                    let again = confirm('Do you want to play again?');
                    if (again === true) {
                        break;
                    } else {
                        break;
                    }
                }
            }
        }
    } else {
        alert('You did not become a billionaire, but can.');
        break;
    }

}
