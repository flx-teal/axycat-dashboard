import authReducer from './authReducer';
import errorReducer from './errorReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    firestore: firestoreReducer
});

export default rootReducer;
