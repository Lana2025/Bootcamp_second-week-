(function(){    
    function makeQuest(){   //  add answers
      const output = [];     
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
          
          for(letter in currentQuestion.answers){ 
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
let quest = document.getElementById("quest")
let show = document.getElementById("showquest")
let results = document.getElementById("results")
let submit = document.getElementById("submit")


show.addEventListener("click", () => {
    quest.style.display = "block"
    first.style.display = "none"
})
submit.addEventListener("click", () => {
     quest.style.display = "none"
     results.style.display = "block"
 })
 
      quizContainer.innerHTML = output.join('');
    }
  // result on page
    function showResults(){  
    const answerContainers = quizContainer.querySelectorAll('.answers');      
      let numCorrect = 0;
      myQuestions.forEach( (currentQuestion, questionNumber) => {  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
          // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;        
      }
      
      });
      repImage = "<img src='result.jpg'>";
      // show correct answers
      resultsContainer.innerHTML = ` You answering on ${numCorrect} questions from ${myQuestions.length}` + repImage;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Which actor got his first major role in A Nightmare On Elm Street?",
        answers: {
          a: "Ben Affleck",
          b: "Tom Hanks",
          c: "Johnny Depp"
        },
        correctAnswer: "c"
      },
      {
        question: "How many films has the current Bond, Daniel Craig, starred in?",
        answers: {
          a: "Five",
          b: "Six",
          c: "Seven"
        },
        correctAnswer: "a"
      },
      {
        question: "What role did Margot Robbie play in Batman?",
        answers: {
          a: "Gotham",
          b: "Harley Quinn", 
          c: "Pingvin"         
        },
        correctAnswer: "b"
      },
      {
        question: "The head of what kind of animal is front-and-center in an infamous scene from The Godfather?",
        answers: {
          a: "Horse",
          b: "Dog", 
          c: "Wolf"         
        },
        correctAnswer: "a"
      },
      {
        question: "In The Matrix, what clor does Neo take the pill?",
        answers: {
          a: "Blue",
          b: "Green", 
          c: "Red"         
        },
        correctAnswer: "c"
      },
      {
        question: "Who is the only actor to receive an Oscar nomination for acting in a Lord of the Rings movie?",
        answers: {
          a: "Ian McKellen",
          b: "Andy Serkis", 
          c: "Sean Connery"         
        },
        correctAnswer: "a"
      }
      
    ];
      
    makeQuest();      
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);// 1 slide  
    
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  