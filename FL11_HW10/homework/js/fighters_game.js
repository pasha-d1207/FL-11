let Max = 1000;
let maxAgility = 100;


function Fighter(data) {
    let win = 0;
    let losses = 0;
    return {
        data,
        win,
        losses,
        getName: function () {
            return data.name;
        },
        getDamage: function () {
            return data.damage;
        },
        getAgility: function () {
            return data.agility;
        },
        getHealth: function () {
            return data.hp;
        },
        attack: function (defender) {
            defender;
            let context = this;
            let a = parseInt(Math.random() * maxAgility);
            if (a < maxAgility - defender.data.agility) {
                defender.data.hp -= context.data.damage
                console.log(`${context.data.name}  make ${context.data.damage} damage to ${defender.data.name}`)
            } else {
                console.log(`${context.data.name} attack missed`)
            }
        },
        heal: function (value) {
            data.hp += value
            return data.hp;
        },
        dealDamage: function (value) {
            data.hp -= value;
            if (data.hp < 0) {
                data.hp = 0
            }
            return data.hp;
        },
        logCombatHistory: function () {
            return `Name ${data.name}, Wins ${win}, Losses ${losses}`;
        },
        addWin: function () {
            win++
            return win;
        },
        addLoss: function () {
            losses++;
            return losses
                ;
        }

    }
}

function battle(player1, player2) {
    for (let i = 0; i < Max; i++) {
        if (player1.getHealth()
            && player2.getHealth()
            > 0) {
            player1.attack(player2);
            player2.attack(player1);
        } else if (player1.getHealth() <= 0) {
            console.log(`${player1.getName()} is died and can't fight`);
            player1.hp = 0;
            player2.addLoss();
            player1.addWin();
            i = Max++;
        } else if (player2.getHealth() <= 0) {
            console.log(`${player2.getName()} is died and can't fight`);
            player2.hp = 0;
            player1.addLoss();
            player2.addWin();
            i = Max++
        }
    }
}