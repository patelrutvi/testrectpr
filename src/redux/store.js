import { applyMiddleware, createStore } from "redux"
import { rooreducer } from "./reducer"
import thunk from "redux-thunk"

export  const configureStore = () => {
let store = createStore(rooreducer,applyMiddleware(thunk))

return store
}