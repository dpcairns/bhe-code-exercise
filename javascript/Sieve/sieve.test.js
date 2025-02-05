const Sieve = require("./sieve");
const primesBelow1000 = require("./primes-below-1000");

describe("Sieve", () => {
  test("valid results", () => {
    const sieve = new Sieve();
    expect(sieve.findPrimesBelowN(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    expect(sieve.findPrimesBelowN(1000)).toEqual(primesBelow1000);
    // expect(sieve.NthPrime(0)).toBe(2);
    // expect(sieve.NthPrime(19)).toBe(71);
    // expect(sieve.NthPrime(99)).toBe(541);
    // expect(sieve.NthPrime(500)).toBe(3581);
    // expect(sieve.NthPrime(986)).toBe(7793);
    // expect(sieve.NthPrime(2000)).toBe(17393);
    // expect(sieve.NthPrime(1000000)).toBe(15485867);
    // expect(sieve.NthPrime(10000000)).toBe(179424691);
    //expect(sieve.NthPrime(100000000)).toBe(2038074751); not required, just a fun challenge
  });
});
