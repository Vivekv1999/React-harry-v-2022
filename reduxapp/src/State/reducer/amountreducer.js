// at here we defiene intialstate but harry not define ===== sam define here
// ex. intialstate={
//     amount:0
// }
const reducer = (state = 0, action) => {
    if (action.type === "deposite") {
        return state + action.payload
    }
    else if (action.type === "withdraw") {
        return state - action.payload;
    }
    else {
        return state;
    }
}
export default reducer;