
var flag = false;
var min = 2;
var max = 20;
var numbers = Array.from({ length:  max - min + 1 }, (v, k) => min + k);
var num = 2520;

while(!flag)
{
  for(var i of numbers)
  {
    flag = (num % i === 0) ? true : false;

    if(!flag)
    {
      num += max;
      break;
    }
  }
}

console.log(num);
