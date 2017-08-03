var fs = require('fs');

function extractQuestionAndAnswer(cb){
  fs.readFile('assessment.js', 'utf8', function(err, data){
      var charTotal = word => word.toLowerCase().split('').filter(x => x !== "_").reduce((a, c) => a + c.charCodeAt(), 0) % 1000;

      var parsed = data.match(/Question.*\n(.*)\n-*\n.*Answer.*?:\s*(.*?)\n/ig)
          .map(x => x.replace(/Question.*\n(.*)\n-*\n.*Answer.*?:\s*(.*?)\n/ig, "$1 ## $2")
          .replace(/\=+/, "____").replace(/["']/g, ''));

      var QAHset = parsed.map(pair =>
          (qaArr =>
              ({Q: qaArr[0].trim(), A: qaArr[1].trim(), H: charTotal(qaArr[1].trim())})
          )(pair.split('##'))
      );

      cb(QAHset);
  });
}

  module.exports = {
    extractQuestionAndAnswer: extractQuestionAndAnswer
  }
