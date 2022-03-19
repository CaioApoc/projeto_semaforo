const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
const stopLight = document.getElementById("stop");
let colorIndex = 0;
let interval_id = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0 ;

const changeColor = () =>{
    const colors=["red","yellow","green"];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () =>{      /* stop para poder parar o evento interval */
    clearInterval(interval_id);  
}

const turnOn = {
    "red":    () => img.src = "./assets/vermelho.png",
    "yellow": () => img.src = "./assets/amarelo.png",
    "green":  () => img.src = "./assets/verde.png",
    "automatic": () => interval_id = setInterval(changeColor , 800),
}

function stopAll(){
    img.src ="./assets/desligado.png";
    stopAutomatic();
}

buttons.addEventListener("click" , trafficLight);

stopLight.addEventListener("click", stopAll);