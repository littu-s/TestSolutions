var primeArray = [2, 3, 5, 7, 11, 13];
var i = 0;
var nth = 10001;

for(var num = 14; primeArray.length <= 10001 ; num++)
{
  var primeFlag = false;
  for(var i of primeArray)
  {
    primeFlag = (num % i === 0) ? false : true;
    if(!primeFlag)
    {
      break;
    }
  }
  if (primeFlag)
  {
    primeArray.push(num);
  }
}

console.log(primeArray[nth]);
