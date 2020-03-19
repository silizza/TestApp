export const pictureReducer = (state = '', action) => {
    if (action.type == 'CHANGE') {
        return action.payload
    } else {
        return state;
    }
}