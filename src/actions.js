export const NEXT_SLIDE = "NEXT_SLIDE";
export const PREVIOUS_SLIDE = "PREVIOUS_SLIDE";
export const ADD_TODO = "ADD_TODO";

export const nextSlide = () => ({
    type: NEXT_SLIDE,
});

export const previousSlide = () => ({
    type: PREVIOUS_SLIDE,
});

export const addPerson = (person) => ({
    person,
    type: ADD_TODO,
});
