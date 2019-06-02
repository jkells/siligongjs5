// Typescript is Duck typed
interface Duck {
    colour: string;
    quack: () => string;
}

const monster = {
    quack: () => "Quack Quack",
    colour: "purple",
    horns: 9,
    warts: true,
};

// Example replace with inline type
const consoleDuck = (ducky: Duck) => {
    console.log("If it looks like a duck, it's a duck", ducky.quack());
};

consoleDuck(monster);

function onlyPurpleThings<T extends { colour: string }>(things: T[]): T[] {
    return things.filter(thing => thing.colour === "purple");
}
