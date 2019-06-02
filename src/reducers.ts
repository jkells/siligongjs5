import { combineReducers } from "redux";
import { NEXT_SLIDE, PREVIOUS_SLIDE, Action, ADD_TODO } from "./actions";
import slides from "./slides";

const MAX_SLIDE = slides.length;

const slideNumber = (state = 0, action: Action) => {
    switch (action.type) {
        case NEXT_SLIDE:
            return (state + 1) % MAX_SLIDE;

        case PREVIOUS_SLIDE:
            if (state === 0) {
                return MAX_SLIDE - 1;
            }
            return state - 1;
    }
    return state;
};

const people = (state: Person[] = [], action: Action) => {
    if (action.type === ADD_TODO) {
        return [...state, action.person];
    }
    return state;
};

const rootReducer = combineReducers({
    slideNumber,
    people,
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
