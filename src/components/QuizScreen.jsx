import { useState } from 'react'

export default function QuizScreen({ quiz, onFinish, onQuit }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(() => new Array(quiz.length).fill(null))

  const question = quiz[current]
  const selected = answers[current]
  const isLast = current === quiz.length - 1
  const progress = ((current + 1) / quiz.length) * 100

  function selectOption(option) {
    setAnswers((prev) => {
      const next = [...prev]
      next[current] = option
      return next
    })
  }

  function goNext() {
    if (selected === null) return
    if (isLast) {
      onFinish(answers)
    } else {
      setCurrent((c) => c + 1)
    }
  }

  return (
    <div className="screen quiz-screen">
      <div className="quiz-topbar">
        <button type="button" className="btn btn--ghost btn--small" onClick={onQuit}>
          ← Quit
        </button>
        <span className="progress-count">
          Question {current + 1} of {quiz.length}
        </span>
      </div>

      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={current + 1}
        aria-valuemin={1}
        aria-valuemax={quiz.length}
      >
        <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
      </div>

      <h2 className="question-text">{question.question}</h2>

      <div className="answers">
        {question.options.map((option) => (
          <button
            key={option}
            type="button"
            className={`answer ${selected === option ? 'answer--selected' : ''}`}
            aria-pressed={selected === option}
            onClick={() => selectOption(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="btn btn--primary btn--block"
        disabled={selected === null}
        onClick={goNext}
      >
        {isLast ? 'Finish' : 'Next'}
      </button>
    </div>
  )
}
