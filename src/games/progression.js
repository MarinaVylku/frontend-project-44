import { getRandomNumber } from '../utils.js'

import runGameLogic from './gameLogic.js'

const description = 'What number is missing in the progression?'

const generatProgression = () => {
  const progression = []
  const first = getRandomNumber(1, 50)
  const step = getRandomNumber(1, 50)
  const count = getRandomNumber(5, 10)
  for (let i = 0; i < count; i += 1) {
    progression.push(first + i * step)
  }
  return progression
}

const generateRound = () => {
  const progression = generatProgression()

  const hiddenIndex = getRandomNumber(0, progression.length - 1)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return [question, correctAnswer]
}
}

const runProgressionGame = () => {
  runGameLogic(generateRound, description)
}

export default runProgressionGame
