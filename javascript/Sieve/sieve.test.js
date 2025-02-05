const Sieve = require("./sieve");
const primesUpTo1000 = require("./primes-up-to-1000");

describe("Sieve", () => {
  test("valid results", () => {
    const sieve = new Sieve();
  //   expect(sieve.classicSieve(20)).toEqual({ 
  //     count: 8, 
  //     primes: [  
  //       2,
  //       3,
  //       null,
  //       5,
  //       null,
  //       7,
  //       null,
  //       null,
  //       null,
  //       11,
  //       null,
  //       13,
  //       null,
  //       null,
  //       null,
  //       17,
  //       null,
  //       19,
  //       null,
  //       null,
  //     ] 
  // });
  // expect(sieve.classicSieve(23)).toEqual({ 
  //   count: 9, 
  //   primes: [  
  //     2,
  //     3,
  //     null,
  //     5,
  //     null,
  //     7,
  //     null,
  //     null,
  //     null,
  //     11,
  //     null,
  //     13,
  //     null,
  //     null,
  //     null,
  //     17,
  //     null,
  //     19,
  //     null,
  //     null,
  //     null,
  //     23,
  //     null,
  //   ] 
  // });
  //   expect(sieve.classicSieve(1000)).toEqual({
  //     count: 168,
  //     primes: primesUpTo1000,
  // });
    expect(sieve.atkinSieve(20)).toEqual(
       [2, 3, 5,7,11,13,17,19]
  );
    // expect(sieve.NthPrime(0)).toBe(2);
    // expect(sieve.NthPrime(19)).toBe(71);
    // expect(sieve.NthPrime(99)).toBe(541);
    // expect(sieve.NthPrime(500)).toBe(3581); // Time: 12.655 s
    // expect(sieve.NthPrime(986)).toBe(7793); // Time: 190.489 s
    // expect(sieve.NthPrime(2000)).toBe(17393); // Time: 2223.024 s
    // expect(sieve.NthPrime(1000000)).toBe(15485867);
    // expect(sieve.NthPrime(10000000)).toBe(179424691);
    // expect(sieve.NthPrime(100000000)).toBe(2038074751); not required, just a fun challenge
  });
});
