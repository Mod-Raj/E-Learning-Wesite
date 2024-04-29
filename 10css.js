// CSS Question
const Questions = [{
    id: 0,
    q: "1). CSS Stands for-",
    a: [{ text: "A.Cascading Style Sheets", isCorrect: true },
        { text: "B.Color and style sheet", isCorrect: false },
        { text: "C.Cascade style sheet", isCorrect: false },
        { text: "D.None", isCorrect: false }
    ]

},
{
    id: 1,
    q: "2).Which property is used to change background color in css ?",
    a: [{ text: "A. bgcolor", isCorrect: false, isSelected: false },
        { text: "B. color", isCorrect: false },
        { text: "C. all of this", isCorrect: false },
        { text: "D. background-color", isCorrect: true }
    ]

},
{
    id: 2,
    q: "3).The correct syntax to give a line over text is-",
    a: [{ text: "A. text-decoration:underline", isCorrect: false },
        { text: "B. text-decoration:line", isCorrect: false },
        { text: "C. text-decoration:overline", isCorrect: true },
        { text: "D. text-decoration:none ", isCorrect: false }
    ]

},
{
    id: 3,
    q: "4). The css property used to specify the transparency of an element is-",
    a: [{ text: "A. opacity", isCorrect: true },
        { text: "B. hover", isCorrect: false },
        { text: "C. overlay", isCorrect: false},
        { text: "D. clearfix", isCorrect: false }
    ]
},
{
    id: 4,
    q: "5). How many types of css is used ?",
    a: [{ text: "A. three", isCorrect: true },
        { text: "B. five", isCorrect: false },
        { text: "C. two", isCorrect: false },
        { text: "D. four", isCorrect: false }
    ]
},
{
    id: 5 ,
    q: "6). Which css property is used to add shadows to the text ?",
    a: [{ text: "A. text-stroke ", isCorrect: false },
        { text: "B. text-overflow", isCorrect: false },
        { text: "C. text-decoration", isCorrect: false },
        { text: "D. text-shadow", isCorrect: true }
    ]
},
{
    id: 6,
    q: "7). How to select the elements with the class name 'example' ?",
    a: [{ text: "A. .example", isCorrect: true },
        { text: "B. #example", isCorrect: false },
        { text: "C. example", isCorrect: false },
        { text: "D. class example", isCorrect: false }
    ]
},
{
    id: 7,
    q: "8). Which syntax is correct in ccs to make each word of a sentence start with a capital letter?",
    a: [{ text: "A. text-transform:capital;", isCorrect: false},
        { text: "B. text-style:capital;", isCorrect: false },
        { text: "C. text-transform:capitalize;", isCorrect: true },
        { text: "D. transform:capital;", isCorrect: false }
    ]
},
{
    id: 8,
    q: "9).Inline css are written within the____attribute.",
    a: [{ text: "A. css", isCorrect: false },
        { text: "B. style", isCorrect: true },
        { text: "C. stylesheet", isCorrect: false },
        { text: "D. Both A and B", isCorrect: false }
    ]
},
{
    id:9,
    q: "10). CSS comments are placed within the_________. ",
    a: [{ text: "A.  // ", isCorrect: false},
        { text: "B. /*and*/", isCorrect: true },
        { text: "C. <*and*>", isCorrect: false },
        { text: "D. <!and!>", isCorrect: false }
    ]
}


]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 10) {
    id++;
    iterate(id);
    console.log(id);
}

})
