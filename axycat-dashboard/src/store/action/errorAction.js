import React from 'react'

 const createError = (error) => {
        return (dispatch, getState, {getFirebase, getFirestore}) => {
            //make async call to database
            const firestore = getFirestore();
            firestore.collection('errors').add({
                ...error
            }).then(() => {
                dispatch({type: 'ADD_ERROR', error})
            }).catch((err) => {
                dispatch({type: 'ADD_ERROR_ERROR', err})
            })
        }
    };

export default createError;