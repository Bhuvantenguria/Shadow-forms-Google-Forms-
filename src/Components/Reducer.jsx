export const initialState = {
    questions: [{ questionText: "Question", questionType: "radio", options: [{ optionText: "option 1" }], open: true, required: false }],
    questionType: "radio",
    doc_name: "Untitled Form",
    doc_desc: "Add the Description"
}

export const actionTypes = {
    SET_QUESTIONS: "SET_QUESTIONS",
    SET_DOC_NAME: "SET_DOC_NAME",
    SET_DOC_DESC: "SET_DOC_DESC",
    SET_QUESTION_TYPE: "SET_QUESTION_TYPE"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_QUESTIONS:
            return {
                ...state, questions: action.questions,
            };
        case actionTypes.SET_DOC_NAME:
            return {
                ...state, doc_name: action.doc_name
            };
        case actionTypes.SET_DOC_DESC:
            return {
                ...state, doc_desc: action.doc_desc
            };
        case actionTypes.SET_QUESTION_TYPE:
            return {
                ...state, questionType: action.questionType
            }
        default:
            return state
    }
}

export default reducer;
