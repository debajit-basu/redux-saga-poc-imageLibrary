import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware()


const configureStore = () => {
    const store = createStore(
            rootReducer,
            compose(
                applyMiddleware(sagaMiddleware),

                window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(),
            ),

    );
    // then run the saga
    sagaMiddleware.run(rootSaga);

    /*store.dispatch({type: 'LOGIN'});
    store.dispatch({type: 'LOGIN'});
    store.dispatch({type: 'LOGIN'});*/
    return store;
}

export default configureStore;
