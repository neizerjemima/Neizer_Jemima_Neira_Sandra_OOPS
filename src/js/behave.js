import { Mood } from "./boba.js";

export function behave() {
    console.log(`Behaving`);

const joy = new Mood(
    "mango.png",
    "My Happy Place is inside my Boba Cup - Happy",
    "MANGO",
    "Blend the ripe mango chunks, mango juice, milk, and sweetener in a blender until smooth.Cook the tapioca pearls according to package instructions and let them cool.Add ice cubes to a glass .Pour the mango mixture over the ice.Add cooked tapioca pearls (boba) into the glass"
);

const sad = new Mood(
    "brownsugar.png",
    "You can't buy happiness BUT You can buy boba - Sad",
    "BROWN SUGAR",
    "In a small saucepan, combine brown sugar and water.Stir occasionally over medium heat until the sugar is completely dissolved to make a syrup.Cook tapioca pearls according to package instructions and let them cool.Fill a glass with ice cubes and pour milk over the ice.Add cooked tapioca pearls(boba) into the glass"
);

const angry = new Mood(
    "passionfruit.png",
    "Keep Calm and Drink Boba tea - Angry",
    "PASSION FRUIT",
    "Blend the passion fruit pulp, chilled brewed black tea, milk, and sweetener until smooth.Cook the tapioca pearls according to package instructions and let them cool.Fill a glass with ice cubes.Pour the passion fruit tea mixture over the ice.Add cooked tapioca pearls (boba) into the glass"
);

const disgust = new Mood(
    "matcha.png",
    "I run on Boba and Disgust - Digust",
    "MATCHA",
    "Dissolve matcha powder in hot water in a small bowl and let it cool to room temperature.Cook tapioca pearls according to package instructions and let them cool.Fill a glass with ice cubes.Pour cooled matcha mixture and milk over the ice.Add cooked tapioca pearls (boba) into the glass"
);


const fear = new Mood(
    "tarro.png",
    "A Boba a Day keeps Fear Away - Fear",
    "TARO",
    "Blend the cooked taro chunks, milk, and honey (or sugar) in a lender until smooth.Add ice cubes to a glass.Pour the taro milk mixture over the ice.Add cooked tapioca pearls (boba) into the glass.Stir gently and serve with a wide straw"
);

const allEmotions = new Mood(
    "rose.png",
    "Can't Decide Fix it with BOBA - All",
    "ROSE",
    "Steep dried rose petals in hot water for 5-7 minutes to make rose tea.Strain and let it cool.Cook tapioca pearls according to package instructions and let them cool.Fill a glass with ice cubes,pour rose tea and milk over the ice.Add cooked tapioca pearls (boba) into the glass"
);

return { joy, sad, angry, disgust, fear, allEmotions };

}