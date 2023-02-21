secondAssignmenTask1();
secondAssignmenTask2();

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


function secondAssignmenTask1(){
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
}



function secondAssignmenTask2(){
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
}

