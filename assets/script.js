var quizMe = document.querySelector("#takeQuiz");
var searchHistory = JSON.parse(localStorage.getItem('search')) || [];
var dontQuizMe = document.querySelector("#dontQuiz");
var pastScore = JSON.parse(localStorage.getItem('highscore'))
var counts = 0;
var startMe = document.querySelector('#start')
var counterEl = document.querySelector('#counter')
var listEl = document.querySelector('#list')
var finalWrapper = document.querySelector('#wrapper')
var score = 0;
var timerEl = document.getElementById('countdown');
var wrapperEl = document.querySelector('#Q1A');
// this is the first round of questions
var html = `
<h2 id="q1"> How do you write "Hello World" in an alert box?</h2>
<button id="notRight1" class="btn" >msgBox('hello world')</button>        
<button id="answer1a" class="btn">alert('hello world')</button>
<button id="notRight2" class="btn">alertBox('hello world')</button>`;
// this is the second round of questions
var html2 = `
<h2 id="q2"> How do you call a function named "myFunction"?</h2>
<button id="answer2b" class="btn">myFunction()</button> 
<button id="notRight3" class="btn">call function myFunction</button>
<button id="notRight4" class="btn">call myFunction()</button>`
// this is the third round of questions
var html3 = `
<h2 id="q3"> How to write an IF statement in JavaScript?</h2>
<button id="notRight5" class="btn">if i === 5</button>
<button id="notRight6" class="btn">if i = 5 then</button>
<button id="answer3c" class="btn">if (i == 5)</button>`
// this is what you see if you chose to play again
var html6 = `
<button id="start" class="btn">start quiz</button>`

//this is the displayed number of seconds left
function displayMessage() {
    console.log('no more time')
    var wordCount = 0;
}
var timeLeft = 40;


