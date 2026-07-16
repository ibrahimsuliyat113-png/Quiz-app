// ============================================================================
// QUESTION BANK
// ----------------------------------------------------------------------------
// Questions are grouped by category. To add or edit questions, just edit the
// arrays below — no app logic needs to change.
//
// Each question is an object with this shape:
//   {
//     question: 'The question text?',
//     options: ['Option A', 'Option B', 'Option C', 'Option D'],
//     correctAnswer: 'Option B',   // must exactly match one of the options
//   }
//
// Rules:
//   - Provide exactly 4 options per question.
//   - `correctAnswer` must be an EXACT string match of one of the options.
//   - The app shuffles the option order automatically, so you do NOT need to
//     vary where the correct answer sits.
//
// The category keys below ('General Knowledge', etc.) are the labels shown on
// the start screen. Add a whole new category by adding a new key with its own
// array of questions.
// ============================================================================

export const questions = {
  'General Knowledge': [
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'Which element has the chemical symbol "O"?',
      options: ['Gold', 'Oxygen', 'Osmium', 'Iron'],
      correctAnswer: 'Oxygen',
    },
    {
      question: 'How many continents are there on Earth?',
      options: ['5', '6', '7', '8'],
      correctAnswer: '7',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      question: 'What is the capital city of Japan?',
      options: ['Seoul', 'Beijing', 'Bangkok', 'Tokyo'],
      correctAnswer: 'Tokyo',
    },
    {
      question: 'What is the tallest mountain above sea level on Earth?',
      options: ['K2', 'Mount Everest', 'Kilimanjaro', 'Denali'],
      correctAnswer: 'Mount Everest',
    },
    {
      question: 'Which ocean is the largest by surface area?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correctAnswer: 'Pacific Ocean',
    },
    {
      question: 'How many sides does a hexagon have?',
      options: ['5', '6', '7', '8'],
      correctAnswer: '6',
    },
    {
      question: 'What gas do plants primarily absorb from the atmosphere?',
      options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
      correctAnswer: 'Carbon dioxide',
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
      correctAnswer: 'William Shakespeare',
    },
    {
      question: 'What is the smallest prime number?',
      options: ['0', '1', '2', '3'],
      correctAnswer: '2',
    },
    {
      question: 'Which country is home to the kangaroo?',
      options: ['South Africa', 'Brazil', 'Australia', 'India'],
      correctAnswer: 'Australia',
    },
    {
      question: 'What is the freezing point of water in degrees Celsius?',
      options: ['0', '32', '100', '-10'],
      correctAnswer: '0',
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      options: ['Venus', 'Mars', 'Mercury', 'Neptune'],
      correctAnswer: 'Mars',
    },
    {
      question: 'How many strings does a standard guitar have?',
      options: ['4', '5', '6', '7'],
      correctAnswer: '6',
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['African elephant', 'Blue whale', 'Giraffe', 'Great white shark'],
      correctAnswer: 'Blue whale',
    },
    {
      question: 'In which country would you find the Eiffel Tower?',
      options: ['Italy', 'Spain', 'France', 'Germany'],
      correctAnswer: 'France',
    },
  ],

  'Current Affairs': [
    {
      question: 'What does "GDP" stand for in economics?',
      options: [
        'Gross Domestic Product',
        'General Domestic Price',
        'Global Development Plan',
        'Gross Domestic Price',
      ],
      correctAnswer: 'Gross Domestic Product',
    },
    {
      question: 'Which international body is best known for coordinating global public health?',
      options: ['NATO', 'WHO', 'IMF', 'WTO'],
      correctAnswer: 'WHO',
    },
    {
      question: 'What does "AI" most commonly stand for in technology news?',
      options: [
        'Automated Interface',
        'Artificial Intelligence',
        'Advanced Integration',
        'Applied Informatics',
      ],
      correctAnswer: 'Artificial Intelligence',
    },
    {
      question: 'Which organization is responsible for maintaining international peace and security among nations?',
      options: [
        'The United Nations',
        'The European Union',
        'The World Bank',
        'The Red Cross',
      ],
      correctAnswer: 'The United Nations',
    },
    {
      question: 'What term describes long-term shifts in global temperatures and weather patterns?',
      options: ['Climate change', 'Ozone recovery', 'Continental drift', 'Solar flare'],
      correctAnswer: 'Climate change',
    },
    {
      question: 'Which of these is a widely used renewable energy source?',
      options: ['Coal', 'Natural gas', 'Solar power', 'Diesel'],
      correctAnswer: 'Solar power',
    },
    {
      question: 'What does "EV" refer to in the context of transportation news?',
      options: ['Electric Vehicle', 'Extra Value', 'Engine Volume', 'Express Van'],
      correctAnswer: 'Electric Vehicle',
    },
    {
      question: 'Which financial event is characterized by a sharp, sustained drop in stock prices?',
      options: ['Bull run', 'Market crash', 'Dividend', 'IPO'],
      correctAnswer: 'Market crash',
    },
    {
      question: 'What does the acronym "NGO" stand for?',
      options: [
        'National Government Office',
        'Non-Governmental Organization',
        'New Global Order',
        'Net Growth Operation',
      ],
      correctAnswer: 'Non-Governmental Organization',
    },
    {
      question: 'Which summit brings together leaders of the world\'s major economies?',
      options: ['The G20', 'The Oscars', 'The Olympics', 'The Met Gala'],
      correctAnswer: 'The G20',
    },
    {
      question: 'What is the common name for money issued and regulated by a national government?',
      options: [
        'Fiat currency',
        'Cryptocurrency',
        'Barter credit',
        'Loyalty points',
      ],
      correctAnswer: 'Fiat currency',
    },
    {
      question: 'Which term describes the rapid rise in the general price of goods and services?',
      options: ['Deflation', 'Inflation', 'Recession', 'Stagnation'],
      correctAnswer: 'Inflation',
    },
    {
      question: 'What global agreement focuses on limiting greenhouse gas emissions?',
      options: [
        'The Paris Agreement',
        'The Geneva Convention',
        'The Kyoto Metro Plan',
        'The Bretton Woods Accord',
      ],
      correctAnswer: 'The Paris Agreement',
    },
    {
      question: 'Which sector do companies like those building apps and online platforms belong to?',
      options: ['Agriculture', 'Technology', 'Mining', 'Fishing'],
      correctAnswer: 'Technology',
    },
    {
      question: 'What does "COP" refer to in international climate news?',
      options: [
        'Conference of the Parties',
        'Committee on Pollution',
        'Council of Presidents',
        'Central Oversight Panel',
      ],
      correctAnswer: 'Conference of the Parties',
    },
    {
      question: 'Which term describes working for a company from outside a traditional office?',
      options: ['Remote work', 'Overtime', 'Internship', 'Sabbatical'],
      correctAnswer: 'Remote work',
    },
    {
      question: 'What is the name for a company\'s first sale of shares to the public?',
      options: [
        'IPO (Initial Public Offering)',
        'Merger',
        'Buyback',
        'Bailout',
      ],
      correctAnswer: 'IPO (Initial Public Offering)',
    },
  ],

  // ---------------------------------------------------------------------------
  // SMC DAO
  // These are NEUTRAL, GENERAL placeholder questions about DAOs,
  // decentralization, and community/points-based ecosystems. Replace them with
  // your real SMC DAO-specific questions when ready — the app does not depend
  // on the wording here.
  // ---------------------------------------------------------------------------
  'SMC DAO': [
    {
      question: 'What does "DAO" stand for?',
      options: [
        'Digital Asset Organization',
        'Decentralized Autonomous Organization',
        'Distributed Application Operator',
        'Data Access Object',
      ],
      correctAnswer: 'Decentralized Autonomous Organization',
    },
    {
      question: 'In a DAO, how are major decisions typically made?',
      options: [
        'By a single CEO',
        'By community voting among members',
        'By a government agency',
        'Randomly by a computer',
      ],
      correctAnswer: 'By community voting among members',
    },
    {
      question: 'What is a common purpose of a governance token in a DAO?',
      options: [
        'To grant voting power on proposals',
        'To pay company taxes',
        'To replace a password',
        'To store user photos',
      ],
      correctAnswer: 'To grant voting power on proposals',
    },
    {
      question: 'What does "decentralization" broadly mean in a Web3 community?',
      options: [
        'Control is spread across many participants rather than one central party',
        'All data is stored on a single server',
        'Only founders can make changes',
        'The community has no rules at all',
      ],
      correctAnswer: 'Control is spread across many participants rather than one central party',
    },
    {
      question: 'In a points-based community ecosystem, what do points usually represent?',
      options: [
        'A member\'s contribution or activity',
        'The member\'s home address',
        'A random lottery number',
        'The current time of day',
      ],
      correctAnswer: 'A member\'s contribution or activity',
    },
    {
      question: 'What is a "smart contract" in the context of a DAO?',
      options: [
        'Self-executing code that runs on agreed-upon rules',
        'A paper legal document signed in ink',
        'A verbal agreement between two people',
        'A customer support chatbot',
      ],
      correctAnswer: 'Self-executing code that runs on agreed-upon rules',
    },
    {
      question: 'What is a "proposal" in DAO governance?',
      options: [
        'A suggestion the community can vote on',
        'A private message to the founder',
        'An automatic refund',
        'A type of crypto wallet',
      ],
      correctAnswer: 'A suggestion the community can vote on',
    },
    {
      question: 'Why might a community reward members with points for participation?',
      options: [
        'To recognize and encourage contribution',
        'To collect their bank details',
        'To reduce the number of members',
        'To hide activity from members',
      ],
      correctAnswer: 'To recognize and encourage contribution',
    },
    {
      question: 'What is a "wallet" commonly used for in a Web3 community?',
      options: [
        'Holding digital assets and signing transactions',
        'Storing paper receipts',
        'Making phone calls',
        'Editing documents offline',
      ],
      correctAnswer: 'Holding digital assets and signing transactions',
    },
    {
      question: 'What does "on-chain" generally describe?',
      options: [
        'Data or actions recorded on a blockchain',
        'A message sent by email',
        'A file saved on a personal laptop',
        'A printed spreadsheet',
      ],
      correctAnswer: 'Data or actions recorded on a blockchain',
    },
    {
      question: 'What is a common benefit of transparency in a DAO?',
      options: [
        'Members can verify decisions and records openly',
        'Only admins can see what happens',
        'Records are permanently hidden',
        'Voting is done in secret',
      ],
      correctAnswer: 'Members can verify decisions and records openly',
    },
    {
      question: 'What is a "community treasury" in a DAO?',
      options: [
        'Shared funds managed collectively by the community',
        'A single member\'s private savings',
        'A physical bank vault',
        'A type of governance vote',
      ],
      correctAnswer: 'Shared funds managed collectively by the community',
    },
    {
      question: 'What does it usually mean to "stake" tokens in a Web3 ecosystem?',
      options: [
        'Locking tokens to support the network or earn rewards',
        'Deleting tokens permanently',
        'Selling tokens for cash instantly',
        'Printing new physical money',
      ],
      correctAnswer: 'Locking tokens to support the network or earn rewards',
    },
    {
      question: 'Why do many DAOs value active community engagement?',
      options: [
        'Participation helps guide and strengthen the project',
        'It lets one person control everything',
        'It reduces the need for any members',
        'It keeps decisions completely private',
      ],
      correctAnswer: 'Participation helps guide and strengthen the project',
    },
    {
      question: 'What is a "quorum" in the context of DAO voting?',
      options: [
        'The minimum participation needed for a vote to count',
        'A type of cryptocurrency',
        'The founder\'s personal veto',
        'A community newsletter',
      ],
      correctAnswer: 'The minimum participation needed for a vote to count',
    },
    {
      question: 'What is a typical role of a community leaderboard in a points-based ecosystem?',
      options: [
        'To highlight top contributors and activity',
        'To store passwords securely',
        'To process credit card payments',
        'To translate languages',
      ],
      correctAnswer: 'To highlight top contributors and activity',
    },
    {
      question: 'What does "trustless" mean in a decentralized system?',
      options: [
        'Participants rely on code and rules instead of a middleman',
        'Nobody in the community is honest',
        'All transactions are forbidden',
        'Trust is required from a central bank',
      ],
      correctAnswer: 'Participants rely on code and rules instead of a middleman',
    },
  ],
}

// A convenience list of the category names, in display order.
export const categories = Object.keys(questions)
