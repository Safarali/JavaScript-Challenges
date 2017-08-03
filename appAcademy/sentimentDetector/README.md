## Sentiment Detector

For this project, you will create a function `detectSentiment(filename, sentence, callback)`. It takes the following arguments:

* `filename`: a string. The filename (and path) to the sentiment text file
* `sentence`: a string. The sentence whose sentiment we will detect
* `callback`: a function. This callback will be run after the sentiment score has been determined. It will receive the `sentence` and `score` as arguments.

### Examples

```javascript
detectSentiment("sentimentDict.txt", "I love you", function(sentence, score) {
  console.log("~~~~Example 1~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});

detectSentiment("sentimentDict.txt", "I LOVE you so much", function(sentence, score) {
  console.log("~~~~Example 2~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});

detectSentiment("sentimentDict.txt", "You are a loveless fool", function(sentence, score) {
  console.log("~~~~Example 3~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});

detectSentiment("sentimentDict.txt", "I cherish your smile", function(sentence, score) {
  console.log("~~~~Example 4~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});

var sentence = "I despise your hateful attitude";
detectSentiment("sentimentDict.txt", sentence, function(sentence, score) {
  console.log("~~~~Example 5~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
```

When run in node it should output:

```
$ node yourSentimentDetectorFile.js
~~~~Example 1~~~~
'I love you' has a score of 2.
~~~~Example 2~~~~
'I LOVE you so much' has a score of 2.
~~~~Example 3~~~~
'You are a loveless fool' has a score of -2.
~~~~Example 5~~~~
'I despise your hateful attitude' has a score of -2.
~~~~Example 4~~~~
'I cherish your smile' has a score of 3.
```

### Hints (feel free to try it without the hints first)

* Start with the `getRecordsFromFile` function that we built in class. This will pass the callback you give it all the lines in the file as elements (strings) in an array.

**In the callback that is being passed to `getRecordsFromFile`**:

* Initialize the score to 0.

* Split the sentence into words. Sure, we could just use `String.prototype.indexOf`, but doing so would cause potential confusion between words that are similar but have different sentiments (e.g. "love" and "loveless")

* Iterate over the records. For each record (which corresponds to a single line in the text file), you'll need to get the word and it's associated sentiment. Look at the text file. How can you parse this string to get the data you're looking for. Use decomposition to keep your code readable.

* If the word is in the sentence...
  - and has a positive sentiment, add 1 to the score
  - and has a negative sentiment, subtract 1 from the score

* Once the score has been found, run the callback that was passed to `detectSentiment`, passing in the `sentence` and the `score` as parameters.
