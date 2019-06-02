// Object Oriented
class OOStyle {
    private static doIt() {
        return "foobar";
    }
    private prop = () => "meow";
    constructor() {}
}

// Modern JS style, lamdas, const, async, spread
const nextFetures = async () => {
    const x = [1, 2];
    let y = 2;
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [...x, y];
};
