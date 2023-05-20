# Common Pseudo-Random Number Generators: Implementations and Usage Guide

This repository hosts various popular pseudo-random number generator (PRNG) implementations. These are primarily intended for statistical use cases and are not designed for cryptographic applications. For further details on these algorithms, visit our comprehensive guide on [Pseudo-Random Number Generators](PRNG.md).

Before diving into the code, here's an insightful article to read: [Are You Using These Random Number Algorithms Incorrectly?](https://medium.com/@earlred/are-you-using-these-random-number-algorithms-incorrectly-d7bf9bf51bf0)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your system. If you haven't, follow the link to download and install the latest version.

### Dependencies

After Node.js is set up, install the required npm package using the following command:

```bash
npm install mersenne-twister
```

## Usage

To execute the PRNG examples, open your terminal, navigate to the directory containing `index.js`, and run the following command:

```bash
node index.js
```

This command will generate and print a random number from each of the implemented algorithms: Linear Congruential Generator (LCG), Mersenne Twister, and XorShift.

## Description of Algorithms

Here's a quick overview of the algorithms implemented in this repository:

- **Linear Congruential Generator (LCG)**: Instantiate the LCG class to use this generator. Generate the next number in the sequence by calling the `next` method.

- **Mersenne Twister**: This algorithm creates random numbers when you instantiate it with the `new` keyword and call the `random` method.

- **XorShift**: Use this PRNG by instantiating the XorShift class. Like LCG, you can generate the next random number by invoking the `next` method.

**Note**: As these generators are intended for statistical purposes and not designed for cryptographic applications, they should not be used where secure randomness is required. Always opt for a cryptographically secure algorithm for such applications.
