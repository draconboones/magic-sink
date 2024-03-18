// magic-utils.js

// Importing dependencies
const axios = require('axios');
const _ = require('lodash');

// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Function to generate a random magic 8-ball response
async function magic8Ball() {
  try {
    const response = await axios.get('https://8ball.delegator.com/magic/JSON');
    return response.data.magic.answer;
  } catch (error) {
    console.error('Error fetching magic 8-ball response:', error.message);
    return null;
  }
}

// Function to get the n-th Fibonacci number
function fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b;
}

module.exports = {
  isEven,
  magic8Ball,
  fibonacci
};
