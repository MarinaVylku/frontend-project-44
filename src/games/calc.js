import { getRandomNumber } from '../utils.js'

import runGameLogic from './gameLogic.js'

const description = 'What is the result of the expression?'

const getRandomOperator = () => {
  const signes = ['+', '-', '*']
  const random = getRandomNumber(0, 2)
  return signes[random]
}

const generateRound = () => {
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
  return [question, correctAnswer]
}

const runCalcGame = () => {
  runGameLogic(generateRound, description)
}
export default runCalcGame
