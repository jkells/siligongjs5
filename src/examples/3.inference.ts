// Type inference magic
const getPeople = () => {
    return [
        {
            name: "Jared Kells",
            jumpingHeight: 45,
        },
        {
            name: "Robert O'Farrell",
            jumpingHeight: 33,
        },
    ];
};

const CM_TO_FEET = 1 / 30.48;

// We need to type params
const cmToFeet = height => {
    return height * CM_TO_FEET;
};

const me = getPeople().find(x => x.name.startsWith("Jared"));
// me could be undefined!
if (me) {
    const meInFeet = {
        ...me,
        inFeet: cmToFeet(me.jumpingHeight),
    };
    console.log(meInFeet);
}

// Can't make a typo!
const maxHeight = getPeople().reduce(
    (acc, person) => Math.max(acc, person.jumpingHeight),
    0
);
