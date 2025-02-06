const sieveOfAtkin = require("./sieve-of-atkin");
const sieveOfEratosthenes = require("./sieve-of-eratosthenes");

function NthPrime(n) {
  let sieveLength = 0;
  let primesCount = 0;
  let primesArray = null;

  // Sieve through every length of array until the number of primes returned equals the limit, n
  do {
    const { primes, count } = sieveOfEratosthenes(sieveLength, primesArray);
    primesArray = primes;
    primesCount = count;
    sieveLength++;

    // Sieve at least once (in case n is 0), then if we haven't hit our limit, incrememnt
  } while (primesCount < n + 1);

  // The last item in the "composite elimination array" should be our target prime
  return primesArray.pop();
}

function NthPrimeAtkin(n) {
  let temp = 0;
  let primesCount = 0;
  let primesArray = null;
  let compositeSieve = null;
  do {
    const { count, primes, isPrimeArray } = sieveOfAtkin(temp, compositeSieve);

    primesArray = primes;
    primesCount = count;
    compositeSieve = isPrimeArray;
    temp++;
  } while (primesCount < n + 1);

  return primesArray[n];
}

module.exports = {
  NthPrime,
  NthPrimeAtkin,
};
