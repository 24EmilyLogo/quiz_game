//1
const qAndA = {
    "q1":{
        question:"",
        opt1:"Be Prepared",
        opt2:"Be Aware", 
        opt3:"Be a Bear", 
        opt4:"The Lion Sleeps Tonight"
    },
    "q2":{
        opt1:"Delores",
        opt2:"Isabelle",
        opt3:"Camillo", 
        opt4:"Antonio"
    },
    "q3":{
        opt1:"Jafar",
        opt2:"Syndrome",
        opt3:"Frollo",
        opt4:"Horned King"
    },
    "q4":{
        opt1:"Avengers: Endgame",
        opt2:"Frozen II",
        opt3:"Avengers: Infinity War",
        opt4:"Star Wars Ep. VII: The Force Awakens",
    },
    "q5":{
        opt1:"Pelican Point",
        opt2:"Castaway Cay",
        opt3:"Imagination Island", 
        opt4:"Glimmering Grotto"
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