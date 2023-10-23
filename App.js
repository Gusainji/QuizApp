const questions = [{
    'que': "Which of the following is a client site language?",
    'a': "Java",
    'b': "C",
    'c': "Python",
    'd': "JavaScript",
    'correct': "d",
},
{
    'que': "What does HTML stand for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "a",
},
{
    'que': "What year was JavaScript launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of the above",
    'correct': "b", 
}
]

let index = 0; 
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox  = document.getElementById("quesBox"); 
const optionInputs = document.querySelectorAll('.options');
// console.log(optionInputs);

const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    // console.log(data)
    quesBox.innerText = ` ${index + 1}) ${data.que}`;    
    optionInputs[0].nextElementSibling.innerText = data.a;  
    optionInputs[1].nextElementSibling.innerText = data.b;  
    optionInputs[2].nextElementSibling.innerText = data.c;  
    optionInputs[3].nextElementSibling.innerText = data.d;  
    
}

const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer()
    console.log(ans,data.correct)
    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                // console.log(input.value)
                answer = input.value;

            }
            //..........checking...........
            // if(input.checked){
            //     console.log("Yes")
            // }else{
            //     console.log("No")
            // }
            //............................
        }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }

    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3>Thank you for playing the quiz. </h3>
    <h2> ${right} / $ {total} </h2>`
}

loadQuestion();
