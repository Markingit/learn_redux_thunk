import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'; 
//redux-saga
// import createSagaMiddleware from 'redux-saga'
// import todoSagas from './sagas' 
import reducer from './reducer'


// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


// const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
// );
//redux-saga
// const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    // enhancer
    applyMiddleware(thunk)
    //redux-saga
    // applyMiddleware(sagaMiddleware)
);
//redux-saga
// sagaMiddleware.run(todoSagas)

export default store
