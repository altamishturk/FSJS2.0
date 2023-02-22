# Assignment 2

- add new recipe card 

# Solution

```
 const recipeGallery = document.querySelector(".recipe-gallery");
        const card = document.createElement("div");
        card.classList.add("card");
        const recipeText = document.createElement("a");
        recipeText.classList.add("recipe-text");
        const img = document.createElement("img");
        img.src = "https://media.istockphoto.com/id/1150376652/photo/chicken-tikka-indian-food.jpg?s=612x612&w=0&k=20&c=lC-d6QLXD9egRifPxRrm2Px1W005gS1rfwIbF9wFjbQ="  
        img.classList.add("recipe-img");
        const recipeName = document.createElement("h5");
        recipeName.classList.add("recipe-name");
        recipeName.innerText = "Chicken tikka"
        const recipeDisp = document.createElement("p");
        recipeDisp.classList.add("recipe-disp");
        recipeDisp.innerText = "Pre: 15min | Cook: 30min"

        recipeText.appendChild(img);
        recipeText.appendChild(recipeName);
        recipeText.appendChild(recipeDisp);
        card.appendChild(recipeText);
        recipeGallery.appendChild(card);
```

## Output

![output](https://res.cloudinary.com/dmf67qjzk/image/upload/v1677086259/FSJS2.0/assignments/dom/assignment2_l2ppy6.png)