var sum = 0;
var size = 4000000 - 1;
var numbers = Array.from({length: size}, ((a, b) => _ => ([b, a] = [a + b, b, a])[2])(1, 2))
              .filter(num => (num <= size));
sum = numbers.filter(num => (num % 2 === 0))
      .reduce((sum, num) =>  sum +  num);

console.log(sum);
