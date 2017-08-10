var Pokemon = require("./pokemon");
var readline = require('readline');

var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var electricTypeMoves = [ {name: "Tackle", damage: 3}, {name: "Thunder Shock", damage: 4}, {name: "Charge Beam", damage: 5}, {name: "Thunder Wave", damage: 5}, {name: "Spark", damage: 7}, {name: "Thunder Punch", damage: 8}, {name: "Shock Wave", damage: 10}, {name: "Thunder Bolt", damage: 15 }, {name: "Thunder", damage: 20}, {name: "Zap Cannon", damage: 30}, {name: "Electric Beam", damage: 35} ];

var leafTypeMoves = [ {name: "Absorb", damage: 2}, {name: "Tackle", damage: 3}, {name: "Bullet Seed", damage: 4}, {name: "Mega Drain", damage: 6}, {name: "Vine Whip", damage: 8}, {name: "Razor Leaf", damage: 15}, {name: "Giga Drain", damage: 18 }, {name: "Seed Bomb", damage: 22}, {name: "Petal Dance", damage: 25}, {name: "Solar Beam", damage: 35} ];

var pikachu = new Pokemon('pikachu', 'Electric', electricTypeMoves, 10);
var bulbasaur = new Pokemon('bulbasaur', 'leaf', leafTypeMoves, 11);
var battle = new Battle(pikachu, bulbasaur);



function Battle(pokemon1, pokemon2, turn) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
    this.turn = true;
}

// Fighting //
Battle.prototype.fight = function () {
    if (this.turn) {
        this.pokemon1.attack(this.pokemon2);
    }else {
        this.pokemon2.attack(this.pokemon1);
    }
};

Battle.prototype.potion = function () {
    if (this.turn) {
        var currentPokemon = this.pokemon1;
    } else {
        var currentPokemon = this.pokemon2;
    }
    currentPokemon.hp += 10;
    console.log("Used potion on", currentPokemon.name, " ( hp: ",  currentPokemon.hp,  " )!");
};

Battle.prototype.run = function () {
    if (this.turn) {
        var currentPokemon = this.pokemon1;
    } else {
        var currentPokemon = this.pokemon2;
    }

    currentPokemon.hp = 0;

    console.log(currentPokemon.name, "ran ( hp:", currentPokemon.hp, ")!" );
};

Battle.prototype.won = function () {
    if(this.pokemon1.faint() || this.pokemon2.faint()){
        return true;
    }
    return false;
};

Battle.prototype.result = function () {
    var winner = this.pokemon1.hp > this.pokemon2.hp ? this.pokemon1 : this.pokemon2;

    console.log("Winner: ", winner.name);
    console.log(winner.call());
};

/* ======= Battle#prompUser======== */

Battle.prototype.prompUser = function () {
    if (this.turn) {
        var currentPokemon = this.pokemon1;
    } else {
        var currentPokemon = this.pokemon2;
    }
    console.log("What should " + currentPokemon.name + " do?");
    reader.question("Select 'a' for attack, 'p' for potion, 'r' for run: ", function (userInput) {
        this.makeMove(userInput);
    }.bind(this));
};



Battle.prototype.makeMove = function (choice) {
    if(choice === 'a'){
        this.fight();
    } else if (choice === 'p') {
        this.potion();
    } else if (choice === 'r') {
        this.run();
    }

    if(this.won()){
        this.result();
        reader.close();
    } else {
        this.turn = !this.turn;
        this.prompUser()
    }
};

Battle.prototype.play = function () {
    this.prompUser();
};

battle.play();
