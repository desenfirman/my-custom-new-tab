
const FULL_NAME = "Dese";

var tools = [
    {
        "name": "GitHub",
        "url": "http://github.com",
        "icon": "",
        "isWWW": true
    },
    {
        "name": "phpMyAdmin",
        "url": "http://localhost/phpmyadmin",
        "icon": "",
        "isWWW": false
    },
    {
        "name": "DevDocs",
        "url": "https://devdocs.io",
        "icon": "",
        "isWWW": true
    },
    {
        "name": "StackOverflow",
        "url": "http://stackoverflow.com",
        "icon": "",
        "isWWW": true
    },

]

var distraction = [
    {
        "name": "Facebook",
        "url": "http://facebook.com",
        "icon": "",
        "isWWW": true
    },
    {
        "name": "Twitter",
        "url": "http://twitter.com",
        "icon": "",
        "isWWW": true
    },
    {
        "name": "Reddit",
        "url": "http://reddit.com",
        "icon": "",
        "isWWW": true
    }
]


var today = new Date();
var h = today.getHours();
var m;
var greet;
setWallpaper();

function setWallpaper()
{
    imagePrefix = "morning";
    if (h < 5){
        imagePrefix = "https://github.com/desenfirman/my-custom-new-tab/raw/host/wallpaper/evening.jpg";
    }
    else if (h < 15) {
        imagePrefix = "https://github.com/desenfirman/my-custom-new-tab/raw/host/wallpaper/noon.jpg";
    }
    else if (h < 20) {
        imagePrefix = "https://github.com/desenfirman/my-custom-new-tab/raw/host/wallpaper/afternoon.jpg";
    }
    else{
        imagePrefix = "https://github.com/desenfirman/my-custom-new-tab/raw/host/wallpaper/evening.jpg";
    }
    var body = document.body;
    body.style.background = 'url(' + '"' + './' + 'wallpaper/' + imagePrefix + '.jpg';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
}

function realTime() {
    setClock();
    greeter();
    sleepReminder();

    showLinks();

    if (!isOnline()) {
        document.getElementById("connection-check").innerHTML = "You're not connected to Internet";
    }
    else{
        document.getElementById("connection-check").innerHTML = "";
    }
    var t = setTimeout(realTime, 500);
}


function setClock() {
    h = today.getHours();
    m = today.getMinutes();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    document.getElementById("time").innerHTML = h + ":" + m;

}

function greeter() {
    if (h < 12) {
        greet = "good morning";
    }
    else if (h < 15) {
        greet = "have a good day";
    }
    else if (h < 18) {
        greet = "good afternoon";
    }
    else if (h < 20){
        greet = "good evening";
    }
    else{
        greet = "good night";
    }
    document.getElementById("greeter").innerHTML = "Hi " + FULL_NAME + ", " + greet;
}

function sleepReminder() {
    if (h >= 22 || h < 4) {
        document.getElementById("sleep-reminder").innerHTML = "For a better circadian rythm, you better to sleep now :)";
    }
}

function isOnline(){
    return window.navigator.onLine;
}

function showLinks() {
    var urls = "";
    tools.forEach(element => {
        var url = (!isOnline() && element.isWWW) ? "" : "href = '" + element.url + "'";
        urls += '<li ><a ' + url + '">' + element.name + '</a></li>';
    });

    document.querySelectorAll('#tools ul')[0].innerHTML = urls;

    var urls = "";
    distraction.forEach(element => {
        var url = (!isOnline() && element.isWWW) ? "" : "href = '" + element.url + "'";
        urls += '<li ><a ' + url + '">' + element.name + '</a></li>';
    });

    document.querySelectorAll('#distraction ul')[0].innerHTML = urls;
}

function trelloEmbed() {

}