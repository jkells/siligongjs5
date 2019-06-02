export const NEXT_SLIDE = "NEXT_SLIDE";
export const PREVIOUS_SLIDE = "PREVIOUS_SLIDE";
export const ADD_TODO = "ADD_TODO";

export const nextSlide = () =>
    ({
        type: NEXT_SLIDE,
    } as const);

export const previousSlide = () =>
    ({
        type: PREVIOUS_SLIDE,
    } as const);

interface Person {
    jumpingHeight: number;
    name: string;
}

export const addPerson = (person: Person) =>
    ({
        person,
        type: ADD_TODO,
    } as const);

export type Action =
    | ReturnType<typeof nextSlide>
    | ReturnType<typeof previousSlide>
    | ReturnType<typeof addPerson>;
