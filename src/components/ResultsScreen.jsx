export default function ResultsScreen({ quiz, answers, onTryAgain, onHome }) {
  const total = quiz.length
  const score = quiz.reduce(
    (sum, q, i) => sum + (answers[i] === q.correctAnswer ? 1 : 0),
    0,
  )
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0

  // Only the questions the user answered incorrectly.
  const wrong = quiz
    .map((q, i) => ({ ...q, userAnswer: answers[i], index: i }))
    .filter((q) => q.userAnswer !== q.correctAnswer)

  return (
    <div className="screen results-screen">
      <header className="results-header">
        <h1 className="title">Your Result</h1>
        <div className="score-circle">
          <span className="score-percent">{percentage}%</span>
        </div>
        <p className="score-line">
          You scored <strong>{score}</strong> out of <strong>{total}</strong>
        </p>
      </header>

      {wrong.length === 0 ? (
        <p className="perfect">Perfect score — you got every question right! 🎉</p>
      ) : (
        <section className="review">
          <h2 className="review-heading">
            Review ({wrong.length} {wrong.length === 1 ? 'question' : 'questions'} to
            revisit)
          </h2>

          <ul className="review-list">
            {wrong.map((q) => (
              <li key={q.index} className="review-item">
                <p className="review-question">{q.question}</p>

                <div className="review-answer review-answer--wrong">
                  <span className="review-answer__label">Your answer</span>
                  <span className="review-answer__value">
                    {q.userAnswer ?? 'No answer'}
                  </span>
                </div>

                <div className="review-answer review-answer--correct">
                  <span className="review-answer__label">Correct answer</span>
                  <span className="review-answer__value">{q.correctAnswer}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="results-actions">
        <button type="button" className="btn btn--primary btn--block" onClick={onTryAgain}>
          Try Again
        </button>
        <button type="button" className="btn btn--ghost btn--block" onClick={onHome}>
          Back to Start
        </button>
      </div>
    </div>
  )
}
