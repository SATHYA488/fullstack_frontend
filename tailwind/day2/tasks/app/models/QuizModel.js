/**
 * ENTERPRISE IT MVC PLATFORM - QUIZ MODEL
 * Manages assessment question data, response evaluation, and score validation.
 */

class QuizModel {
  constructor(questions = []) {
    this.questions = questions;
    this.userAnswers = {};
  }

  setQuestions(questions) {
    this.questions = questions;
  }

  getQuestions() {
    return this.questions;
  }

  getQuestionCount() {
    return this.questions.length;
  }

  recordAnswer(questionIndex, selectedOptionIndex) {
    this.userAnswers[questionIndex] = selectedOptionIndex;
  }

  evaluateAnswers() {
    let score = 0;
    const details = [];

    this.questions.forEach((q, index) => {
      const selected = this.userAnswers[index];
      const isCorrect = selected !== undefined && selected === q.correctIndex;
      if (isCorrect) score++;

      details.push({
        questionIndex: index,
        question: q.question,
        selectedOption: selected,
        correctOption: q.correctIndex,
        isCorrect: isCorrect,
        explanation: q.explanation
      });
    });

    const total = this.questions.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    const passed = percentage >= 75;

    return {
      score,
      total,
      percentage,
      passed,
      details
    };
  }

  reset() {
    this.userAnswers = {};
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuizModel;
} else {
  window.QuizModel = QuizModel;
}
