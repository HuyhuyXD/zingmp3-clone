import rootReducer from "./Store/Reducer/rootReducer"
import { createStore, applyMiddleware} from "redux"
import { thunk } from "redux-thunk"

const reduxConfig = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    
    return store
}

export default reduxConfig