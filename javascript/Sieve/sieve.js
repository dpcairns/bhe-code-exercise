class Sieve {
  NthPrime(n) {
    let temp = 0;
    let primesCount = 0;
    let primesArray = null;
    
    do {
      const { count, primes } = this.findPrimesUpToN(temp);


      primesArray = primes;
      primesCount = count;
      temp++;
     } while (primesCount < n + 1) 

    return primesArray.pop();
  }

  findPrimesUpToN(n) {
    const arrayLength = n - 1 >= 1 ? n : 1;
    const arr = new Array(arrayLength).fill(2).reduce((acc, curr, index) => {
      if (index === 0) return acc;

      return [...acc, acc[index - 1] + 1];
    }, [2])

    const primes = []
    let anchorPrime = 2;
    let anchorPrimeIndex = 0;
    let count = 0

    while (anchorPrime < n) {
      for (let i = anchorPrimeIndex; i < arr.length; i += anchorPrime) {
        if (i > anchorPrimeIndex + 1) {
          arr.splice(i, 1, 'marked');
          count++;
        }
      }

      anchorPrime = arr.find((item, index) => {
        if (!!item && item > anchorPrime) {
          anchorPrimeIndex = index;
          return item
        }
      })

      if (anchorPrime) {
        primes.push(anchorPrime)
      }
    }
    
    return {
      primes: arr,
      count: arr.filter(item => item !== 'marked').length,
    }
  }
}

module.exports = Sieve;
