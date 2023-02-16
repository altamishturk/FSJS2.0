
document.addEventListener("click",(e)=> {

    const div = document.createElement("div");
    div.style.width = "100px"
    div.style.height = "100px"
    div.style.background = getRandomColor();
    div.style.position = "absolute";
    div.style.top = `${e.y-50}px`;
    div.style.left = `${e.x-50}px`;
    div.style.borderRadius = `50%`;
    div.style.transition = "all 1s";
    document.body.appendChild(div);
    
    setTimeout(() => {
        div.style.opacity = 0;
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