import { State } from "./reducers";

export const selectSlide = (state: State) => state.slideNumber;
export const selectPeople = (state: State) => state.people;
