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
        div.classList.add("bobaCon");
        div.classList.add("grid-con");

        const image = document.createElement("img");
        image.src = `images/${this.boba}`;
        image.alt = this.bobaTitle; 
        image.classList.add("bobaImg")
        div.appendChild(image);

        const quote = document.createElement("p");
        quote.textContent = `Don't cry drink boba and have fun`;
        quote.classList.add("bobaQuote")
        div.appendChild(quote);

        const heading = document.createElement("h3");
        heading.textContent = this.bobaTitle;
        heading.classList.add("bobaName")
        div.appendChild(heading);

        const recipeSteps = this.bobaContent.split("."); //- This will split it just like we use in Php.
        const ul = document.createElement("ul");
        ul.classList.add("bobaRecipe")
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
