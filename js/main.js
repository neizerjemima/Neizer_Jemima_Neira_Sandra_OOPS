import { Mood } from "./boba.js";

const joy = new Mood(
    "brownsugar.png",
    "My Happy Place is inside my Boba Cup-Happy",
    "Taro",
    "Blend the cooked taro chunks, milk, and honey (or sugar) in a lender until smooth.Add ice cubes to a glass.Pour the taro milk mixture over the ice.Add cooked tapioca pearls (boba) into the glass.Stir gently and serve with a wide straw"
);

const sad = new Mood(
    "tarro.png",
    "You can't buy happiness BUT You can buy boba - Sad",
    "Mango",
    "Blend the passion fruit pulp, chilled brewed black tea, milk, and sweetener until smooth.Cook the tapioca pearls according to package instructions and let them cool.Fill a glass with ice cubes.Pour the passion fruit tea mixture over the ice.Add cooked tapioca pearls (boba) into the glass"
);

const angry = new Mood(
    "rose.png",
    "Keep Calm and Drink Boba tea-Angry",
    "Matcha",
    "Steep dried rose petals in hot water for 5-7 minutes to make rose tea. Strain and let it cool.Cook tapioca pearls according to package instructions and let them cool.Fill a glass with ice cubes.Pour rose tea and milk over the ice.Add cooked tapioca pearls (boba) into the glass"
);

const disgust = new Mood(
    "mango.png",
    "I run on Boba and Disgust - Digust",
    "Passion Fruit",
    "In a small saucepan, combine brown sugar and water. Heat over medium heat, stirring occasionally, until the sugar is completely dissolved to make brown sugar syrup.Let it cool.Cook tapioca pearls according to package instructions and let them cool.Fill a glass with ice cubes.Pour milk over the ice.Add cooked tapioca pearls(boba) into the glass"
);


const fear = new Mood(
    "matcha.png",
    "A Boba a Day keeps Fear Away - Fear",
    "Rose",
    "Dissolve matcha powder in hot water in a small bowl and let it cool to room temperature.Cook tapioca pearls according to package instructions and let them cool.Fill a glass with ice cubes.Pour cooled matcha mixture and milk over the ice.Add cooked tapioca pearls (boba) into the glass"
);

const allEmotions = new Mood(
    "passionfruit.png",
    "Can't Decide Fix it with BOBA -All",
    "Brown Sugar",
    "Blend the ripe mango chunks, mango juice, milk, and sweetener in a blender until smooth.Cook the tapioca pearls according to package instructions and let them cool.Add ice cubes to a glass.Pour the mango mixture over the ice.Add cooked tapioca pearls (boba) into the glass"
);

// console.log(joy);
joy.boBa();
sad.boBa();
disgust.boBa();
angry.boBa();
fear.boBa();
allEmotions.boBa();