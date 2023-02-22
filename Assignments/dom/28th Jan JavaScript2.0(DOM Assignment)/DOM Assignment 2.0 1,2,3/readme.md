# Solution 1

## first

```
        const navigation = document.querySelector("nav ul");
        const links = navigation.querySelectorAll("li");
        links[2].remove();
        
        ["Projects","Hire Me"].forEach(item => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = "#";
          a.innerText = item;
          li.appendChild(a);
          navigation.appendChild(li);
        })

        const socialLinksContainer = document.querySelector("footer ul");
        socialLinksContainer.style.visibility =  "hidden";
```

## Output

![output](./firstAssignmentImage/task1Output.png)


## second

```
        const navigation = document.querySelector("nav ul");
        const links = navigation.querySelectorAll("li");
        links[3].remove();
        const searchBox = document.querySelector(".search-field input");
        searchBox.placeholder = "Search My Project";    
```

## Output

![output](./firstAssignmentImage/task2Output.png)

## third

```
        const heroLeftSection = document.querySelector(".      hero-left-section");
        const spans = heroLeftSection.querySelectorAll("p span");
        
        spans[1].innerText = "an Employee";
        spans[2].innerText = "iNeuron Inteligence Pvt Ltd";

        const socialLinksContainer = document.querySelector("footer ul");
        socialLinksContainer.style.visibility =  "visible";      
```

## Output

![output](./firstAssignmentImage/task3Output.png)


## forth

```
  const heroLeftSection = document.querySelector(".hero-left-section");
        const spans = heroLeftSection.querySelectorAll("p span");
        
        spans[1].innerText = "a Freelancer";
        spans[2].innerText = "National and International Client";


        const heroImg = document.querySelector(".hero-right-section img");
        heroImg.src = "data:image/jpeg;base64,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";      
```

## Output

![output](./firstAssignmentImage/task4Output.png)

## fifth

```
        const heroImg = document.querySelector(".hero-right-section img");
        heroImg.src = "./avtar.png";

        const heroBtns = document.querySelector(".hero-right-section-btns");
        const button = document.createElement("button");
        button.innerText = "Support Me";
        heroBtns.appendChild(button);
```

## Output

![output](./firstAssignmentImage/task5Output.png)



# Solution 2

## first

```
         const navigation = document.querySelector("nav ul");
      const links = navigation.querySelectorAll("li");
      links[2].remove();
      
      ["Projects"].forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.innerText = item;
        li.appendChild(a);
        navigation.appendChild(li);
      })

      const accordianWrapper = document.querySelector(".accordian-wrapper");
      const accordiantitles = accordianWrapper.querySelectorAll("h3");
      [...accordiantitles].forEach((t,i) => {
        t.style.backgroundColor = "#FAE6FA";
        if(i === 2 || i === 3){
          t.click();
        }
      })
```

## Output

![output](./secondAssignmentImage/task1Output.png)

## second

```
      const accordianWrapper = document.querySelector(".accordian-wrapper");
      const accordiantitles = accordianWrapper.querySelectorAll("h3");
      [...accordiantitles].forEach((t,i) => {
        if(i === 2 || i === 3){
          t.click();
        }
      })

      const accordian = accordianWrapper.querySelector(".accordian");
      const copyedAccordian = accordian.cloneNode(true);
      copyedAccordian.querySelector("h3").innerText = "Skills";
      copyedAccordian.querySelector("p").innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github";
      accordianWrapper.appendChild(copyedAccordian);
      setTimeout(()=> {
        copyedAccordian.querySelector("h3").click(); 
      },[1000])
```

## Output

![output](./secondAssignmentImage/task2Output.png)

# Suolution 3

``` 
      const outputForm = document.querySelector(".mainLeft form");
      const outputName = outputForm.querySelector(".enterName");
      const outputEmail = outputForm.querySelector(".enterMail");
      const outputMessage = outputForm.querySelector(".enterMessage");
      const inputReset = outputForm.querySelector("button");
      

      const inputForm = document.querySelector(".mainRight form");
      const inputName = inputForm.querySelector(".userName");
      const inputEmail = inputForm.querySelector(".userEmail");
      const inputMessage = inputForm.querySelector(".userMessage");
      const inputSubmit = inputForm.querySelector("button");


      function submitInput(params) {
        outputName.value = inputName.value;
        outputEmail.value = inputEmail.value;
        outputMessage.value = inputMessage.value;
      }

      function reset(params) {
        outputName.value = "";
        outputEmail.value = "";
        outputMessage.value = "";
        inputName.value = "";
        inputEmail.value = "";
        inputMessage.value = "";
      }

      inputSubmit.addEventListener("click",()=> {
        submitInput();
      });

      inputReset.addEventListener("click",()=> {
        reset();
      });
```

![output](./thirdAssignmentImage/task1Output.png)