function sieveOfEratosthenes(n, prevPrimes) {
  // Base case
  if (n === 0) return { primes: [2], count: 1 };

  const primes = [2];
  let headPrime = 2;
  let headPrimeIndex = 0;

  let arr = prevPrimes
    ? // Use memoized array to prevent redundant recalculation of already eliminated composites
      [...prevPrimes, prevPrimes.length + 2]
    : // If no memo available, create incrementing array 2 -> n
      new Array(n - 2).fill(null).map((_, i) => i + 2);

  // As long as 1) have a head prime and 2) that head prime is not a winner (i.e., not as big as our limit)
  while (Boolean(headPrime) && headPrime < n) {
    // Start at the first multiple of the "head" prime
    for (
      let i = headPrimeIndex + headPrime;
      i < arr.length;
      // Incrememnt by a multiple of this "head" prime
      i += headPrime
    ) {
      if (arr[i]) {
        // Mark this and all further multiples as composite
        arr[i] = null;
      }
    }

    // Then find the next "head" prime
    for (let j = headPrimeIndex; j < arr.length; j += 1) {
      const primeCandidate = arr[j];

      // If this number is not marked as composite and is larger than our current "head"
      if (!!primeCandidate && primeCandidate > headPrime) {
        // Set this new prime as the current head, and add it to the primes array
        headPrimeIndex = j;
        headPrime = primeCandidate;
        primes.push(primeCandidate);
        break;
      }

      if (j === arr.length - 1) {
        // If this is the last item in the array, we have no match:
        // Break the core while loop go back and try a new array
        headPrime = undefined;
      }
    }
  }

  return {
    primes: arr,
    count: primes.length,
  };
}

module.exports = sieveOfEratosthenes;
