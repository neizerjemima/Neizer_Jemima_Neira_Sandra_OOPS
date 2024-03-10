class Mood {
  
    constructor(
        image,
        quote,
        bobaTitle,
        bobaContent
    ) {
        this.boba = image;
        this.quote = quote;
        this.bobaTitle = bobaTitle;
        this.bobaContent = bobaContent
    }

    boBa() {
        const div = document.createElement("div");

        const image = document.createElement("img");
        image.src = `images/${this.boba}`;
        image.alt = this.bobaTitle; 
        div.appendChild(image);

        const quote = document.createElement("p");
        quote.textContent = `Don't cry drink boba and have fun`;
        div.appendChild(quote);

        const heading = document.createElement("h3");
        heading.textContent = this.bobaTitle;
        div.appendChild(heading);

        const recipeSteps = this.bobaContent.split("."); //- This will split it just like we use in PushSubscription.
        const ul = document.createElement("ul");
        recipeSteps.forEach(step => {
            const li = document.createElement("li");
            li.textContent = step;
            ul.appendChild(li);
        });
        div.appendChild(ul);
        document.body.appendChild(div);
    }
}



export { Mood };
