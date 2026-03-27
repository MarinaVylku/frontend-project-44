import { getRandomNumber } from "../utils.js"

import runGameLogic from "./gameLogic.js"

const description = "What number is missing in the progression?"

const generatProgression = () => {
    const progression = []
    const first = getRandomNumber(1, 50)
    const step = getRandomNumber(1, 50)
    const count = getRandomNumber(5, 10)
    for ( let i = 0; i < count; i += 1 ) {
        progression.push(first + i * step)
    }
    return progression
}

const generateRound = () => {
    const progression = generatProgression()
    const hidden = progression[getRandomNumber(0, progression.length - 1)]
    const question = `${String(progression).replace(hidden, '..')}`
    const correctAnswer = String(hidden)
    return [question, correctAnswer]
}

const runProgressionGame = () => {
    runGameLogic(generateRound, description)
}

export default runProgressionGame