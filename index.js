const MersenneTwister = require('mersenne-twister');

// Linear Congruential Generator
class LCG {
  constructor(a, c, m, seed) {
    this.a = a;
    this.c = c;
    this.m = m;
    this.state = seed;
  }

  next() {
    this.state = (this.a * this.state + this.c) % this.m;
    return this.state / this.m;
  }
}

// Mersenne Twister
let mersenneTwister = new MersenneTwister();

// XorShift
class XorShift {
  constructor(seed = 1) {
    this.state = seed;
  }

  next() {
    this.state ^= this.state << 13;
    this.state ^= this.state >>> 17;
    this.state ^= this.state << 5;
    return this.state / Math.pow(2, 32);
  }
}

// Usage Examples

let lcg = new LCG(48271, 0, Math.pow(2, 31) - 1, Date.now());
console.log("LCG: ", lcg.next());

console.log("Mersenne Twister: ", mersenneTwister.random());

let xorShift = new XorShift(Date.now());
console.log("XorShift: ", xorShift.next());
