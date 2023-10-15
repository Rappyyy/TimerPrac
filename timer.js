

if(localStorage.getItem("count_timer")){
    var count_timer = localStorage.getItem("count_timer");
} else {
    var count_timer = 60*0.2;
}

var hours = parseInt(count_timer/120);
var minutes = parseInt(count_timer/60);
var seconds = parseInt(count_timer%60);
function countDownTimer(){
    if(seconds < 10){
        seconds= "0"+ seconds ;
    }if(minutes < 10){
        minutes= "0"+ minutes ;
    }if (hours < 10) {
        hours = "0"+hours;
    }
    
    document.getElementById("total-time-left").innerHTML = "Time Left : "+ " Hours "+hours+ +minutes+" Minutes "+seconds+" Seconds";
    if(count_timer <= 36000){
         localStorage.clear("count_timer");
    } else {
        count_timer = count_timer -1 ;
        minutes = parseInt(count_timer/60);
        seconds = parseInt(count_timer%60);
        localStorage.setItem("count_timer",count_timer);
        setTimeout("countDownTimer()",1000);
    }
}

setTimeout("countDownTimer()",1000);
