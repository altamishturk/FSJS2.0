# Assignment 1

- change the background color of cards stats 

## Solution
```
const colors = ["#ec9b3b","#ee5487","#f6901a","#82bb30","#4facff"];
        const cardStats = document.querySelectorAll(".clash-card__unit-stats");
       
        [...cardStats].forEach((stat,index)=> {
            stat.style.backgroundColor = colors[index];

            const stats = stat.querySelectorAll(".one-third");
            [...stats].forEach((st,i) => {
                st.style.color = "white";
                if(i <= 1){
                    st.style.borderRight = ".5px solid rgb(206, 206, 206)"
                }
            })
        })
```

## Output

![output](https://res.cloudinary.com/dmf67qjzk/image/upload/v1677085958/FSJS2.0/assignments/dom/Capture_nprwks.png)