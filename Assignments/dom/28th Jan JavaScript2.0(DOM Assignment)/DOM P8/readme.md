# Solution 1

## first

```
       const aside = document.querySelector(".new");
        aside.style.overflowY = "scroll"
        const asideps = aside.querySelectorAll("p");
        asideps.forEach(asidep => {
          asidep.style.marginBottom = "50px"
        });
```

## Output

![output](./ass8.1-after.png)

## second

```
       document.body.style.background = "none";
```

## Output

![output](./ass8.2-after.png)

## third

```
        const navBar = document.querySelector("#navbarTogglerDemo01");
        const toggleBtn = document.querySelector(".navbar-toggler");
        toggleBtn.click();
        navBar.style.display = "block";
```

## Output

![output](./ass8.3-after.png)