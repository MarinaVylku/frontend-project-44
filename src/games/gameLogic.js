import readlineSync from 'readline-sync'

const runGameLogic = (rounds, description) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May i have your name? ')
  console.log(`Hello, ${userName}`)
  console.log(description)
  for (const round of rounds) {
    const [question, correctAnswer] = round
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ; ). Correct answer was '${correctAnswer}'`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulation, ${userName}!`)
}

export default runGameLogic
