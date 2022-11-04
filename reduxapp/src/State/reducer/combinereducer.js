// at here we defiene intialstate but harry not define ===== sam define here
// ex. intialstate={
//     amount:0
// }


import { combineReducers } from "redux";
import amountreducer from "./amountreducer";

const reducers=combineReducers({
    amount:amountreducer
})

export default reducers
