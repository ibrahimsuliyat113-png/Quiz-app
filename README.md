# SMC DAO Quiz

A simple, mobile-friendly multiple-choice quiz app built with **React + Vite**.
It runs entirely in the browser — no backend, no database, no login. All
questions live in a single local data file.

## Features

- Three categories: **General Knowledge**, **Current Affairs**, and **SMC DAO**
  (plus an **All Categories** mixed mode).
- Choose how many questions per attempt (5, 10, or 15).
- Fresh randomization on every attempt:
  - which questions are picked,
  - the order they appear in,
  - and the order of the 4 answer options within each question.
- One question at a time with a progress bar (e.g. "Question 3 of 10").
- Answers are **not** revealed during the quiz — only on the results screen.
- Results screen shows your score, a percentage, and a review of **only** the
  questions you got wrong (with your answer and the correct answer clearly
  marked).
- "Try Again" restarts with a brand-new random shuffle.

## Getting started

Requires [Node.js](https://nodejs.org/) 18+.

```bash
# install dependencies
npm install

# start the dev server (hot reload)
npm run dev

# build for production (outputs to dist/)
npm run build

# preview the production build locally
npm run preview
```

Then open the URL Vite prints (usually http://localhost:5173).

## Adding or editing questions

All questions live in **`src/data/questions.js`**. You do not need to touch any
app logic to change them.

The file exports a `questions` object keyed by category name. Each category is
an array of question objects shaped like this:

```js
{
  question: 'What does "DAO" stand for?',
  options: [
    'Digital Asset Organization',
    'Decentralized Autonomous Organization',
    'Distributed Application Operator',
    'Data Access Object',
  ],
  correctAnswer: 'Decentralized Autonomous Organization',
}
```

### Rules

1. Provide **exactly 4 options** per question.
2. `correctAnswer` must be an **exact string match** of one of the `options`.
3. You do **not** need to vary where the correct answer sits — the app shuffles
   the option order automatically on every attempt.

### Add a question to an existing category

Find the category array (e.g. `'General Knowledge': [ ... ]`) and add another
question object to it.

### Add a whole new category

Add a new key to the `questions` object with its own array of questions:

```js
export const questions = {
  'General Knowledge': [ /* ... */ ],
  'Current Affairs': [ /* ... */ ],
  'SMC DAO': [ /* ... */ ],
  'My New Category': [
    {
      question: 'Your question?',
      options: ['A', 'B', 'C', 'D'],
      correctAnswer: 'A',
    },
    // ...add at least a few more
  ],
}
```

The new category will automatically appear on the start screen — no other
changes needed.

## A note on the "SMC DAO" category

The **SMC DAO** questions are intentionally **neutral, general placeholders**
about DAOs, decentralization, and community/points-based ecosystems. Replace
them with your real SMC DAO-specific questions in `src/data/questions.js` when
you're ready — the app doesn't depend on the wording.

## Project structure

```
src/
  data/
    questions.js        # the question bank (edit this to add questions)
  utils/
    quiz.js             # shuffling + quiz-building logic
  components/
    StartScreen.jsx     # category + question-count selection
    QuizScreen.jsx      # one-question-at-a-time flow + progress bar
    ResultsScreen.jsx   # score, percentage, and wrong-answer review
  App.jsx               # screen/state orchestration
  main.jsx              # React entry point
  styles.css            # all styling
index.html
```
