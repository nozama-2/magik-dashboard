import initialState from "../state";

import { addQuestions, newQuiz } from "./questions";

let reducer = (state = initialState, action) => {
  if (action.type == 'addQuestions') {
    return addQuestions(state, action)
  }
  else if (action.type == 'newQuiz') {
    return newQuiz(state, action)
  }

  return state;
};

export default reducer;
