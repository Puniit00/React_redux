import { createStore } from "redux";
import fruitReducer from '../Redux/Fruit/fruitReducer'

const store= createStore(fruitReducer);

export default store;
