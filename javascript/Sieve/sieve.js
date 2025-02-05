class Sieve {
  NthPrime(n) {
    console.log({ n})

    let temp = 0;
    // starting with 2,
    while (temp < n) {
      console.log(arr[n])
    }
  }
  findPrimesBelowN(n) {
    const arr = new Array(n - 1).fill(2).reduce((acc, curr, index) => {
      if (index === 0) return acc;

      return [...acc, acc[index - 1] + 1];
    }, [2])

    const primes = []
    let anchorPrime = 2;
    let anchorPrimeIndex = 0;
    while (anchorPrime < n) {
      for (let i = anchorPrimeIndex; i < arr.length; i += anchorPrime) {
        if (i > anchorPrimeIndex + 1) {
          arr.splice(i, 1, 'marked')
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
    
    return arr.filter(item => item !== 'marked');
  }
}

module.exports = Sieve;
