const sieveOfAtkin = require("./sieve-of-atkin");
const sieveOfEratosthenes = require("./sieve-of-eratosthenes");

function NthPrime(n) {
  const nthPrime = sieveOfEratosthenes(n);

  console.log({ nthPrime });
  return nthPrime;
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
