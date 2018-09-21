
const FULL_NAME = "Dese N. Firmansyah";

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


var h, m;
var greet;

onlyOnce();

function onlyOnce()
{
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
    document.getElementById("greeter").innerHTML = "Good " + greet + ", " + FULL_NAME;
    document.getElementById("time").innerHTML = h + ":" + m;
    var t = setTimeout(realTime, 500);
}


function setClock() {
    var today = new Date();
    h = today.getHours();
    m = today.getMinutes();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

}

function greeter() {
    if (h < 12) {
        greet = "Morning";
    }
    else if (h < 15) {
        greet = "Noon";
    }
    else if (h < 18) {
        greet = "Afternoon";
    }
    else {
        greet = "Evening";
    }
    return greet;
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
    var dom = "<ul>";
    tools.forEach(element => {
        var url = (!isOnline() && element.isWWW) ? "" : "href = '" + element.url + "'";
        dom += '<li ><a ' + url + '">' + element.name + '</a></li>';
    });
    dom += "</ul>";

    document.getElementById('tools').innerHTML = dom;

}

function trelloEmbed() {

}