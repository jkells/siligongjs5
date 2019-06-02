// Type inference magic
const getPeople = () => {
    return [{
        name: "Jared Kells",
        jumpingHeight: 45,
    }, {
        name: "Robert O'Farrell",
        jumpingHeight: 33,
    }];
}

const CM_TO_FEET = 1 / 30.48;

const cmToFeet = (height) => {
    return height * CM_TO_FEET;
}

// 1. Example find me with feet.
// 2. Reduce for max.
















// Cheat Sheet
const me = getPeople().find(x=>x.name.startsWith("Jared"));

const meInFeet = {
    ...me,
    inFeet: cmToFeet(me.jumpingHeight)
};

const maxHeight = getPeople().reduce((acc, person) => Math.max(acc, person.jumpingHeight), 0);

