// Union types
function unionTypes(foo: number | string) {
    // Simple type guard
    if (typeof foo === "string") {
        // foo is a string here.
        return foo.toLowerCase();
    }

    // foo is a number here.
    return `${foo.toPrecision(5)}`;
}

// Intersection types
interface Person {
    name: string;
    jumpingHeight: number;
}

interface HasScooter {
    hasScooter: boolean;
}

function intersectionTypes(foo: Person & HasScooter) {
    console.log(foo.name, foo.hasScooter);
}
