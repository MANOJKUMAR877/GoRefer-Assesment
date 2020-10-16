import initialState from "./initialState";

const likeDislikeReducer = (state = initialState, action) => {
    if (action.type === "DISLIKE") {
        // console.log("payload", action.value);
        return {
            ...state,
            count: action.value
        }
    }
    return state;
};
export default likeDislikeReducer;
