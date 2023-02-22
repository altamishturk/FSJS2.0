# Solution

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

![output](./Output/DOM%20P1%20SS.png)