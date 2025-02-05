const Sieve = require("./sieve");
const primesUpTo1000 = require("./primes-up-to-1000");

describe("Sieve", () => {
  test("valid results", () => {
    const sieve = new Sieve();
    expect(sieve.findPrimesUpToN(20)).toEqual({ 
      count: 8, 
      primes: [  
        2,
        3,
        "marked",
        5,
        "marked",
        7,
        "marked",
        "marked",
        "marked",
        11,
        "marked",
        13,
        "marked",
        "marked",
        "marked",
        17,
        "marked",
        19,
        "marked",
        "marked",
      ] 
  });
  expect(sieve.findPrimesUpToN(23)).toEqual({ 
    count: 9, 
    primes: [  
      2,
      3,
      "marked",
      5,
      "marked",
      7,
      "marked",
      "marked",
      "marked",
      11,
      "marked",
      13,
      "marked",
      "marked",
      "marked",
      17,
      "marked",
      19,
      "marked",
      "marked",
      "marked",
      23,
      "marked",
    ] 
  });
    expect(sieve.findPrimesUpToN(1000)).toEqual({
      count: 168,
      primes: primesUpTo1000,
  });
    expect(sieve.NthPrime(0)).toBe(2);
    expect(sieve.NthPrime(19)).toBe(71);
    expect(sieve.NthPrime(99)).toBe(541);
    expect(sieve.NthPrime(500)).toBe(3581);
    // expect(sieve.NthPrime(986)).toBe(7793);
    // expect(sieve.NthPrime(2000)).toBe(17393);
    // expect(sieve.NthPrime(1000000)).toBe(15485867);
    // expect(sieve.NthPrime(10000000)).toBe(179424691);
    //expect(sieve.NthPrime(100000000)).toBe(2038074751); not required, just a fun challenge
  });
});
