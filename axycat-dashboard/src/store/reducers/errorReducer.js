const initState = {};

const errorReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            console.log('add error', action.error);
            return state;
        case 'ADD_ERROR_ERROR':
            console.log('add error error', action.err);
            return state;
        default:
            return state;
    }
};

export default errorReducer;