
const FULL_NAME = "Dese N. Firmansyah";

var h, m;
var greet;

function realTime() {
    setClock();
    greeter();
    sleepReminder();



    document.getElementById("greeter").innerHTML = "Good " + greet + ", " + FULL_NAME;
    document.getElementById("time").innerHTML = h + ":" + m;
    var t = setTimeout(realTime, 500);
}


function setClock(){
    var today = new Date();
    h = today.getHours();
    m = today.getMinutes();

    h = (h < 10) ? "0" + h : h; 
    m = (m < 10) ? "0" + m : m;

}

function greeter()
{
    if (h < 12)
    {
        greet = "Morning";
    }
    else if (h < 15)
    {
        greet = "Noon";
    }
    else if (h < 18)
    {
        greet = "Afternoon";
    }
    else
    {
        greet = "Evening";
    }
    return greet;
}

function sleepReminder() 
{
    if (h > 22 || h < 4)
    {
        document.getElementById("sleep-reminder").innerHTML = "For a better circadian rythm, you better to sleep now :)";
    }    
}