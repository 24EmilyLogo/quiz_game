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
let points = 0;
//looks at current question index
let currentQindex = 0;
//1
const qAndA = {
    "q1":{
        question:`Question 1 <br> 
        Which of these songs is Scar's villain song?`,
        opt1:"Be Prepared",
        opt2:"Be Aware", 
        opt3:"Be a Bear", 
        opt4:"The Lion Sleeps Tonight",
        correct:"button1"
    },
    "q2":{
        question:`Question 2 <br> 
        Which of these people is not Mirabel's cousin?`,
        opt1:"Delores",
        opt2:"Isabelle",
        opt3:"Camillo", 
        opt4:"Antonio",
        correct:"button2"
    },
    "q3":{
        question:`Question 3 <br> 
        Disney's Villainous features many well known and loved villains from many different movies, 
        which of these villains is not featured in a villainous expansion yet?`,
        opt1:"Jafar",
        opt2:"Syndrome",
        opt3:"Frollo",
        opt4:"Horned King",
        correct:"button3"
    },
    "q4":{
        question:`Question 4 <br> 
        What is Disney's 2nd highest grossing movie?`,
        opt1:"Avengers: Endgame",
        opt2:"Frozen II",
        opt3:"Avengers: Infinity War",
        opt4:"Star Wars Ep. VII: The Force Awakens",
        correct:"button4"
    },
    "q5":{
        question:`Question 5 <br> 
        DCL's liners go to many different ports and is currently being leased an island what is the name of the island?`,
        opt1:"Pelican Point",
        opt2:"Castaway Cay",
        opt3:"Imagination Island", 
        opt4:"Glimmering Grotto",
        correct:"button2"
    },
    "q6":{
        question:`Question 6 <br> 
        The first five liners of the Disney Cruise Line fleet are 
        the Magic, Wonder, Dream, Fantasy, and Wish. The sixth ship is currently being built: 
        What is its name?`,
        opt1:"Imagination",
        opt2:"Treasure", 
        opt3:"Adventure", 
        opt4:"Journey",
        correct:"button2"
    },
    "q7":{
        question:`Question 7 <br> 
        On a similar note, where is the ship being built?`,
        opt1:"Meyer Werft",
        opt2:"Neptun Werft",
        opt3:"Meyer Turku", 
        opt4:"Erde Werft",
        correct:"button1"
    },
    "q8":{
        question:`Question 8 <br> 
        On the Dream and Fantasy Pepe the King Prawn has a stateroom, 
        what number is it?`,
        opt1:"5148 1/2",
        opt2:"4128 1/2",
        opt3:"2102 1/2",
        opt4:"3182 1/2",
        correct:"button1"
    },
    "q9":{
        question:`Question 9 <br> 
        What does EPCOT stand for?`,
        opt1:"Evolving Practical City Of Tomorrow",
        opt2:"Entertainment Park Capital Of Tomorrow",
        opt3:"Experimental Prototype Community Of Tomorrow",
        opt4:"Trick Question: It doesn't mean anything",
        correct:"button3"
    },
    "q10":{
        question:`Question 10 <br> 
        In Downtown Disney in Florida there used to be a place geared towards 
        adults and teens what was its name?`,
        opt1:"Pleasure Point",
        opt2:"Tiki Terrace",
        opt3:"Wonder Falls", 
        opt4:"Pleasure Island",
        correct:"button4"
    },
}
//grabs keys in obj qAndA
let questionKeys = Object.keys(qAndA);

opt1.disabled = true;
opt2.disabled = true;
opt3.disabled = true;
opt4.disabled = true;
nextQ.disabled = true;


    //updates the question
function updateQ(){
    let questionKey = questionKeys[currentQindex];
    let currentQuestion = qAndA[questionKey];

    //Find properties of current q
    let questionText = currentQuestion.question;
    let option1 = currentQuestion.opt1;
    let option2 = currentQuestion.opt2;
    let option3 = currentQuestion.opt3;
    let option4 = currentQuestion.opt4;

    //updates to display current q
    qText.innerHTML = questionText;
    opt1.innerHTML = option1;
    opt2.innerHTML = option2;
    opt3.innerHTML = option3;
    opt4.innerHTML = option4;
}
//move on to next q
nextQ.addEventListener("click",function(){
    //increment q index
    currentQindex++

    if(currentQindex < questionKeys.length){
        updateQ();
        //resets button colors
        opt1.classList.remove("correct", "wrong")
        opt2.classList.remove("correct", "wrong")
        opt3.classList.remove("correct", "wrong")
        opt4.classList.remove("correct", "wrong")

        //enable options and disable next
        opt1.disabled = false;
        opt2.disabled = false;
        opt3.disabled = false;
        opt4.disabled = false;
        nextQ.disabled = true;
    }else{
        //Quiz end
        percentC = (points/questionKeys.length)*100
        opt1.remove();
        opt2.remove();
        opt3.remove();
        opt4.remove();
        nextQ.remove();
        qText.innerHTML = `
        Your score:</br>
        ${points}/${questionKeys.length}</br>
        </br>${percentC}%
        `
        }
})
//2
function quiz(){
    //Removes the start Button and Enables The opt Buttons and nextQ Button
    start.style.display = "none";
    opt1.disabled = false;
    opt2.disabled = false;
    opt3.disabled = false;
    opt4.disabled = false;
    
    //event listener for ans buttons
    function whatAns(event){
        if(event.target.classList.contains("buttonClass")){
            let selectedA = event.target.id;

            let questionKey = questionKeys[currentQindex];
            let currentQuestion = qAndA[questionKey];
            let correctAns = currentQuestion.correct;

            let selectedButton = document.getElementById(selectedA);

            //remove existing classes
            opt1.classList.remove("correct", "wrong")
            opt2.classList.remove("correct", "wrong")
            opt3.classList.remove("correct", "wrong")
            opt4.classList.remove("correct", "wrong")

            //deals w/ correct nd incorrect ans
            if(selectedA === correctAns){
                selectedButton.classList.add("correct")
                points ++
            }else{
                selectedButton.classList.add("wrong")
            }

            opt1.disabled = true;
            opt2.disabled = true;
            opt3.disabled = true;
            opt4.disabled = true;
            nextQ.disabled = false;
            //checks if more questions and continues on
            if(currentQindex < questionKeys.length){
                updateQ();
            }
            //checks if last question and continues
            else{
                opt1.remove()
                opt2.remove()
                opt3.remove()
                opt4.remove()
                nextQ.remove()
            }
        }
    }
    //add eventlistener to ans buttons
    opt1.addEventListener("click", whatAns)
    opt2.addEventListener("click", whatAns)
    opt3.addEventListener("click", whatAns)
    opt4.addEventListener("click", whatAns)

    updateQ();
}

start.addEventListener("click", quiz)

//1. object and variables
//2. function
//