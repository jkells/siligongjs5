import { sum, groupBy, mapValues } from "lodash";

const getPeople = () => {
    return [{
        name: "Jared Kells",
        hasScooter: true,
        jumpingHeight: 45,
    }, {
        name: "Robert O'Farrell",
        hasScooter: false,
        jumpingHeight: 33,
    }, {
        name: "Satvik Sharma",
        hasScooter: false,
        jumpingHeight: 50,
    }];
};

// 1. Example groupByScooter,
// 2. totalHeightByHasScooter














// Cheat sheet
// const groupedByScooter = groupBy(getPeople(), p => p.hasScooter);
// const totalHeightByHasScooter = mapValues(groupedByScooter, people => sum(people.map(p => p.jumpingHeight)));
// console.log(totalHeightByHasScooter);
