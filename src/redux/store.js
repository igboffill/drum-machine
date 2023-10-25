import { configureStore } from "@reduxjs/toolkit";
import { PRESSED, RELEASED } from "./actions";

const appReducer = (state={ pressedKeys:[], display:'' }, action)=>{
    switch(action.type){
        case PRESSED:
            let pk1 = [...state.pressedKeys];
            pk1.push(action.key.toUpperCase());
            return {...state, pressedKeys: pk1, display:action.name};
        case RELEASED:
            let pk2 = [...state.pressedKeys].filter(k=>k!==action.key.toUpperCase())
            return {...state, pressedKeys: pk2};
        default: 
            return state;
    }
};

export const store = configureStore({
    reducer: appReducer
});
