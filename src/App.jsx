import { useState } from 'react'
import StartScreen from './components/StartScreen.jsx'
import QuizScreen from './components/QuizScreen.jsx'
import ResultsScreen from './components/ResultsScreen.jsx'
import { buildQuiz } from './utils/quiz.js'

// The three screens the app moves between.
const STAGE = {
  START: 'start',
  QUIZ: 'quiz',
  RESULTS: 'results',
}

export default function App() {
  const [stage, setStage] = useState(STAGE.START)
  const [quiz, setQuiz] = useState([]) // the active list of questions
  const [answers, setAnswers] = useState([]) // user's selected option per question
  // Remember the last choices so "Try Again" can reshuffle with the same settings.
  const [settings, setSettings] = useState({ category: null, count: 0 })

  function startQuiz(category, count) {
    const generated = buildQuiz(category, count)
    setQuiz(generated)
    setAnswers(new Array(generated.length).fill(null))
    setSettings({ category, count })
    setStage(STAGE.QUIZ)
  }

  function finishQuiz(finalAnswers) {
    setAnswers(finalAnswers)
    setStage(STAGE.RESULTS)
  }

  // Restart with the SAME settings but a completely fresh random shuffle.
  function tryAgain() {
    startQuiz(settings.category, settings.count)
  }

  function backToStart() {
    setStage(STAGE.START)
    setQuiz([])
    setAnswers([])
  }

  return (
    <div className="app">
      <div className="card">
        {stage === STAGE.START && <StartScreen onStart={startQuiz} />}

        {stage === STAGE.QUIZ && (
          <QuizScreen quiz={quiz} onFinish={finishQuiz} onQuit={backToStart} />
        )}

        {stage === STAGE.RESULTS && (
          <ResultsScreen
            quiz={quiz}
            answers={answers}
            onTryAgain={tryAgain}
            onHome={backToStart}
          />
        )}
      </div>
    </div>
  )
}
