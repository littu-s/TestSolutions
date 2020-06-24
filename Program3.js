var min = 100;
var max = 999;
var numbers = Array.from({ length:  max - min + 1 }, (v, k) => min + k);
var product = 0;
var flag = false;
var palin = [];

for(var item of numbers)
{
  for(var num of numbers)
  {
    product = item * num;
    flag = isPalindrome(product);

    if(flag)
    {
      palin.push(product);
      break;
    }
  }
}

console.log(Math.max(...palin));

function isPalindrome(num)
{
    var tmp = num.toString();
    var rev = parseInt(tmp.split("").reverse().join(""));

    return (num == rev ? true : false);
}
