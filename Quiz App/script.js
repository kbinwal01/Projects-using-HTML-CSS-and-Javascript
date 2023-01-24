const questions = [{
  'que': 'HTML stands for -',
  'a': 'HighText Machine Language',
  'b': 'HyperText and links Markup Language',
  'c': 'HyperText Markup Language',
  'd': 'None of these',
  'correct': "c",
},
{
  'que': 'The correct sequence of HTML tags for starting a webpage is -',
  'a': '  Head, Title, HTML, body',
  'b': 'HTML, Body, Title, Head',
  'c': ' HTML, Head, Body, Title',
  'd': ' HTML, Head, Title, Body',
  'correct': "d",
},
{
  'que': 'Which of the following element is responsible for making the text bold in HTML?',
  'a': '<pre>',
  'b': '<a>',
  'c': '<br>',
  'd': ' <b>',
  'correct': "d",
},
{
  'que': 'Which of the following tag is used for inserting the largest heading in HTML?',
  'a': '<h5>',
  'b': '<h4>',
  'c': '<h1>',
  'd': '<h2>',
  'correct': "c",
},
{
  'que': 'Which of the following tag is used to insert a line-break in HTML?',
  'a': '<br>',
  'b': '<a>',
  'c': '<pre>',
  'd': ' <b>',
  'correct': "a",
},
{
  'que': ' How to create an unordered list (a list with the list items in bullets) in HTML?',
  'a': '<ul>',
  'b': '<ol>',
  'c': '<li>',
  'd': '<i>',
  'correct': "a",
},
{
  'que': ' Which character is used to represent the closing of a tag in HTML?',
  'a': '?',
  'b': '!',
  'c': '/',
  'd': '.',
  'correct': "c",
},
{
  'que': ' Which of the following element is responsible for making the text italic in HTML?',
  'a': '<i>',
  'b': '<italic>',
  'c': '<it>',
  'd': '<pre>',
  'correct': "a",
},
{
  'que': 'Which of the following tag is used to make the underlined text?',
  'a': '<i>',
  'b': '<ul>',
  'c': '<u>',
  'd': '<pre>',
  'correct': "c",
},
{
  'que': 'How to create a checkbox in HTML?',
  'a': '<input type = "checkbox">',
  'b': '<input type = "button">',
  'c': '<checkbox>',
  'd': '<input type = "check">',
  'correct': "a",
}
]

let index = 0;
let total = questions.length;
let wrong = 0;
let right = 0;
const quesBox = document.getElementById('quesBox');
const options = document.querySelectorAll('.options');
const loadQuestion = () => {
  if (total === index) {
    return endQuiz()
  }
  reset();
  const data = questions[index];
  quesBox.innerText = `${index + 1}) ${data.que}`;
  options[0].nextElementSibling.innerText = data.a;
  options[1].nextElementSibling.innerText = data.b;
  options[2].nextElementSibling.innerText = data.c;
  options[3].nextElementSibling.innerText = data.d;
}
document.querySelector("#btn").addEventListener(
  "click",
  function () {
    const data = questions[index]
    const ans = getAnswer()
    console.log(data.correct)
    if (ans == data.correct) {
      right++;
    } else {
      wrong++;
    }
    index++;
    loadQuestion();
  }
)

const getAnswer = () => {
  let answer;
  options.forEach(input => {
    if (input.checked) {
      answer = input.value;
    }
  }
  )
  return answer;
}
const reset = () => {
  console.log(options, 'options')
  options.forEach(input => {
    input.checked = false;
  }
  )
}
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
        <div style="text-align:center">
        <h2>Thanks for playing the quiz</h2>
        <h3>You've scored ${right} / ${total} </h3>
        <br>
        </div>
    `
}



 

loadQuestion();


