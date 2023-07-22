
import * as Actiontype from '../Actiontype'

const iniState = {
    cdata: [],
    loding: false,
    error: null
}


export const courseReducer = (state = iniState, action) => {
    console.log(action);

    switch (action.type) {
        case Actiontype.GET_DATA:
            return {
                ...state,
                cdata: action.payload,
            }
        case Actiontype.ADD_DATA:
            return {
                ...state,
                cdata: state.cdata.concat(action.payload)
            }
            case Actiontype.DELETE_DATA : 
            return {
                ...state,
                cdata: state.cdata.filter((v) => v.id != action.payload)
            }
            case Actiontype.Edit_DATA : 
            return {
                ...state,
                cdata: state.cdata.map((v) => {
                    if(v.id === action.payload.id){
                        return action.payload
                    }else{
                        return v
                    }
                })
            }
        default:
            return state
    }


}