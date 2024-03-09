class Mood {
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
        this.bobaContent = bobaContent
    }
    // Add methods like normal functions:
    boBa() {
        const div = document.createElement("div");

        const image = document.createElement("img");
        image.src = `images/${this.boba}`;
        image.alt = this.bobaTitle; 
        div.appendChild(image);

        const quote = document.createElement("p");
        quote.textContent = `Don't cry drink boba and have fun`;
        div.appendChild(quote);

        const recipeSteps = this.bobaContent.split(",");
        const ul = document.createElement("ul");
        recipeSteps.forEach(step => {
            const li = document.createElement("li");
            ul.appendChild(li);
        });
        div.appendChild(ul);
        document.body.appendChild(div);
    }
}



export { Mood };
