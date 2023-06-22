// This is how "redux-persist" library works in the store file of redux

import {createStore} from "react-redux"

import {persistStore, persistReducer} from "redux-persist"  // This library saves the states in the store in the local storage to get them back on refreshing the page and not return the states to its initial value
import storage from "redux-persist/lib/storage"  // This what accesses the local storage


const persistConfig = {
    key: "",   // the name of the reducer or the slice we want to persist as a string
    storage: storage,
    blacklist: [],  // this is array of strings of the reducers or the the slice names that we don't want to persist, in our case we should put in the array the slice of the (User) because onAuthChanged() method of firestore handles it in the same way, so if we used redux-persist also with (User) slice there may be conflicts and issues, if we will not use onAuthChangedMethod() to keep the user logged in on refreshing the page, then we will use (User) slice with "redux-persist" normally
}

const persistedReducer = persistReducer(persistConfig, _)  // The second argument should be the reducer that contains the whole reducers or slices

export const store = createStore(persistedReducer)

export const persistor = persistStore(store)