window.onload = () => {

    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    let int = null;

    let hour = document.getElementById('hours');
    let minute = document.getElementById('minutes');
    let second = document.getElementById('seconds');
    let millisecond = document.getElementById('milliseconds');

    function startStopwatch() {


        milliseconds++;
        if (milliseconds < 10) {
            millisecond.innerHTML = "0" + milliseconds;
        } else {
            millisecond.innerHTML = milliseconds;
        }

        if(seconds < 10) {
            second.innerHTML = "0" + seconds;           
        } else {
            second.innerHTML = seconds;
        }

        if(minutes < 10) {
            minute.innerHTML = "0" + minutes;           
        } else {
            minute.innerHTML = minutes;
        }

        if(hours < 10) {
            hour.innerHTML = "0" + hours;
        } else {
            hour.innerHTML = hours;
        }

        if (milliseconds == 100) {  
            milliseconds = 0;
            seconds++;
            if(seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0; 
                    hours++;                  
                }
            }    
        }
    }

    document.getElementById('button1').addEventListener('click', ()=>{
        
        if (int !== null) {
            clearInterval(int);
        }
        int = setInterval(startStopwatch, 10);
    });

    document.getElementById('button2').addEventListener('click', ()=>{
        clearInterval(int);
    })

    document.getElementById('button3').addEventListener('click', ()=>{
        clearInterval(int);
        hours = 0;
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        hour.innerHTML = "00"
        minute.innerHTML = "00"
        second.innerHTML = "00"
        millisecond.innerHTML = "00"
    })

} 
