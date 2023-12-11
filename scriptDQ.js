//variables
    //buttons
let opt1 = document.getElementById("button1")
let opt2 = document.getElementById("button2")
let opt3 = document.getElementById("button3")
let opt4 = document.getElementById("button4")
let nextQ = document.getElementById("next")
let start = document.getElementById("strt")
        //not buttons, but pulling from html file still
let qText = document.getElementById("questionTxt")
//1
const qAndA = {
    "q1":{
        question:qText.innerHTML = `Question 1 <br> 
        Which of these songs is Scar's villain song?`,
        opt1:opt1.innerText = "Be Prepared",
        opt2:opt2.innerText = "Be Aware", 
        opt3:opt3.innerText = "Be a Bear", 
        opt4:opt4.innerText = "The Lion Sleeps Tonight"
    },
    "q2":{
        question:qText.innerHTML = `Question 2 <br> 
        Which of these people is not Mirabel's cousin?`,
        opt1:opt1.innerText = "Delores",
        opt2:opt2.innerText = "Isabelle",
        opt3:opt3.innerText = "Camillo", 
        opt4:opt4.innerText = "Antonio"
    },
    "q3":{
        question:qText.innerHTML = `Question 3 <br> 
        Disney's Villainous features many well known and loved villains from many different movies, 
        which of these villains is not featured in a villainous expansion yet?`,
        opt1:opt1.innerText = "Jafar",
        opt2:opt2.innerText = "Syndrome",
        opt3:opt3.innerText = "Frollo",
        opt4:opt4.innerText = "Horned King"
    },
    "q4":{
        question:qText.innerHTML = `Question 4 <br> 
        What is Disney's 2nd highest grossing movie?`,
        opt1:opt1.innerText = "Avengers: Endgame",
        opt2:opt2.innerText = "Frozen II",
        opt3:opt3.innerText = "Avengers: Infinity War",
        opt4:opt4.innerText = "Star Wars Ep. VII: The Force Awakens",
    },
    "q5":{
        question:qText.innerHTML = `Question 5 <br> 
        DCL's liners go to many different ports and is currently being leased an island what is the name of the island?`,
        opt1:opt1.innerText = "Pelican Point",
        opt2:opt2.innerText = "Castaway Cay",
        opt3:opt3.innerText = "Imagination Island", 
        opt4:opt4.innerText = "Glimmering Grotto"
    },
}

opt1.innerText = "1";
opt2.innerText = "2";
opt3.innerText = "3";
opt4.innerText = "4";
qText.innerHTML = `A 20 question trivia, all based around Disney <br>
Select Start`;

opt1.disabled = true;
opt2.disabled = true;
opt3.disabled = true;
opt4.disabled = true;
nextQ.disabled = true;
//2
function quiz(){
    //Removes the start Button and Enables The opt Buttons and nextQ Button
    start.remove();
    opt1.disabled = false;
    opt2.disabled = false;
    opt3.disabled = false;
    opt4.disabled = false;
    // nextQ.disabled = false;
    for(let questionKey in qAndA){
        //DON'T, OH MY GOODNESS PLEASE DON'T MAKE IT ALL USING IFs AND ELSEs
        // FOR BOTH MY SANITY (which isn't plentiful anyhow) AND SENIOR CORREA's

        if(qAndA.hasOwnProperty(questionKey)){
            //Find each question object using qAndA[questionKey];
            let currentQuestion = qAndA[questionKey];

            //Find properties of current q
            let questionText = currentQuestion.question;
            let option1 = currentQuestion.opt1;
            let option2 = currentQuestion.opt2;
            let option3 = currentQuestion.opt3;
            let option4 = currentQuestion.opt4

            qText.innerHTML = questionText;
            opt1.innerHTML = option1;
            opt2.innerHTML = option2;
            opt3.innerHTML = option3;
            opt4.innerHTML = option4;
        }
    }
}

start.addEventListener("click", quiz)

//1. object and variables
//2. function
//