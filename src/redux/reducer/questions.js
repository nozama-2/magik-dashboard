const addQuestions = (state, action) => {
  console.log(action);
  console.log(state.quizzes[action.quizName]);
  return {
    ...state,
    quizzes: {
      ...state.quizzes,
      [action.quizName]: {
        ...state.quizzes[action.quizName],
        questions: action.questions,
        objective: action.objective,
        image: action.image,
      },
    },
  };
};

const newQuiz = (state, action) => {
  return {
    ...state,
    quizzes: {
      ...state.quizzes,
      [action.quizName]: {
        questions: [],
        objective: "random objective",
        image: "",
      },
    },
  };
};
export { addQuestions, newQuiz };
