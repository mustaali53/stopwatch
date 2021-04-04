var min = 0;
var sec = 0;
var msec = 0;

var minHead = document.getElementById("min")
var secHead = document.getElementById("sec")
var msecHead = document.getElementById("msec")
var btn = document.getElementById("start")

var interval;

function timer(){
     msec ++
     msecHead.innerHTML = msec
     if(msec >= 100){
         sec ++
         secHead.innerHTML = sec
         msec = 0
     }
     else if(sec >= 60){
         min++
         minHead.innerHTML = min
         sec = 0
     }
}

 

function start(){
     interval = setInterval(timer, 10)
     
     btn.setAttribute("disabled", "disabled")
    
}

function stop(){
    clearInterval(interval)
    btn.removeAttribute("disabled", "disabled")
}

function reset(){
    minHead.innerHTML= 0
    secHead.innerHTML = 0
    msecHead.innerHTML = 0
    stop()
    btn.removeAttribute("disabled", "disabled")
    
}