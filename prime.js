function printPrimesBelow(number) {
   let primes = [];
   for (let i = 2; i < number; i++) {
      if (isPrime(i)) {
         primes.push(i);
      }
   }
   return primes;
}

function isPrime(num) {
   if (num <= 1) {
      return false;
   }
   for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
         return false;
      }
   }
   return true;
}

console.log(printPrimesBelow(200));