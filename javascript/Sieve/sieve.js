class Sieve {
  NthPrime(n) {
    let temp = 0;
    let primesCount = 0;
    let primesArray = null;
    
    do {
      const { count, primes } = this.classicSieve(temp);


      primesArray = primes;
      primesCount = count;
      temp++;
     } while (primesCount < n + 1) 

    return primesArray.pop();
  }
  isEven(n) {
    return n % 2 === 0;
  }
  loopXY(n, callback) {
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < n; j++) {
        callback(i, j);
      }
    }
  }
  atkinSieve(n) {
    const resultsSieve = [2, 3, 5];
    const arrayLength = n - 1 >= 1 ? n : 1;
    const isPrimeArray = new Array(arrayLength).fill(null).map((value, index) => {
      return { val: index + 1, isPrime: false };
    });
    const magicNumbers = [1, 13, 17, 29, 37, 41, 49, 53];
    const otherMagicNumbers = [7, 19, 31, 43];
    const yetMoreMagicNumbers = [11, 23, 47, 59];

    isPrimeArray.forEach((entry) => {
        const modulo60 = entry.val % 60;

        for (let i = 1; i < n /2; i++) {
          for (let j = 1; j < n / 2; j++) {
            if (magicNumbers.includes(modulo60) && !this.isEven(j)) {
                const valueToFlip = (4 * Math.pow(i, 2)) + Math.pow(j, 2);
                if (valueToFlip === entry.val) {
                  const entryToFlip = isPrimeArray[valueToFlip - 1];
                  entryToFlip.isPrime = !entryToFlip.isPrime;
              
                }
            }
            else if (otherMagicNumbers.includes(modulo60) && !this.isEven(i) && this.isEven(j)) {
              const valueToFlip = (3 * Math.pow(i, 2)) + Math.pow(j, 2);
              const entryToFlip = isPrimeArray[valueToFlip - 1];
              
              if (valueToFlip === entry.val) {
                entryToFlip.isPrime = !entryToFlip.isPrime;
              }

            }
            else if (yetMoreMagicNumbers.includes(modulo60)) {
              if (i > j) {
                const valueToFlip = (3 * Math.pow(i, 2)) - Math.pow(j, 2);
                const entryToFlip = isPrimeArray[valueToFlip - 1];
                
                if (valueToFlip === entry.val) {
                  entryToFlip.isPrime = !entryToFlip.isPrime;
                }
              }
            }
          }
        }
    });

    isPrimeArray.forEach(entry => {
        if (entry.val >=7 && entry.isPrime) {
          resultsSieve.push(entry.val);
    
          const squaredPrime = Math.pow(entry.val, 2);
    
          let multiple = 1;
    
          
          while (squaredPrime * multiple < n) {
            const valueToFlip = squaredPrime * multiple;
            const entryToFlip = isPrimeArray[valueToFlip - 1]
            entryToFlip.isPrime = false;
    
            multiple++
          }
      }
    });

    return resultsSieve;
  }

  classicSieve(n) {
    const primes = []
    let anchorPrime = 2;
    let anchorPrimeIndex = 0;
    let count = 1;

    const arrayLength = n - 1 >= 1 ? n : 1;
    const arr = new Array(arrayLength).fill(2).reduce((acc, curr, index) => {
      if (index === 0) return acc;

      return [...acc, acc[index - 1] + 1];
    }, [2])

    while (anchorPrime < n) {
      for (let i = anchorPrimeIndex; i < arr.length; i += anchorPrime) {
        if (i > anchorPrimeIndex + 1) {
          arr.splice(i, 1, null);
        }
      }

      anchorPrime = arr.find((item, index) => {
        if (!!item && item > anchorPrime) {
          anchorPrimeIndex = index;
          return item
        }
      })

      if (anchorPrime) {
        count++;
        primes.push(anchorPrime)
      }
    }
    
    return {
      primes: arr,
      count,
    }
  }
}

module.exports = Sieve;
