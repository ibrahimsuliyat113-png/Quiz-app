import { questions as questionBank } from '../data/questions.js'

// Fisher–Yates shuffle. Returns a NEW array; does not mutate the input.
export function shuffle(array) {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

// Special value used on the start screen to mix every category together.
export const ALL_CATEGORIES = 'All Categories'

// Collect the source questions for the chosen category (or all of them).
function collectQuestions(category) {
  if (category === ALL_CATEGORIES) {
    return Object.values(questionBank).flat()
  }
  return questionBank[category] ?? []
}

// Build a fresh, fully randomized quiz.
//   - Randomly selects `count` questions from the chosen category/categories.
//   - Randomly shuffles the order the questions are presented in.
//   - Randomly shuffles the 4 options within each question.
// Every call produces an independently random result.
export function buildQuiz(category, count) {
  const pool = collectQuestions(category)
  const selected = shuffle(pool).slice(0, count)

  return selected.map((q) => ({
    question: q.question,
    correctAnswer: q.correctAnswer,
    options: shuffle(q.options),
  }))
}
