const MAGIC_NUMBERS = [1, 13, 17, 29, 37, 41, 49, 53];
const OTHER_MAGIC_NUMBERS = [7, 19, 31, 43];
const YET_MORE_MAGIC_NUMBERS = [11, 23, 47, 59];

function flipEntry(isPrimeArray, valueToFlip) {
  const entryToFlip = isPrimeArray[valueToFlip - 1];
  entryToFlip.isPrime = !entryToFlip.isPrime;
}

function sieveOfAtkin(n, prevPrimes) {
  const resultsSieve = [2, 3, 5];
  const arrayLength = n - 1 >= 1 ? n : 1;

  const isPrimeArray = prevPrimes
    ? [...prevPrimes, { val: prevPrimes.length + 1, isPrime: false }]
    : new Array(arrayLength)
        .fill(null)
        .map((_, index) => ({ val: index + 1, isPrime: false }));

  isPrimeArray.forEach((entry) => {
    const modulo60 = entry.val % 60;

    for (let i = 1; i < n / 2; i++) {
      for (let j = 1; j < n / 2; j++) {
        const jIsEven = j % 2 === 0;
        const iIsEven = i % 2 === 0;
        if (MAGIC_NUMBERS.includes(modulo60) && !jIsEven) {
          const valueToFlip = 4 * Math.pow(i, 2) + Math.pow(j, 2);

          if (valueToFlip === entry.val) {
            flipEntry(isPrimeArray, valueToFlip);
          }
        } else if (
          OTHER_MAGIC_NUMBERS.includes(modulo60) &&
          !iIsEven &&
          jIsEven
        ) {
          const valueToFlip = 3 * Math.pow(i, 2) + Math.pow(j, 2);

          if (valueToFlip === entry.val) {
            flipEntry(isPrimeArray, valueToFlip);
          }
        } else if (YET_MORE_MAGIC_NUMBERS.includes(modulo60)) {
          if (i > j) {
            const valueToFlip = 3 * Math.pow(i, 2) - Math.pow(j, 2);

            if (valueToFlip === entry.val) {
              flipEntry(isPrimeArray, valueToFlip);
            }
          }
        }
      }
    }
  });

  isPrimeArray.forEach((entry) => {
    if (entry.val >= 7 && entry.isPrime) {
      resultsSieve.push(entry.val);

      const squaredPrime = Math.pow(entry.val, 2);

      let multiple = 1;

      while (squaredPrime * multiple < n) {
        const valueToFlip = squaredPrime * multiple;
        const entryToFlip = isPrimeArray[valueToFlip - 1];
        entryToFlip.isPrime = false;

        multiple++;
      }
    }
  });

  return {
    primes: resultsSieve,
    isPrimeArray,
    count: resultsSieve.length,
  };
}

module.exports = sieveOfAtkin;
