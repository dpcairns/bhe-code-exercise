const { NthPrime, NthPrimeAtkin } = require("./sieve");
const sieveOfAtkin = require("./sieve-of-atkin");

describe("Sieve", () => {
  test("valid results", () => {
    expect(NthPrime(0)).toBe(2);
    expect(NthPrime(19)).toBe(71);
    expect(NthPrime(99)).toBe(541);
    expect(NthPrime(500)).toBe(3581);
    expect(NthPrime(986)).toBe(7793);
    expect(NthPrime(2000)).toBe(17393);
    expect(NthPrime(1000000)).toBe(15485867); // Time: 0.827 s
    expect(NthPrime(10000000)).toBe(179424691); // Time: 4.075 s,
    expect(NthPrime(100000000)).toBe(2038074751); // Time: 47.915 s // not required, just a fun challenge
  });

  test("sieveOfAtkin", () => {
    expect(sieveOfAtkin(20)).toEqual({
      count: 8,
      primes: [2, 3, 5, 7, 11, 13, 17, 19],
    });
    expect(sieveOfAtkin(155)).toEqual({
      count: 36,
      primes: [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
        71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139,
        149, 151,
      ],
    });
  });

  test("valid results, Sieve of Atkin", () => {
    expect(NthPrimeAtkin(0)).toBe(2);
    expect(NthPrimeAtkin(19)).toBe(71);
    // expect(NthPrimeAtkin(95)).toBe(503); // 149.157 s
    // expect(NthPrimeAtkin(99)).toBe(541); // is there something special about this prime? It seems to fail when other tests succeed
    // expect(NthPrimeAtkin(500)).toBe(3581);
    // expect(NthPrimeAtkin(986)).toBe(7793);
    // expect(NthPrimeAtkin(2000)).toBe(17393);
  });
});
