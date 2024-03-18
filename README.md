# Magic Utils

A magical collection of utility functions for Node.js.

## Installation

You can install this module using npm: `npm install magic-utils`

## Usage
```javascript
const magicUtils = require('magic-utils');

// Check if a number is even
console.log('Is 10 even?', magicUtils.isEven(10)); // Output: true

// Get a random magic 8-ball response
magicUtils.magic8Ball()
  .then(response => console.log('Magic 8-ball says:', response))
  .catch(error => console.error('Error:', error.message));

// Get the 10th Fibonacci number
console.log('10th Fibonacci number:', magicUtils.fibonacci(10)); // Output: 55

```