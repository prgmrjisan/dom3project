// alert("hello");
let timecountDown;
let timercountDownvar;
let isRunning = false; //must be use let variable; because use const count-down number problem.
const timeshowDisplay = document.getElementById('timer');
const startbutton = document.getElementById('starttBtn');
const stopbutton = document.getElementById('stopBtn');

const startTimer = (duration) => {
    // alert("hello");
    let timers = duration; // duration a alada akta variable rakbo.
    // const timercountDownvar = setInterval(() => {//body}); global variable diclier korte hobe
    timercountDownvar = setInterval(() => {
            // alert('hello jisan'); //test time
            // console.log('hello jisan'); //test time 
            const gMinute = parseInt(timers / 60, 10);
            const gSecond = parseInt(timers % 60 , 10);

            const gMinuteshow = gMinute < 10 ? "0"+ gMinute : gMinute;
            const gSecondshow = gSecond < 10 ? "0" + gSecond : gSecond;
            timeshowDisplay.textContent = gMinuteshow + " : " + gSecondshow;
            
            if(--timers < 0){
                clearInterval(timercountDownvar);
                timeshowDisplay.textContent = 'Breath Out';

                setTimeout(() => {
                    timeshowDisplay.textContent = "Breath in"
                    startTimer(timecountDown); // 3 second por jeno abar shoto hoye jai tai condition dawa
                }, 3000);
                // setTimeOut(() => {
                //     timeshowDisplay.innerText = 'Breath In';
                //     startTimer(timecountDown);
                // },3000);
            }

        },1000);
}

const stopcountDownVar = () => {
    clearInterval(timercountDownvar);
    timeshowDisplay.textContent = "re-start";
    isRunning = flase;
    
}
//startButton add event call
startbutton.addEventListener('click', () => {
 
    //=> !isRunning >meaning false jodi na hoi
    //=> isRunning >meaning false jodi hoi

    if(!isRunning){
           // console.log('clicked');
        timecountDown = 10;
        startTimer(timecountDown); //call startTime function +> shorashori funtione man dibo na variable diclier kore clean way te patabo. okey.
        isRunning = true; // isRunning is true

    }
});
stopbutton.addEventListener('click', () =>{
    // alert('clicked');
    stopcountDownVar();
    isRunning = flase;
});
