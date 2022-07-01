var quizMe = document.querySelector("#takeQuiz");
var dontQuizMe = document.querySelector("#dontQuiz");


// counter for the number we're on that corrisponds to the array of question and answers
// function playQuiz(){

    var counts = 0;
    var startMe = document.querySelector('#start')
    var counterEl = document.querySelector('#counter')
    var listEl = document.querySelector('#list')
    var subBtn  = document.querySelector('.submit')
    



    var score = 0;
    var timerEl = document.getElementById('countdown');
    var wrapperEl = document.querySelector('#Q1A');


var html2 = `
<button id="notRight3" class="btn">answer 1</button>

<button id="answer2b" class="btn">right answer</button> 

<button id="notRight4" class="btn">answer3</button>`


//this is the displayed number of seconds left
function displayMessage() {
    console.log('no more time')
    var wordCount = 0;
}
var timeLeft = 30;

//this is the main function
startMe.addEventListener('click', function() {
     


    var html = `
<button id="answer1a" class="btn">right answer</button>
<button id="notRight1" class="btn" >answer2</button>        
<button id="notRight2" class="btn">answer3</button>
`;

//inserts the html
    document.body.insertAdjacentHTML('beforeend', html)
    document.body.insertAdjacentHTML('beforeend', html2)


//
var right1 = document.querySelector('#answer1a') 
var right2 = document.querySelector('#answer2b')
var notRight1 = document.querySelector('#notRight1')
var notRight2 = document.querySelector('#notRight2')
var notRight3 = document.querySelector('#notRight3')
var notRight4 = document.querySelector('#notRight4')

console.log(right2)

notRight1


//correct answers
    right2.addEventListener('click', function(){
        score++
        console.log(score,)
    })
    right1.addEventListener("click", function(){
        score++
        console.log(score,)
    })

    //wrong answers
    notRight1.addEventListener('click', function(){
        score --
        timeLeft -= 10
        console.log('here is this')
        console.log(score)
    })
    notRight2.addEventListener('click', function(){
        score --
        timeLeft -= 10
        console.log('here is this')
        console.log(score)
    })
    notRight3.addEventListener('click', function(){
        score --
        timeLeft -= 10
        console.log('here is this')
        console.log(score)
    })
    notRight4.addEventListener('click', function(){
        score --
        timeLeft -= 10
        console.log('here is this')
        console.log(score)
    })
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      timeLeft--;
      console.log();
      timerEl.textContent = `Time left: ${timeLeft}`;
      if (timeLeft <= 0) {
        displayMessage();
        clearInterval(timeInterval);
        timerEl.textContent = ``;
      }
     
    }, 1000);
  }
  )
