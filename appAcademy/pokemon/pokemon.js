var VOWELS = "AEIOU";
var electricTypeMoves = [
  { name: "Tackle", damage: 3 },
  { name: "Thunder Shock", damage: 4 },
  { name: "Charge Beam", damage: 5 },
  { name: "Thunder Wave", damage: 5 },
  { name: "Spark", damage: 7 },
  { name: "Thunder Punch", damage: 8 },
  { name: "Shock Wave", damage: 10 },
  { name: "Thunder Bolt", damage: 15  },
  { name: "Thunder", damage: 20 },
  { name: "Zap Cannon", damage: 30 },
  { name: "Electric Beam", damage: 35}
];

var leafTypeMoves = [
  { name: "Absorb", damage: 2 },
  { name: "Tackle", damage: 3 },
  { name: "Bullet Seed", damage: 4 },
  { name: "Mega Drain", damage: 6 },
  { name: "Vine Whip", damage: 8 },
  { name: "Razor Leaf", damage: 15 },
  { name: "Giga Drain", damage: 18  },
  { name: "Seed Bomb", damage: 22 },
  { name: "Petal Dance", damage: 25 },
  { name: "Solar Beam", damage: 35}
];

var rockTypeMoves = [
  { name: "Tackle", damage: 3 },
  { name: "Rollout", damage: 6 },
  { name: "Rock Blast", damage: 4 },
  { name: "Smack Down", damage: 10 },
  { name: "Rock Throw", damage: 20 },
  { name: "Rock Slide", damage: 30 },
  { name: "Head Smash", damage: 40 },
  { name: "Rock Wrecker", damage: 50 }
];


function Pokemon(name, type, moves, level) {
    this.name = name.toUpperCase();
    this.type = type[0].toUpperCase() + type.slice(1);
    level !== undefined ? this.level = level : this.level = 5;
    this.hp = Math.floor(2.25 * this.level);
    this.moves = moves;

}
/* levelUp */
Pokemon.prototype.levelUp = function () {
    this.level += 1
    this.revive();
    return this;
};

/* Faint */
Pokemon.prototype.faint = function () {
    return this.hp <= 0;
};

/* Revive */
Pokemon.prototype.revive = function () {
    this.hp = Math.floor(2.25 * this.level);
    return this;
};

/* Call */
Pokemon.prototype.call = function () {
    var name = this.name;
    var vowelCount = 0;
    for (var i = 0; i < name.length; i++) {
        var char = name[i];
        if (VOWELS.indexOf(char) !== -1) {
            vowelCount += 1;
            if (vowelCount === 2) {
                var nick = name.slice(0, i + 1);
                return nick + "-" + nick;
            }
        }
    }
    return this.name + "-" + this.name;
};

/* availableMoves */
Pokemon.prototype.availableMoves = function () {
    var availableMoves = this.moves.slice(0, this.level / 50 * this.moves.length );
    if (availableMoves.length === 0) {
        return this.moves.slice(0, 1);
    }else {
        return availableMoves;
    }
};

/* attack */
Pokemon.prototype.attack = function (opponent, move) {
    var availableMoves = this.availableMoves();
    if (typeof move === "undefined") {
        move = availableMoves[availableMoves.length - 1].name;
    }

    availableMoves.forEach(function (avaMove) {
        if (avaMove.name === move) {
            opponent.hp -= avaMove.damage;
            this.printStats(opponent, avaMove);
        }
    }.bind(this));
}


/* printStats */
Pokemon.prototype.printStats = function(opponent, move) {
    console.log(this.name + " attacked with " + move.name + "!");
    console.log("Demage to " + opponent.name + ":- " + move.damage);
    console.log(this.name + " hp: " + this.hp);
    console.log(opponent.name + " hp: " + opponent.hp);
};

// var pikachu = new Pokemon('PIKACHU', 'Electric', electricTypeMoves, 10);
// var bulbasaur = new Pokemon('bulbasaur', 'leaf', leafTypeMoves, 11);
// var onyx = new Pokemon('onyx', 'rock', rockTypeMoves);
// pikachu.hp -= 5;
//
// pikachu.faint();
// pikachu.revive();
// pikachu.levelUp();
//
// pikachu.call();
// bulbasaur.call();
// onyx.call();
//
// console.log(pikachu.availableMoves());
// console.log(bulbasaur.availableMoves());
// console.log(onyx.availableMoves());
//
// pikachu.attack(bulbasaur, "Thunder Shock");
// pikachu.attack(onyx);
//
// pikachu.revive();
// onyx.revive();
// bulbasaur.revive();


module.exports = Pokemon;
