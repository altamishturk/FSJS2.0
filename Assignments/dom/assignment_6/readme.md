# Assignment 6


- Remove the languages that have 2.0 in their name(Every alternative language)
- Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

# Solution
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




