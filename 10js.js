// JavaScript Questions 
const Questions = [{
    id: 0,
    q: "1). JavaScript is an __________ language ?",
    a: [{ text: "A). Procedural  ", isCorrect: false },
        { text: "B). Object-Based  ", isCorrect: false },
        { text: "C). Object-Oriented  ", isCorrect: true },
        { text: "D). None of the above ", isCorrect: false }
    ]

},
{
    id: 1,
    q: "2). Which of the keywords is used to define a variable in javascript ?",
    a: [{ text: "A). var ", isCorrect: false},
        { text: "B). let", isCorrect: false },
        { text: "C). Both A and B", isCorrect: true},
        { text: "D). None of the above ", isCorrect: true }
    ]

},
{
    id: 2,
    q: "3). Upon encountering empty statements, what does the javascript interpreter do ?",
    a: [{ text: "A). Throws an error", isCorrect: false },
        { text: "B). Ignores the statements ", isCorrect: true },
        { text: "C). Gives a warning ", isCorrect: false },
        { text: "D). None of the above ", isCorrect: false }
    ]

},
{
    id: 3,
    q: "4). How can a datatype  be declared to be a constant type ?",
    a: [{ text: "A). var", isCorrect: false },
        { text: "B). let", isCorrect: false },
        { text: "C). constant", isCorrect: false },
        { text: "D). const  ", isCorrect: true }
    ]
},
{
    id: 4,
    q: "5). Which keyword is used to check whether a given property is valid or not ?",
    a: [{ text: "A). in ", isCorrect: true },
        { text: "B). is in ", isCorrect: false },
        { text: "C). exists ", isCorrect: false },
        { text: "D). lies ", isCorrect: false }
    ]
},
{
    id: 5,
    q: "6). When an operator's value is NULL, the typeof returned by the unary operaor is: ?",
    a: [{ text: "A). Boolean ", isCorrect: false },
        { text: "B). Object ", isCorrect: true },
        { text: "C). Integer ", isCorrect: false },
        { text: "D). Undefined ", isCorrect: false }
    ]
},
{
    id: 6,
    q: "7). What is the output of this code: var a = true+true+true*3;     ",
    a: [{ text: "A). 5 ", isCorrect: true },
        { text: "B). 0", isCorrect: false },
        { text: "C). Error ", isCorrect: false },
        { text: "D). 4 ", isCorrect: false }
    ]
},
{
    id: 7,
    q: "8). Which function is used to serialize an object into a JSON string in JavaScript ?",
    a: [{ text: "A). parse()  ", isCorrect:  false},
        { text: "B). convert() ", isCorrect: false },
        { text: "C). stringify() ", isCorrect: true },
        { text: "D). None of the above ", isCorrect: false}
    ]
},
{
    id: 8,
    q: "9). What will be the output of this code snippet=> Print(typeof(NaN)); ",
    a: [{ text: "A). Number  ", isCorrect: true },
        { text: "B). String  ", isCorrect: false },
        { text: "C). object ", isCorrect: false },
        { text: "D). None of the above ", isCorrect: false }
    ]
},
{
    id: 9,
    q: "10). Which of the following are closures in JavaScript ?",
    a: [{ text: "A). Variables  ", isCorrect: false },
        { text: "B). Functions ", isCorrect: false },
        { text: "C). Objects ", isCorrect: false },
        { text: "D). All of the above ", isCorrect: true }
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
if (id < 9) {
    id++;
    iterate(id);
    console.log(id);
}

})
