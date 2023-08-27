// 程式碼寫這裡
const timer = document.querySelector(".timer")
let defaultsecond = 100
let toToalsceond = 0
let running = false
let pause = false
let timerID
function UpdateTimer (seconds){
    let mins = String(Math.floor(seconds /60)).padStart(2,"0") 
    let secs = String(seconds % 60).padStart(2 ,"0")

    timer.textContent = `${mins} : ${secs}`
    if (seconds === 0){
        timer.classList.add("times-up")
    }else {
        timer.classList.remove("times-up")
    }

}

function timesup () {
    UpdateTimer(0)
    running = false
    clearInterval(timerID)
    playSound()
}

function playSound (){
    const sound = new Audio("sounds/news.mp3")
    sound.play()
}

function setTimer (){
    running = true 
    toToalsceond = defaultsecond
    UpdateTimer(toToalsceond)
    setupTimer()
    
}

function setupTimer (){
    timerID = setInterval(() =>{
        if ( toToalsceond > 1){
         toToalsceond --
        UpdateTimer (toToalsceond)
        }else {
        timesup ()
        }      
    } ,1000)
}
function pauseTimer (){
    pause = true
    clearInterval(timerID)
}


function resumeTimer (){
    pause = false

    setupTimer()
}

document.addEventListener("keyup" , (e) =>{

    switch (e.key){
        case"Enter":
        if ( !running ){
            setTimer()
        }
            break
        case" ":
        if(running){
            if(pause) {
                resumeTimer
            } else{
                pauseTimer
            }
           
        }
            break

    }
})

