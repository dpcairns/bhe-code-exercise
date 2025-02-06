const { NthPrime, NthPrimeAtkin } = require("./sieve");
const sieveOfAtkin = require("./sieve-of-atkin");
const sieveOfEratosthenes = require("./sieve-of-eratosthenes");
const primesUpTo1000 = require("./primes-up-to-1000");

describe("Sieve", () => {
  test.only("valid results", () => {
    // expect(NthPrime(0)).toBe(2);
    // expect(NthPrime(19)).toBe(71);
    // expect(NthPrime(99)).toBe(541);
    // expect(NthPrime(500)).toBe(3581);
    // expect(NthPrime(986)).toBe(7793);
    // expect(NthPrime(2000)).toBe(17393);
    // expect(NthPrime(1000000)).toBe(15485867); // Time: 0.827 s
    expect(NthPrime(10000000)).toBe(179424691);
    // expect(NthPrime(100000000)).toBe(2038074751); not required, just a fun challenge
  });

  test("sieveOfEratosthenes", () => {
    // expect(sieveOfEratosthenes(20)).toEqual({
    //   count: 8,
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
    //   ],
    // });
    // expect(sieveOfEratosthenes(25)).toEqual({
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
    //   ],
    // });
    expect(sieveOfEratosthenes(100000)).toEqual({
      count: 168,
      primes: [],
    });
    // expect(sieveOfEratosthenes(100000)).toEqual({
    //   count: 168,
    //   primes: primesUpTo1000,
    // });
  });

  test("sieveOfAtkin", () => {
    expect(sieveOfEratosthenes(1000)).toEqual({
      count: 168,
      primes: primesUpTo1000,
    });
    expect(sieveOfAtkin(20)).toEqual({
      count: 8,
      primes: [2, 3, 5, 7, 11, 13, 17, 19],
    });
    expect(sieveOfAtkin(1000)).toEqual({
      count: 168,
      primes: primesUpTo1000.filter((val) => !!val),
    });
  });

  test.skip("valid results, Sieve of Atkin", () => {
    expect(NthPrimeAtkin(0)).toBe(2);
    expect(NthPrimeAtkin(19)).toBe(71);
    expect(NthPrimeAtkin(95)).toBe(503); // 149.157 s
    // is there something special about this prime? It seems to fail when other tests succeed
    // expect(NthPrimeAtkin(99)).toBe(541);
    // expect(NthPrimeAtkin(500)).toBe(3581);
    // expect(NthPrimeAtkin(986)).toBe(7793);
    // expect(NthPrimeAtkin(2000)).toBe(17393);
  });
});
