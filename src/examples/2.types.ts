// Basic introduction examples of what errors these can detect

// Basic type annotations
let a: number = 5;
a = 6;

let b: string = "Hello Siligong";
b.toLowerCase();

// Arrays
let c: number[] = [1, 2, 3];

// Tuples
let d: [number, string] = [1, "foo"];
let e: number;
let f: string;
[e, f] = d;
d[0].toPrecision(5);
d[1].toLowerCase();

// Objects
interface Jumper {
    name: string;
    jumpingHeight: number;
}

const person: Jumper = {
    name: "Jared Kells",
    jumpingHeight: 45,
};

// Any the escape hatch
let g: any = 1;
g = "foobar";
