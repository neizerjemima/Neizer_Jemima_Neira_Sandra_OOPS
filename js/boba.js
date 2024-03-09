class mood {
    //start a class with capital letter for best practice
    constructor(
        //Define paramaters
        image,
        quote,
        bobaTitle,
        bobaContent
    ) {
        //Define properties
        this.boba = image;
        this.quote = quote;
        this.bobaTitle = bobaTitle;
        this.bobaTitle = bobaContent
    }
    // Add methods like normal functions:
    mood() {
        const div = document.createElement("div");

        const image = document.createElement("img");
        image.src = boba.image;
          image.sizes = boba.imageSize;
          image.alt = boba.name;
        div.appendChild(image);

        const quote = document.createElement("p");
        quote.textContent = `Don't cry drink boba and have fun`;
        div.appendChild(quote);

        const Recipe = document.createElement("p");
        Recipe.textContent = `${this.bobaTitle} <br> ${this.content}`;
        div.body.appendChild(Recipe);
    }
}

//creating a one off guitar class

// class BassGuitar extends Guitar {
//     constructor() {
//         super(
//             "Fender",
//             "Jazzmaster",
//             "Black",
//             4,
//             "Precision Bass Pickup",
//             "Precision Bass Pickup"

//         )
//     }
//     SlapDaBass() {
//         let p = document.createElement("p");
//         p.textContent = `Slappin this ${this.brand} ${this.model}`;
//         document.body.appendChild(p);
//     }
// }

// class Keytar extends Guitar {
//     constructor(
//         brand,
//         model,
//         color,
//         strings,
//         pickupsNeck,
//         pickupsBridge,
//         keys    
//     ) {
//         super(brand, model, color, strings, pickupsNeck, pickupsBridge);
//         this.keys = keys;
//     }
//     slide() {
//         let p = document.createElement("p");
//         p.textContent = `Sliding my finders across ${this.keys}`;
//         document.body.appendChild(p);
//     }
// }

export { mood };
