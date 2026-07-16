import { useState } from 'react'
import { categories } from '../data/questions.js'
import { ALL_CATEGORIES } from '../utils/quiz.js'

const QUESTION_COUNTS = [5, 10, 15]

export default function StartScreen({ onStart }) {
  const [category, setCategory] = useState(ALL_CATEGORIES)
  const [count, setCount] = useState(10)

  const categoryOptions = [ALL_CATEGORIES, ...categories]

  return (
    <div className="screen start-screen">
      <header className="start-header">
        <h1 className="title">SMC DAO Quiz</h1>
        <p className="subtitle">Pick a category and test your knowledge.</p>
      </header>

      <section className="field">
        <h2 className="field-label">Category</h2>
        <div className="option-grid">
          {categoryOptions.map((name) => (
            <button
              key={name}
              type="button"
              className={`chip ${category === name ? 'chip--selected' : ''}`}
              aria-pressed={category === name}
              onClick={() => setCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </section>

      <section className="field">
        <h2 className="field-label">Number of questions</h2>
        <div className="option-grid option-grid--counts">
          {QUESTION_COUNTS.map((n) => (
            <button
              key={n}
              type="button"
              className={`chip ${count === n ? 'chip--selected' : ''}`}
              aria-pressed={count === n}
              onClick={() => setCount(n)}
            >
              {n}
            </button>
          ))}
        </div>
      </section>

      <button
        type="button"
        className="btn btn--primary btn--block"
        onClick={() => onStart(category, count)}
      >
        Start Quiz
      </button>
    </div>
  )
}
