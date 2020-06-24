var sum = 0;

var numbers = Array.from({length: 999}, (v, k) => k+1);

sum = numbers
      .filter(num => (num % 3 == 0 || num % 5 == 0))
      .reduce((sum, num) =>  sum +  num);

console.log(sum);
