import actionTypes from "../Action/actionTypes";

const initState = {
    banner: []
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state
    
        default:
            return state
    }
}

export default appReducer
