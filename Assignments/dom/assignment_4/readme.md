# Assignment 4

## task 1 
- remove contact navigation link
- add add projects and Hire Me navigation links
- hide social links

# Solution

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

![output](https://res.cloudinary.com/dmf67qjzk/image/upload/v1677087736/FSJS2.0/assignments/dom/assignment4task1_eikok6.png)


## task 2

- remove contact navigation link
- change search box placeholder
- add add projects navigation link
- hide social links

# Solution

```
        const navigation = document.querySelector("nav ul");
        const links = navigation.querySelectorAll("li");
        links[2].remove();
        const searchBox = document.querySelector(".search-field input");
        searchBox.placeholder = "Search My Project";
        ["Projects"].forEach(item => {
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

![output](https://res.cloudinary.com/dmf67qjzk/image/upload/v1677087771/FSJS2.0/assignments/dom/assignment4task2_vnwpqg.png)

## task 3

- remove contact navigation link
- add add projects navigation link
- change hero text

# Solution

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


        const heroLeftSection = document.querySelector(".hero-left-section");
        const spans = heroLeftSection.querySelectorAll("p span");
        
        spans[1].innerText = "an Employee";
        spans[2].innerText = "iNeuron Inteligence Pvt Ltd";      
```

## Output

![output](https://res.cloudinary.com/dmf67qjzk/image/upload/v1677087801/FSJS2.0/assignments/dom/assignment4task3_pwzal7.png)


## task 4

- remove contact navigation link
- add add projects navigation link
- change hero image

# Solution

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

     
        const heroImg = document.querySelector(".hero-right-section img");
        heroImg.src = "img url"     
```

## Output

![output](https://res.cloudinary.com/dmf67qjzk/image/upload/v1677087823/FSJS2.0/assignments/dom/assignment4task4_efegl4.png)

## task 5

- remove contact navigation link
- add add projects navigation link
- create Support Me button beside chat with me

# Solution

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

     

        const heroBtns = document.querySelector(".hero-right-section-btns");
        const button = document.createElement("button");
        button.innerText = "Support Me";
        heroBtns.appendChild(button);
```

## Output

![output](https://res.cloudinary.com/dmf67qjzk/image/upload/v1677087853/FSJS2.0/assignments/dom/assignment4task5_fkwv0n.png)



## task 6

- remove contact navigation link
- add add projects navigation link
- change background color of accordian 
- open 3 and 4 accordian

# Solution

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

![output](https://res.cloudinary.com/dmf67qjzk/image/upload/v1677088298/FSJS2.0/assignments/dom/assignment4task6_m87b6b.png)

## task 7


- remove contact navigation link
- add add projects navigation link
- create new accordian of skills and open it 

# Solution

```
      const accordianWrapper = document.querySelector(".accordian-wrapper");
      const accordiantitles = accordianWrapper.querySelectorAll("h3");
      [...accordiantitles].forEach((t,i) => {
        t.style.backgroundColor = "#FAE6FA";
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

![output](https://res.cloudinary.com/dmf67qjzk/image/upload/v1677088331/FSJS2.0/assignments/dom/assignment4task7_mpcx4m.png)

# task 8


- insert user inpupt board data to user output board data when click on submit 
- reset user inpupt board and user output board when click on reset button  

# Solution

``` 
      //  output elements 
      const outputForm = document.querySelector(".mainLeft form");
      const outputName = outputForm.querySelector(".enterName");
      const outputEmail = outputForm.querySelector(".enterMail");
      const outputMessage = outputForm.querySelector(".enterMessage");
      const inputReset = outputForm.querySelector("button");
      

      //  input elements 
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

      inputSubmit.addEventListener("click",(e)=> {
        e.preventDefault()
        submitInput();
      });

      inputReset.addEventListener("click",()=> {
        reset();
      });
```

![output](https://res.cloudinary.com/dmf67qjzk/image/upload/v1677088545/FSJS2.0/assignments/dom/assignment4task8_jcihdo.png)