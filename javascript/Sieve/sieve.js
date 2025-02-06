const sieveOfAtkin = require("./sieve-of-atkin");

function NthPrime(n) {
  // Base case
  if (n === 0) return 2;

  const primes = [2];
  let anchorPrime = 2;
  let anchorPrimeIndex = 0;

  // Set upper limit, per prime number theorem
  const limit = Math.ceil(n * Math.log(n * Math.log(n)));

  const arr = new Uint32Array(limit);

  for (let i = 2; i < limit; i++) {
    arr[i] = i + 2;
  }

  // Repeat this process until we return a winner (i.e., we )
  while (primes.length <= n) {
    for (
      // Start at the first multiple of the "anchor" prime
      let i = anchorPrimeIndex + anchorPrime;
      i < arr.length;
      // Incrememnt by a multiple of this "anchor" prime
      i += anchorPrime
    ) {
      // Mark this and all further multiples as composite (0 is our marker, since we're in a Uint32Array)
      arr[i] = 0;
    }

    // Then find the next "anchor" prime
    for (
      // Start at the anchor prime index to prevent searching already-used primes
      let searchIndex = anchorPrimeIndex;
      searchIndex < arr.length;
      searchIndex += 1
    ) {
      const primeCandidate = arr[searchIndex];

      // If this number is not marked as composite and is larger than our current "anchor"
      if (!!primeCandidate && primeCandidate > anchorPrime) {
        // Set this new prime as the current anchor, and add it to the primes array
        anchorPrimeIndex = searchIndex;
        anchorPrime = primeCandidate;
        primes.push(primeCandidate);

        // If we have found the nth prime, return that value
        if (primes.length === n + 1) {
          return primeCandidate;
        }

        break;
      }
    }
  }
}

// This was a try at the Atkin Sieve.
// Abandonded this path once I learned of the upper limit trick
// const limit = Math.ceil(n * Math.log(n * Math.log(n)));
// Still learned something :)
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
