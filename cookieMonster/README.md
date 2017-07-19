## Cookie Monster Project

In this project we will be using **mocha** to check our code. So far we have been
calling our functions manually to check if they work. In this project, mocha will
run our code for us and check if it is correct! We will also be using mocha to check
our work on assessments.

Before beginning, make sure you have **mocha** installed. Call over an instructor
if you are having trouble installing or running it.

For this project, we are going to make a `cookieMonster` object.

### Phase 0

For this project, we are going to make a `cookieMonster` object, but let's setup our
working environment first

* download and unzip the cookieMonster folder somewhere you can access easily, like
your Desktop

* Open up Terminal/Command Prompt.

* `cd` into your cookieMonster folder. If your cookieMonster folder is on your
Desktop, then you must `cd` into your Desktop first.

* Type `mocha` in the command line to see all the failing tests.

* Our job is to make them all pass.

### Phase 1

Let's give our `cookieMonster` some basic properties.

* Run `mocha` and look at the first failing test. Mocha is expecting `cookieMonster` to
have a property called `name` that evaluates to `Fred`. In `cookieMonster.js`, add the
property `name` and set it to `'Fred'` (be sure to spell it as specified!).

  * Run `mocha` again. Yay! The spec has passed.

  * Now fix all the "initial properties" specs.

  * Notice that mocha says that some
  values should be wrapped in square brackets `[]`. Properties like `favoriteFoods`
  should be arrays filled with strings.

### Phase 2

A few of `cookieMonster`'s properties like `favoriteFoods`, `goodFoods`, `badFoods`,
`hatedFoods` represent categories of his food preferences. Some of these categories
contain multiple strings (which is why they are arrays). For example, `cookieMonster`
considers `'pizza'` and `'skittles'` to be `goodFoods`.

* We will use `#` in a function name to show that it will be a method (a function that
  is called by an object). So `#isFavoriteFood(foodItem)` means give cookieMonster a
  key called `isFavoriteFood` whose value is a function!

* Add a method to cookieMonster, `#isFavoriteFood(foodItem)`, that checks if a single
`foodItem` (string) is considered a favorite food by cookieMonster. It should return
`true` if `foodItem` is a favorite food, `false` otherwise.

  * To check if a `foodItem` (string) is in the `favoriteFoods` (array) category, we
  need to check if an element is inside of an array. Use `indexOf` to accomplish
  this. Let's say we have the expression `array.indexOf(ele)`:

    * if `ele` **is inside** the `array`, then `indexOf` will give back the index where
    `ele` can be found. Remember that an index is always a number greater than or equal
    to 0 (since zero is the first index).

    * if `ele` **is not inside** the `array`, then `indexOf` will give back the number
    `-1`. This makes sense because `-1` is not a valid index!

    * adapt this example to our `cookieMonster`. Use this call to `indexOf`,
    `this.favoriteFoods.indexOf(foodItem)`, but how can you get this to evaluate to
    a boolean?


* Add similar methods `#isGoodFood`, `#isBadFood`, `#isHatedFood`.

### Phase 3

We are going to create two methods `#eat(food)` and `#isAlrightMeal(food)`:

* `#eat(food)` should returns a total score (integer) given an array of multiple
foods. `food` is an array of food item strings.
Every food item string in the array that is a favorite food add +2 to the score; good
foods add +1; bad foods add -1; hated foods add -2. Make sure the mocha spec passes
before moving on.

  * Start attacking this method by declaring a variable `score`. Then iterate through
  each food item of the `food` array and check which category it belongs to. Thankfully
  you made methods like `isFavoriteFood` earlier to do just this! Call those methods
  here. Depending on what category the item belongs to, add or subtract to an
  appropriate value from the `score`.

### Phase 4

Now that we have a working `eat` function, let's use it build `isAlrightMeal`.

* `#isAlrightMeal(food)` should return `true` if the `food` score is between 1 and -1
(inclusive), `false` otherwise.

  * `food` is an array of multiple food strings

  * This function is deceptively simple. Previously we gave `cookieMonster` a method,
  `eat`, which returns the score of a food array!

  * to solve `isAlrightMeal` we should just call `eat` and check if the score that
  it returns is within the specified range.
