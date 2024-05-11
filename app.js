var hours = document . getElementById("hours")
var minutes = document . getElementById("minutes")
var seconds = document . getElementById("seconds")
var am = document.getElementById("am")
var date = document.getElementById("date")

setInterval(function(){
    var time = new Date()

   var currentHours = time.getHours()
   var currentMinutes = time.getMinutes()
   var currentSecond = time.getSeconds()
   date.innerHTML = time.toDateString().split(" ").join(" : ")


   if(currentHours >12){
    currentHours -= 12
   }
if(currentHours<13){
       am.innerHTML="pm"
}
    if (currentSecond <10){
        seconds.innerHTML="0"+currentSecond
    }else{seconds.innerHTML= currentSecond}

    if (currentMinutes<10){
        minutes.innerHTML="0"+currentMinutes
    }else{minutes.innerHTML= currentMinutes}

    if (currentHours<10){
        hours.innerHTML="0"+currentHours
    }
    else{hours.innerHTML= currentHours}
},1000,)

// var hours = document.getElementById("hours")
// var minutes = document.getElementById("minutes")
// var seconds = document.getElementById("seconds")

// setInterval(function(){
//     var time = new Date()

//    var currentHours = time.getHours()
//    var currentMinutes = time.getMinutes()
//    var currentSecond = time.getSeconds()

//    if(currentHours >12){
//     currentHours -= 12
//    }

//     if (currentSecond <10){
//         seconds.innerHTML="0"+currentSecond
//     }else{seconds.innerHTML= currentSecond}

//     if (currentMinutes<10){
//         minutes.innerHTML="0"+currentMinutes
//     }else{minutes.innerHTML= currentMinutes}

//     if (currentHours<10){
//         hours.innerHTML="0"+currentHours
//     }else{hours.innerHTML= currentHours}
// },1000)
