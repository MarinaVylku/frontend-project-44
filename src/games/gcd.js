import { getRandomNumber } from '../utils.js'

import runGameLogic from './gameLogic.js'

const description = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100)
  const secondNumber = getRandomNumber(1, 100)
  const question = `${firstNumber} ${secondNumber}`
  const correctAnswer = String(gcd(firstNumber, secondNumber))

  return [question, correctAnswer]
}

const runDivisorGame = () => {
  runGameLogic(generateRound, description)
}

export default runDivisorGame
