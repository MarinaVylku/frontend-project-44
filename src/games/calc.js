import { getRandomNumber } from '../utils.js'

import runGameLogic from './gameLogic.js'

const description = 'What is the result of the expression?'

const getRandomOperator = () => {
  const signes = ['+', '-', '*']
  const random = getRandomNumber(0, 2)
  return signes[random]
}

const generateRounds = () => {
  const rounds = []
  for (let i = 0; i < 2; i += 1) {
    const firstOperand = getRandomNumber(1, 100)
    const secondOperand = getRandomNumber(1, 100)
    const operator = getRandomOperator()

    const question = `${firstOperand} ${operator} ${secondOperand}`
    let correctAnswer
    if (operator === '+') {
      correctAnswer = String(firstOperand + secondOperand)
    }
    else if (operator === '-') {
      correctAnswer = String(firstOperand - secondOperand)
    }
    else {
      correctAnswer = String(firstOperand * secondOperand)
    }
    rounds.push([question, correctAnswer])
  }
  return rounds
}

const runCalcGame = () => {
  const rounds = generateRounds()
  runGameLogic(rounds, description)
}
export default runCalcGame
