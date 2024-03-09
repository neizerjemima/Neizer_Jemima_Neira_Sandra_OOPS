import { mood } from "./boba.js";

const fenderStrat = new Guitar(
    "Fender",
    "My Happy Place is inside my Boba Cup-Happy",
    "Taro",
    "Humbucker"
);

const gretWhiteFalcon = new Guitar(
    "Gretsch",
    "You can't buy happiness BUT You can buy boba - Sad",
    "Mango",
    "Filter'Tron"
);

// const gretWhiteFalcon = new Guitar(
//     "Gretsch",
//     "Keep Calm and Drink Boba tea-Angry",
//     "Matcha",
//     "Filter'Tron"
// );

// const gretWhiteFalcon = new Guitar(
//     "Gretsch",
//     "I run on Boba and Disgust - Digust",
//     "Passion Fruit",
//     "Filter'Tron"
// );


// const gretWhiteFalcon = new Guitar(
//     "Gretsch",
//     "A Boba a Day keeps Fear Away - Fear",
//     "Rose",
//     "Filter'Tron"
// );

// const gretWhiteFalcon = new Guitar(
//     "Gretsch",
//     "Can't Decide Fix it with BOBA -All",
//     "Brown Sugar",
//     "Filter'Tron"
// );
console.log(fenderStrat);
fenderStrat.strum();

console.log(gretWhiteFalcon);
gretWhiteFalcon.strum();

const fenderPrecisionBass = new BassGuitar();

console.log(fenderPrecisionBass);
fenderPrecisionBass.SlapDaBass();
fenderPrecisionBass.strum();

const alesisKeytar = new Keytar(
    "Alesis",
    "Vortex",
    "Black",
    0,
    "None",
    "None",
    49
);
console.log(alesisKeytar);
alesisKeytar.strum();