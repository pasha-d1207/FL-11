let startGame = confirm('Do you want to play a game?');
let maxRound = 100000;
let maxGame = 100000;

for (let game = 1; game < maxGame; game++) {
    let price = 0;
    let max = 4;
    let stepPockets = 4;
    let win = false;
    let round = 1;
    for (round; round < maxRound; round++) {
        let possiblePrise = 100;
        let attempt = 3;
        max = max + stepPockets;
        let pocket = parseInt(Math.random() * max);
        console.log(pocket)
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
                        round = maxRound++;
                        continue;
                    } else {
                        game = maxGame++;
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
                            round = maxRound++;
                            continue;
                        } else {
                            game = maxGame++;
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
                                round = maxRound++;
                                continue;
                            } else {
                                game = maxGame++;
                                break;
                            }
                        }
                    } else {
                        alert('Thank you for your participation. Your prize is: 0$');
                        let again = confirm('Do you want to play again?');
                        if (again === true) {
                            round = maxRound++;
                            continue;
                        } else {
                            game = maxGame++;
                            break;
                        }
                    }
                }
            }
        } else {
            alert('You did not become a billionaire, but can.');
            game = maxGame++;
            break;
        }
    }
} 