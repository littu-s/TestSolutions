var min = 1;
var max = 20;
var numbers = Array.from({ length:  max - min + 1 }, (v, k) => min + k);
var lcm = 1;

lcm = numbers.reduce((lcm, element) => {
              if(lcm % element != 0){
                var divisor = nextDivisor(element, 1);
                while(divisor != element && (lcm * divisor) % element != 0)
                {
                  divisor = nextDivisor(element, divisor);
                }
                lcm *= divisor;
              }
              return lcm;
            });

console.log(lcm);

function nextDivisor(num, currentDivisor)
{
  for(var i = (currentDivisor + 1); i <= num; i++)
  {
    if(num % i == 0)
    {
      return i;
    }
  }
}
