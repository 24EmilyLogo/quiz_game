//1
const answers = {
    "q1":{
        correct:"opt1",
        incorrect:["opt2", "opt3", "opt4"]
    },
    "q2":{
        correct:"opt2",
        incorrect:["opt1, opt3, opt4"]
    },
    "q3":{
        correct:"opt3",
        incorrect:["opt1, opt2, opt4"]
    },
    "q4":{
        correct:"opt4",
        incorrect:["opt1, opt2, opt3"]
    },
    "q5":{
        correct:"opt2",
        incorrect:["opt1, opt3, opt4"]
    },
        "q1":{
        correct:"opt1",
        incorrect:["opt2", "opt3", "opt4"]
    },
    "q2":{
        correct:"opt2",
        incorrect:["opt1, opt3, opt4"]
    },
    "q3":{
        correct:"opt3",
        incorrect:["opt1, opt2, opt4"]
    },
    "q4":{
        correct:"opt4",
        incorrect:["opt1, opt2, opt3"]
    },
    "q5":{
        correct:"opt2",
        incorrect:["opt1, opt3, opt4"]
    },
}
//variables
    //buttons
let opt1 = document.getElementById("button1")
let opt2 = document.getElementById("button2")
let opt3 = document.getElementById("button3")
let opt4 = document.getElementById("button4")
let nextQ = document.getElementById("next")
let start = document.getElementById("strt")
    //not buttons
let qText = document.getElementById("questionTxt")

opt1.disabled = true;
opt2.disabled = true;
opt3.disabled = true;
opt4.disabled = true;
nextQ.disabled = true;
//2
function quiz(){
    start.remove();
    opt1.disabled = false;
    opt2.disabled = false;
    opt3.disabled = false;
    opt4.disabled = false;
    nextQ.disabled = false;
    qText.innerHTML = `Question 1 <br> Which of these songs is Scar's villain song?`
}

start.addEventListener("click", quiz)

//1. object and variables
//2. function
//