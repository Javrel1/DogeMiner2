import React from "react";
import {createStore} from "redux";

const counter = (state = 0, action) =>{
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'INCREMENT_2':
            return state + 2
        case 'DECREMENT_1':
            return state - 20;
        case 'DECREMENT_2':
            return state - 926;
        case 'DECREMENT_3':
            return state - 6333;
        case 'DECREMENT_4':
            return state - 100568;
        case 'UPGRADE_DECREMENT_1':
            return state - 3000000;
        case 'UPGRADE_DECREMENT_2':
            return state - 4000000;
    }
}
export const store = createStore(counter);
export const increment = {type: "INCREMENT"};

export const decrement_1 = {type: "DECREMENT_1"};
export const decrement_2 = {type: "DECREMENT_2"};
export const decrement_3 = {type: "DECREMENT_3"};
export const decrement_4 = {type: "DECREMENT_4"};
export const UpgradeDecrement2 = {type: 'UPGRADE_DECREMENT_2'};
export const UpgradeDecrement3 = {type: 'UPGRADE_DECREMENT_3'};
export const Inc_2 = {type: 'INCREMENT_2'};