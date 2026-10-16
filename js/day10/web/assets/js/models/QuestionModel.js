/**
 * Model: QuestionModel
 * Responsibility: Manages IT Assessment Questions, Technical Quizzes, Answer Validation, and Scoring Logic.
 * Architecture: MVC - Model Layer (Strictly Zero Emojis)
 */

class QuestionModel {
  constructor() {
    this.storageKey = 'it_questions_data';
    this.questions = this.loadInitialData();
  }

  loadInitialData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      {
        id: 'QST-201',
        questionText: 'In the MVC architectural pattern, what is the primary responsibility of the Model layer?',
        category: 'Software Architecture',
        difficulty: 'Medium',
        options: [
          'Directly attaching event listeners to DOM buttons',
          'Managing application state, business data entities, and persistence',
          'Handling CSS styling and screen animations',
          'Routing network packets across physical servers'
        ],
        correctOptionIndex: 1,
        explanation: 'The Model layer encapsulates the application core data structure, business logic rules, and storage persistence without being coupled to the visual presentation.',
        points: 10,
        tags: ['MVC', 'Architecture', 'Design Patterns']
      },
      {
        id: 'QST-202',
        questionText: 'Which JavaScript array method is specifically designed to aggregate all elements into a single accumulated value?',
        category: 'JavaScript Core',
        difficulty: 'Easy',
        options: [
          'Array.prototype.filter()',
          'Array.prototype.map()',
          'Array.prototype.reduce()',
          'Array.prototype.forEach()'
        ],
        correctOptionIndex: 2,
        explanation: 'Array.prototype.reduce() executes a reducer callback function on each element of the array, resulting in a single output value such as a sum or complex object.',
        points: 10,
        tags: ['JavaScript', 'ArrayMethods', 'FunctionalProgramming']
      },
      {
        id: 'QST-203',
        questionText: 'What occurs during the Temporal Dead Zone (TDZ) in JavaScript when accessing a let or const variable?',
        category: 'JavaScript Core',
        difficulty: 'Hard',
        options: [
          'The engine returns undefined automatically without error',
          'The engine throws a ReferenceError because the variable is hoisted but uninitialized',
          'The engine converts the variable to a global window property',
          'The engine terminates execution with a SyntaxError'
        ],
        correctOptionIndex: 1,
        explanation: 'Variables declared with let and const are hoisted to the top of their block scope but remain uninitialized until execution reaches their declaration line. Accessing them in this window throws a ReferenceError.',
        points: 15,
        tags: ['JavaScript', 'Hoisting', 'TDZ', 'Scope']
      },
      {
        id: 'QST-204',
        questionText: 'In microservice architectures, why is asynchronous event-driven messaging preferred over synchronous REST calls?',
        category: 'Cloud Infrastructure',
        difficulty: 'Medium',
        options: [
          'It eliminates the need for data validation entirely',
          'It decouples service lifecycles, prevents cascading failures, and handles bursty traffic queues',
          'It requires zero memory usage on cloud nodes',
          'It automatically converts JSON payloads into SQL queries'
        ],
        correctOptionIndex: 1,
        explanation: 'Asynchronous event messaging (e.g. Kafka, RabbitMQ) provides temporal decoupling between producers and consumers, isolating failures and smoothing out traffic spikes.',
        points: 10,
        tags: ['Microservices', 'DistributedSystems', 'DevOps']
      }
    ];
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.questions));
  }

  getAll() {
    return [...this.questions];
  }

  getById(id) {
    return this.questions.find(q => q.id === id);
  }

  getByCategory(category) {
    return this.questions.filter(q => q.category.toLowerCase() === category.toLowerCase());
  }

  getByDifficulty(difficulty) {
    return this.questions.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
  }

  add(questionData) {
    const newQuestion = {
      id: `QST-${Math.floor(200 + Math.random() * 800)}`,
      questionText: questionData.questionText.trim(),
      category: questionData.category || 'General IT',
      difficulty: questionData.difficulty || 'Medium',
      options: Array.isArray(questionData.options) ? questionData.options : questionData.options.split('\n').map(o => o.trim()),
      correctOptionIndex: parseInt(questionData.correctOptionIndex, 10) || 0,
      explanation: questionData.explanation.trim(),
      points: parseInt(questionData.points, 10) || 10,
      tags: Array.isArray(questionData.tags) ? questionData.tags : (questionData.tags ? questionData.tags.split(',').map(t => t.trim()) : [])
    };

    this.questions.push(newQuestion);
    this.save();
    return newQuestion;
  }

  update(id, updatedFields) {
    const index = this.questions.findIndex(q => q.id === id);
    if (index !== -1) {
      this.questions[index] = { ...this.questions[index], ...updatedFields };
      this.save();
      return this.questions[index];
    }
    return null;
  }

  delete(id) {
    this.questions = this.questions.filter(q => q.id !== id);
    this.save();
    return true;
  }

  validateAnswer(questionId, selectedOptionIndex) {
    const question = this.getById(questionId);
    if (!question) {
      return { valid: false, error: 'Question not found' };
    }

    const isCorrect = question.correctOptionIndex === selectedOptionIndex;
    return {
      valid: true,
      isCorrect,
      selectedOptionIndex,
      correctOptionIndex: question.correctOptionIndex,
      explanation: question.explanation,
      pointsAwarded: isCorrect ? question.points : 0
    };
  }

  calculateAssessmentScore(answersMap) {
    let totalPoints = 0;
    let earnedPoints = 0;
    let correctCount = 0;
    let incorrectCount = 0;

    this.questions.forEach(q => {
      totalPoints += q.points;
      const userSelected = answersMap[q.id];
      if (userSelected !== undefined && userSelected === q.correctOptionIndex) {
        earnedPoints += q.points;
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    const percentage = totalPoints > 0 ? ((earnedPoints / totalPoints) * 100).toFixed(1) : '0.0';
    const isPassing = parseFloat(percentage) >= 70.0;

    return {
      totalQuestions: this.questions.length,
      correctCount,
      incorrectCount,
      totalPoints,
      earnedPoints,
      percentage: parseFloat(percentage),
      status: isPassing ? 'Passed' : 'Failed'
    };
  }

  getCategories() {
    return [...new Set(this.questions.map(q => q.category))];
  }
}

window.QuestionModel = QuestionModel;
