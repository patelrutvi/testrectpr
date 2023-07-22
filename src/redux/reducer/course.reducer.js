
import * as Actiontype from '../Actiontype'

const iniState = {
    cdata : [],
    loding : false,
    error:null
}


export const courseReducer = (state = iniState , action) => {
    console.log(action);

    switch(action.type){
        case Actiontype.GET_DATA :
            return {
                ...state,
                cdata : action.payload, 
            }

            default : 
            return state
    }


}