//this is the main function
startMe.addEventListener('click', runQuiz)
function runQuiz() {

    document.getElementById('start').remove();

    //adds the second round buttons and deletes the first ones
    function change1() {
        document.body.insertAdjacentHTML('beforeend', html2)
        document.getElementById('q1').remove();
        document.getElementById('notRight1').remove();
        document.getElementById('notRight2').remove();
        document.getElementById('answer1a').remove();
        secondRound()
    }
    //adds the third round buttons and deletes the second ones
    function change2() {
        document.body.insertAdjacentHTML('beforeend', html3)
        document.getElementById('q2').remove();
        document.getElementById('notRight3').remove();
        document.getElementById('notRight4').remove();
        document.getElementById('answer2b').remove();
        thirdRound()
    }
// this adds the screen that shows your final score and lets you either save your score or restart the quiz
    function change3() {
        var html4 = `
            <section id ="finalResults" class="box-style">
            <h2 id="finalMessage">your score is ${score} good job!</h2>
              <input type="text" class="form-control" id="input"placeholder="enter your initals to log your score" aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn" id="submit">submit your score</button>
            <button id="restart">would you like you play again?</button>
            </section>
            `
        finalWrapper.insertAdjacentHTML('beforeend', html4,)
        document.getElementById('q3').remove();
        document.getElementById('notRight5').remove();
        document.getElementById('notRight6').remove();
        document.getElementById('answer3c').remove();
        var startAgain = document.querySelector('#restart')
        var subBtn = document.getElementById('submit')
        startAgain.addEventListener('click', runQuiz2)
        var inputValue = document.getElementById('input')
        // adds a function onto the submit your score button
        subBtn.addEventListener('click', function () {
            var pastSearch = `${inputValue.value} ${score}`
            console.log(pastSearch)
            var html5 = `
                <div class="box-style" id="lastPage">
                <h2>your highscores</h2>
                <div id="pastSearches"></div>
                <button id="restart">would you like to play again?</button>
                <button id="clearBtn" class='btn'>clear highscores(after you refresh the page)</button>
                </div>`
            // this function renders your past highscores onto the screen
                function renderSearches() {
                    var pastSearchesEle = document.getElementById('pastSearches')
                    pastSearchesEle.innerHTML = ""
                    for (let i = 0; i < searchHistory.length; i++) {
                        const cityNames = document.createElement('div');
                        cityNames.setAttribute('id', 'cityinput')
                        cityNames.innerText = searchHistory[i]
                        cityNames.setAttribute('value', searchHistory[i])
                        pastSearchesEle.append(cityNames)
                    }
                    
                }
        
        finalWrapper.insertAdjacentHTML('beforeend', html5)
        searchHistory.push(pastSearch);
        localStorage.setItem('search', JSON.stringify(searchHistory))
        renderSearches()
        var clearBtn = document.getElementById('clearBtn')
        clearBtn.addEventListener('click', function () {
            searchHistory = []
            localStorage.clear();
        }) 
            subScores()
            var startAgain = document.querySelector('#restart')
            startAgain.addEventListener("click", function () {
                document.getElementById('lastPage').remove();
                runQuiz2()
            })

        })

    }

    //inserts the html to make first buttons
    document.body.insertAdjacentHTML('beforeend', html)

    //the variables for the first buttons
    var right1 = document.querySelector('#answer1a')
    var notRight1 = document.querySelector('#notRight1')
    var notRight2 = document.querySelector('#notRight2')
    var indicator = document.getElementById('indicator')
    indicator.value = 1
    console.log(indicator.value)
    //correct answer
    right1.addEventListener("click", function () {
        score++
        console.log(score,)
        change1()
    })
    //wrong answers
    notRight1.addEventListener('click', function () {
        timeLeft -= 10
        console.log('not right 1')
        console.log(score)
        change1()
    })
    notRight2.addEventListener('click', function () {
        timeLeft -= 10
        console.log('not right 2')
        console.log(score)
        change1()
    })

    function secondRound() {
        //the variables for the second round buttons
        var right2 = document.querySelector('#answer2b')
        var notRight3 = document.querySelector('#notRight3')
        var notRight4 = document.querySelector('#notRight4')
        var indicator = document.getElementById('indicator')
        indicator.value++
        console.log(indicator.value)
        //second round of questions
        right2.addEventListener("click", function () {
            score++
            console.log(score,)
            change2()
        })
        //wrong answers
        notRight3.addEventListener('click', function () {
            timeLeft -= 10
            console.log('not right 3')
            console.log(score)
            change2()
        })
        notRight4.addEventListener('click', function () {
            timeLeft -= 10
            console.log('not right 4')
            console.log(score)
            change2()
        })
    }


    function thirdRound() {
        //the variables for the third round buttons
        var right3 = document.querySelector('#answer3c')
        var notRight5 = document.querySelector('#notRight5')
        var notRight6 = document.querySelector('#notRight6')
        var indicator = document.getElementById('indicator')
        indicator.value++
        console.log(indicator.value)
        // third round of questions
        right3.addEventListener("click", function () {
            score++
            console.log(score,)
            clearInterval(timeInterval);
            timerEl.textContent = ``;
            change3()
        })
        //wrong answers
        notRight5.addEventListener('click', function () {
            timeLeft -= 10
            console.log('not right 5')
            console.log(score)
            clearInterval(timeInterval);
            timerEl.textContent = ``;
            change3()
        })
        notRight6.addEventListener('click', function () {
            timeLeft -= 10
            console.log('not right 6')
            console.log(score)
            clearInterval(timeInterval);
            timerEl.textContent = ``;
            change3()
        })
    }
// this function resets the score var and the timer var then reloads the first screen
    function runQuiz2() {
        score = 0;
        timeLeft = 40;
        document.getElementById('finalResults').remove();
        var startDiv = document.querySelector('#startDiv')
        startDiv.insertAdjacentHTML('beforeend', html6)
        var startMe = document.querySelector('#start')
        startMe.addEventListener('click', runQuiz)
    }
// this function runs if you chose to submit your score
    function subScores() {
        var highScore = {
            name: input.value,
            score: score,
        }
        localStorage.setItem('highscore', JSON.stringify(highScore));
        document.getElementById('input').remove();
        document.getElementById('restart').remove();
        document.getElementById('submit').remove();
        document.getElementById('finalMessage').remove();
    }
    // this is the timer function
    var timeInterval = setInterval(function () {
        timeLeft--;
        console.log();
        timerEl.textContent = `Time left: ${timeLeft}`;
        if (timeLeft <= 0) {
            displayMessage();
            clearInterval(timeInterval);
            timerEl.textContent = ``;
            alert('you have run out of time!')
            // location.reload();
            console.log(indicator.value)
            if (indicator.value == 1) {
                change1()
                change2()
                change3()
            } else if (indicator.value == 2) {
                change2()
                change3()
            } else {
                change3()
            }

        }

    }, 1000);
}