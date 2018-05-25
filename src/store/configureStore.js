import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initalState){
    return createStore(
        rootReducer, 
        initalState,
        applyMiddleware(reduxImutableStateInvariant())
    );
}