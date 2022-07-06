var quizMe = document.querySelector("#takeQuiz");
var dontQuizMe = document.querySelector("#dontQuiz");
var pastScore = JSON.parse(localStorage.getItem('highscore'))
var that = pastScore.value
console.log(pastScore.name)
// counter for the number we're on that corrisponds to the array of question and answers

    var counts = 0;
    var startMe = document.querySelector('#start')
    var counterEl = document.querySelector('#counter')
    var listEl = document.querySelector('#list')
    
    
    var finalWrapper = document.querySelector('#wrapper')
   

    var score = 0;
    var timerEl = document.getElementById('countdown');
    var wrapperEl = document.querySelector('#Q1A');

//use the code provided in the avtivity, the local storage accepts 2 args, the class(what you name it) and the value(whats actually stored)

var html = `
<h2 id="q1"> this is the first question</h2>
<button id="notRight1" class="btn" >answer2</button>        
<button id="answer1a" class="btn">right answer</button>
<button id="notRight2" class="btn">answer3</button>`;

var html2 = `
<h2 id="q2"> this is the second question</h2>
<button id="answer2b" class="btn">right answer</button> 
<button id="notRight3" class="btn">answer 1</button>
<button id="notRight4" class="btn">answer3</button>`

var html3 = `
<h2 id="q3"> this is the third question</h2>
<button id="notRight5" class="btn">answer 1</button>
<button id="notRight6" class="btn">answer3</button>
<button id="answer3c" class="btn">right answer</button>`

var html4 = `
<section id ="finalResults" class="box-style">
  <input type="text" class="form-control" id="input"placeholder="enter your initals to log your score" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn" id="submit">submit your score</button>
<button id="restart">would you like you play again?</button>
</section>
`
var html5 = `
<div class="box-style" id="lastPage">
<p>name ${pastScore.name} score ${pastScore.score}</p>
<button id="clearScores">clear highscores</button>
<button id="restart">would you like you play again?</button>
</div>`


var html6 = `
<button id="start" class="btn">start quiz</button>`
//this is the displayed number of seconds left


function displayMessage() {
    console.log('no more time')
    var wordCount = 0;
}
var timeLeft = 30;









//to create a new varaibale thats set to the final score and the user iniitals, create a new div, 2 buttons, one fore clearing the score and
//one to restart the quiz



//this is the main function
startMe.addEventListener('click', runQuiz)


function runQuiz() {

    document.getElementById('start').remove();


    
    //adds the second round buttons and deletes the first ones
    function change1(){
    document.body.insertAdjacentHTML('beforeend', html2)
    document.getElementById('q1').remove();
    document.getElementById('notRight1').remove();
    document.getElementById('notRight2').remove();
    document.getElementById('answer1a').remove();
    secondRound()
    }
    //adds the third round buttons and deletes the second ones
    function change2(){
        document.body.insertAdjacentHTML('beforeend', html3)
        document.getElementById('q2').remove();
        document.getElementById('notRight3').remove();
        document.getElementById('notRight4').remove();
        document.getElementById('answer2b').remove();
         thirdRound()
        }
        
        function change3(){
            finalWrapper.insertAdjacentHTML('beforeend', html4,)
            var finalBox = document.querySelector('#finalResults')
            finalBox.insertAdjacentHTML('afterbegin', `<h2 id="finalMessage">your score is ${score} good job!</h2>`)
            document.getElementById('q3').remove();
            document.getElementById('notRight5').remove();
            document.getElementById('notRight6').remove();
            document.getElementById('answer3c').remove();
            var startAgain = document.querySelector('#restart')
            var input = document.querySelector('#input')
            startAgain.addEventListener("click", runQuiz2)
            var subBtn  = document.querySelector('#submit')
            subBtn.addEventListener('click', subScores)
            }
            function change4(){
                finalWrapper.insertAdjacentHTML('beforeend', html5)
                var startAgain = document.querySelector('#restart')
                startAgain.addEventListener("click", runQuiz2)
            }
            
    

            

    //inserts the html to make first buttons
    document.body.insertAdjacentHTML('beforeend', html)
  
    //the variables for the first buttons
    var right1 = document.querySelector('#answer1a') 
    var notRight1 = document.querySelector('#notRight1')
    var notRight2 = document.querySelector('#notRight2')

    //correct answer
    right1.addEventListener("click", function(){
        score++
        console.log(score,)
        change1()
    })
    //wrong answers
    notRight1.addEventListener('click', function(){
        timeLeft -= 10
        console.log('not right 1')
        console.log(score)
        change1()
    })
    notRight2.addEventListener('click', function(){
        timeLeft -= 10
        console.log('not right 2')
        console.log(score)
       change1()
    })


    function secondRound(){
    //the variables for the second round buttons
    var right2 = document.querySelector('#answer2b') 
    var notRight3 = document.querySelector('#notRight3')
    var notRight4 = document.querySelector('#notRight4')

    //second round of questions
    right2.addEventListener("click", function(){
        score++
        console.log(score,)
        change2()
    })
    //wrong answers
    notRight3.addEventListener('click', function(){
        timeLeft -= 10
        console.log('not right 3')
        console.log(score)
        change2()
    })
    notRight4.addEventListener('click', function(){
        timeLeft -= 10
        console.log('not right 4')
        console.log(score)
       change2()
    })
}


function thirdRound(){
        //the variables for the third round buttons
        var right3 = document.querySelector('#answer3c') 
        var notRight5 = document.querySelector('#notRight5')
        var notRight6 = document.querySelector('#notRight6')

    // third round of questions
    right3.addEventListener("click", function(){
        score++
        console.log(score,)
        clearInterval(timeInterval);
        timerEl.textContent = ``;
        change3()
    })
    //wrong answers
    notRight5.addEventListener('click', function(){
        timeLeft -= 10
        console.log('not right 5')
        console.log(score)
        clearInterval(timeInterval);
        timerEl.textContent = ``;
        change3()
    })
    notRight6.addEventListener('click', function(){
        timeLeft -= 10
        console.log('not right 6')
        console.log(score)
        clearInterval(timeInterval);
        timerEl.textContent = ``;
        change3()
    })




}

function runQuiz2(){
    score = 0;
    timeLeft = 30;
    document.getElementById('finalResults').remove();
    var startDiv = document.querySelector('#startDiv')
    startDiv.insertAdjacentHTML('beforeend', html6)
    var startMe = document.querySelector('#start')
    startMe.addEventListener('click', runQuiz)
}

function subScores(){
var highScore = {
    name: input.value,
    score: score,}
localStorage.setItem('highscore', JSON.stringify(highScore));
document.getElementById('finalResults').remove();
finalWrapper.insertAdjacentHTML('beforeend', html5)
var startAgain = document.querySelector('#restart')
startAgain.addEventListener("click", runQuiz2)
}
    
    var timeInterval = setInterval(function () {
      timeLeft--;
      console.log();
      timerEl.textContent = `Time left: ${timeLeft}`;
      if (timeLeft <= 0) {
        displayMessage();
        clearInterval(timeInterval);
        timerEl.textContent = ``;
        alert('you have run out of time!')
      }
     
    }, 1000);
  }
  
