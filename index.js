// current time...........
// Current time ================================================== 
function currentTime() { 
        let date = new Date();  
        let hh = date.getHours(); 
        let mm = date.getMinutes(); 
        let ss = date.getSeconds(); 
        let session = "AM"; 
       
        if(hh === 0){ 
            hh = 12; 
        } 
        if(hh > 12){ 
            hh = hh - 12; 
            session = "PM"; 
        } 
       
        hh = (hh < 10) ? "0" + hh : hh; 
        mm = (mm < 10) ? "0" + mm : mm; 
        ss = (ss < 10) ? "0" + ss : ss; 
           
        let time = hh + ":" + mm + ":" + ss + " " + session; 
        
        let t = setTimeout(function(){ currentTime() }, 1000); 
     
        document.getElementById("hours").innerText = hh; 
        document.getElementById("mins").innerText = mm; 
        document.getElementById("secs").innerText = ss; 
        document.getElementById("am_pm").innerText = session; 
      } 
    currentTime(); 
    // ----------------------------- 
     
     
    //Getting selected times ========================================== 
    function alarmTimings() { 
        document.getElementById("fetchWakeUpTime").innerText = document.getElementById("wakeUpTime").value; 
        document.getElementById("fetchLunchTime").innerText = document.getElementById("lunchTime").value; 
        document.getElementById("fetchNapTime").innerText = document.getElementById("napTime").value; 
        document.getElementById("fetchNightTime").innerText = document.getElementById("nightTime").value; 
     
     
     
        //left Part Message according to time ========================================== 
     
        // let hh = document.getElementById("hours").innerText; 
        let session = document.getElementById("am_pm").innerText; 
        let hh = parseInt(document.getElementById("hours").innerText); 
        // console.log(hh); 
        // console.log(session); 
        let time = hh + " " + session + " - " + (hh + 1) + " " + session; 
        // console.log(time); 
        let wakeUpTime = document.getElementById("wakeUpTime").value; 
        let lunchTime = document.getElementById("lunchTime").value; 
        let napTime = document.getElementById("napTime").value; 
        let nightTime = document.getElementById("nightTime").value; 
     
     
     
     
        if (time == wakeUpTime) { 
            document.getElementById("messageTextLeft").innerText = "GOOD MORNING!! WAKE UP !!"; 
        } else if (time == lunchTime) { 
            document.getElementById("messageTextLeft").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP"; 
        } else if (time == napTime) { 
            document.getElementById("messageTextLeft").innerText = "GOOD EVENING !!"; 
        } else if (time == nightTime) { 
            document.getElementById("messageTextLeft").innerText = "GOOD NIGHT !!"; 
        } else { 
            document.getElementById("messageTextLeft").innerText = "You are running late!!"; 
        } 
     
     
     
        //right Part Message according to time ========================================== 
     
        if (time == wakeUpTime) { 
            document.getElementById("messageTextRight").innerText = "GRAB SOME HEALTHY BREAKFAST!!!"; 
        } else if (time == lunchTime) { 
            document.getElementById("messageTextRight").innerText = "LET'S HAVE SOME LUNCH !!"; 
        } else if (time == napTime) { 
            document.getElementById("messageTextRight").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"; 
        } else if (time == nightTime) { 
            document.getElementById("messageTextRight").innerText = "CLOSE YOUR EYES AND GO TO SLEEP"; 
        } else { 
            document.getElementById("messageTextRight").innerText = "You are running late!!"; 
        } 
     
        // Changing Image according to time =============================================== 
     
        if (time == wakeUpTime) { 
            document.getElementById("leftImagePart").src = "images/Component 30 –1.svg"; 
        } else if (time == lunchTime) { 
            document.getElementById("leftImagePart").src = "images/Component 31 –1.svg"; 
        } else if (time == napTime) { 
            document.getElementById("leftImagePart").src = "images/lunch_image.png"; 
        } else if (time == nightTime) { 
            document.getElementById("leftImagePart").src = "images/Component 32 –1.svg"; 
        } else { 
            document.getElementById("leftImagePart").src = "images/Component 30 –1.svg"; 
        } 
     
     
    }