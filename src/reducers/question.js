export const questions = (state = {}, action) => {
    switch(action.type){
        case 'LOAD_QUESTIONS':
            return { ...action.questions }
        case 'ADD_QUESTION':
            return { ...state.questions, [action.question.id]: { ...action.question } }
        default:
            return state;
    }
}

export const getQuestions = questions => {
    let arr = []
    Object.keys(questions).forEach(key => arr.push(questions[key]))
    return arr;
}