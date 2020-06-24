var fs = require('fs');
var content = fs.readFileSync('triangle.txt', 'utf8');
var sum = 0, total = 0;

var triangle = content.split("\n");
sum = triangle.reduce((sum, line, i,triangle) => {
  var numbersInLine = line.split(" ").map(function(item){
    return parseInt(item);
  });
  return parseInt(sum) + Math.max(...numbersInLine);
});

console.log(sum);
