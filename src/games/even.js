import { getRandomNumber } from '../utils.js'
import runGameLogic from './gameLogic.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0
const generateRounds = () => {
  const rounds = []
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber(1, 100)
    const correctAnswer = isEven(question) ? 'yes' : 'no'
    rounds.push([question, correctAnswer])
  }
  return rounds
}

const runEvenGame = () => {
  const rounds = generateRounds()
  runGameLogic(rounds, description)
}

export default runEvenGame
