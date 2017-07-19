var cookieMonster = {
    name: "Fred",
    hair: "blue",
    favoriteFoods: ["cookies"],
    goodFoods: ["pizza", "skittles"],
    badFoods: ["water", "banana"],
    hatedFoods: ["spinach"],

    isFavoriteFood: function(foodItem) {
        return this.favoriteFoods.indexOf(foodItem) !== -1;
    },
    isGoodFood: function(foodItem) {
        return this.goodFoods.indexOf(foodItem) !== -1;
    },
    isBadFood: function(foodItem) {
        return this.badFoods.indexOf(foodItem) !== -1;
    },
    isHatedFood: function(foodItem) {
        return this.hatedFoods.indexOf(foodItem) !== -1
    },

    eat: function(food) {
        var score = 0;
        for(var i = 0; i < food.length; i ++){
            var singleFood = food[i];

            if(this.isFavoriteFood(singleFood)){
                score += 2
            }else if (this.isGoodFood(singleFood)) {
                score ++;
            } else if (this.isBadFood(singleFood)) {
                score --;
            }else if (this.isHatedFood(singleFood)) {
                score -= 2;
            }
        }
        return score;
    },

    isAlrightMeal: function(food) {
        var ranking = this.eat(food);
        return  ranking >= -1 && ranking <= 1;
     }
};

/********/
module.exports = cookieMonster; // Don't touch this line
