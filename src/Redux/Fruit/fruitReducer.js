import { BUY_FRUIT } from "./fruitTypes"

const initialState = {
    Number_Of_Fruits : 10
}

const fruitReducer = (state=initialState, action)=>{
        switch(action.type){
            case BUY_FRUIT:
                return{
                    ...state,
                    Number_Of_Fruits: state.Number_Of_Fruits-1
                }
            default:return {...state}//...state is a spread operator so brackets near ...state will be ignored
            //{state} is considering it as a object so an object of state will be passed instead of state
            // return state in this only state will be passed not object of a state
        }
}

export default fruitReducer


