
document.addEventListener("click",(e)=> {

    const div = document.createElement("div");
    div.style.width = "50px"
    div.style.height = "50px"
    div.style.top = `${e.y-25}px`;
    div.style.left = `${e.x-25}px`;
    div.style.background = getRandomColor();
    div.style.position = "absolute";
    div.style.borderRadius = `50%`;
    div.style.transition = "all 1s";
    document.body.appendChild(div);
    
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.width = "150px"
        div.style.height = "150px"
        div.style.top = `${e.y-75}px`;
        div.style.left = `${e.x-75}px`;
        setTimeout(()=>{
            div.remove();
        },1000);
    }, 1000);
});

function getRandomColor(){
    const clr = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

    let color = "#";

    for (let index = 0; index < 6; index++) {
        color += clr[Math.floor(Math.random()*clr.length)];
    }

    return color;
}