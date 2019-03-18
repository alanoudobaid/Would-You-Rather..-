import * as api from '../api';
import { fetchUsers } from './user'

const loadQuestions = (questions) => ({
    type: 'LOAD_QUESTIONS',
    questions
})

const addQuestion = question => ({
    type: 'ADD_QUESTION',
    question
})

export const fetchQuestions = () => async dispatch => {
    const questions = await api._getQuestions();
    dispatch(loadQuestions(questions));
}

export const sendQuestion = q => async dispatch => {
    const question = await api._saveQuestion(q);
    dispatch(addQuestion(question));
    dispatch(fetchUsers())
}

export const sendAnswer = ({ authedUser, qid, answer }) => async dispatch => {
    await api._saveQuestionAnswer({ authedUser, qid, answer })
    dispatch(fetchQuestions());
    dispatch(fetchUsers())
} 