# Solution 1

## first

```
        const isReloaded = localStorage.getItem("isReloaded");


      const langauges = document.querySelectorAll(".main__languages a");
      [...langauges].forEach((lang,i) => {
        if(i%2 !== 0 && !isReloaded){
          lang.remove();
        }
      })

      const input = document.querySelector(".main__form-input");
      const submitBtn = document.querySelector(".main__form-btn");
      input.disabled = false;
      submitBtn.disabled = false;
      submitBtn.addEventListener("click",()=> {
        localStorage.setItem("isReloaded",true);
        location.reload();
      })
```

## Output

### before submiting form 

![output](./ass7.1-after.png)


### after submiting form 

![output](./ass7.2-after.png)
