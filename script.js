const info_box = document.querySelector(".info_box");
const a = document.querySelector("a");

const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");

const result_box = document.querySelector(".result_box");

const next_btn = document.querySelector("footer .next_btn");

const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

function onStartClick () {
    alert('All the Best My friend.');
    info_box.classList.add("hideinfoBox");
    a.classList.add("hidestartbutton");
 

    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function

    startTimer(15); //calling startTimer function

};


let counter;

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let timeValue =  15;

//if user clicked on option
function optionSelected(answer){

    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
    }
    
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}
