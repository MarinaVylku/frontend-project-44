import { getRandomNumber } from '../utils.js'
import runGameLogic from './gameLogic.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"'

const isPrime = (num) => {
  if (num < 2) {
    return false
  }
  else if (num === 2) {
    return true
  }
  else if (num % 2 === 0) {
    return false
  }

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'

  return [question, correctAnswer]
}

const runPrimeGame = () => {
  runGameLogic(generateRound, description)
}

export default runPrimeGame
