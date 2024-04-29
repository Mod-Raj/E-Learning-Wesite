// HTML Questions 
const Questions = [{
    id: 0,
    q: "1). What is the smallest header in HTML by default?",
    a: [{ text: "A. h1", isCorrect: false },
        { text: "B. h2", isCorrect: false },
        { text: "C. h6", isCorrect: true },
        { text: "D. h4", isCorrect: false }
    ]

},
{
    id: 1,
    q: "2).How to create an order list in HTML?",
    a: [{ text: "A. <b>", isCorrect: false},
        { text: "B. <ul>", isCorrect: false },
        { text: "C. <href>", isCorrect: false },
        { text: "D. <ol>", isCorrect: true }
    ]

},
{
    id: 2,
    q: " 3). What are the attributes used to change the size of an image ?",
    a: [{ text: "A. big and small  ", isCorrect: false },
        { text: "B. top and button ", isCorrect: false },
        { text: "C. width and height ", isCorrect: true },
        { text: "D. None of the above ", isCorrect: false }
    ]

},
{
    id: 3,
    q: "4). Which attribute is used to provide a unique name to an HTML element ?  ",
    a: [{ text: "A. id", isCorrect: true },
        { text: "B. class", isCorrect: false },
        { text: "C. type", isCorrect: false },
        { text: "D. Name", isCorrect: false }
    ]
},
{
    id: 4,
    q: "5). Which of the following properties is used to change the font of text ?",
    a: [{ text: "A. font-size", isCorrect: false},
        { text: "B. font-family", isCorrect: true },
        { text: "C. text-align", isCorrect: false },
        { text: "D. None of the above", isCorrect: false }
    ]
},
{
    id: 5,
    q: "6).  What tag is used to render an image on a webpage ?",
    a: [{ text: "A. image ", isCorrect: false },
        { text: "B. src", isCorrect: false },
        { text: "C. img ", isCorrect: true },
        { text: "D. None of the above ", isCorrect: false }
    ]
},
{
    id: 6,
    q: "7). What is the correct syntax to write an HTML comment ?",
    a: [{ text: "A. /*Comment*/ ", isCorrect: false },
        { text: "B. # Comment ", isCorrect: false },
        { text: "C. // Comment ", isCorrect: false },
        { text: "D. <!--Comment--> ", isCorrect: true }
    ]
},
{
    id: 7,
    q: "8). Colors are defined in HTML using.. ?",
    a: [{ text: "A. RGB Values  ", isCorrect: false },
        { text: "B. HEX Values ", isCorrect: false },
        { text: "C. RGBA Values ", isCorrect: false },
        { text: "D. All of the above", isCorrect: true}
    ]
},
{
    id: 8,
    q: "9). Which property is used to set border colors in HTML ?",
    a: [{ text: "A. border-color", isCorrect: false },
        { text: "B. border ", isCorrect: true },
        { text: "C. Both A and B ", isCorrect: false },
        { text: "D. None of the above ", isCorrect: false }
    ]
},
{
    id: 9,
    q: "10). How are quotations defined in HTML ?",
    a: [{ text: "A. <quote> ", isCorrect: false },
        { text: "B. <block> ", isCorrect: false },
        { text: "C. <blockquote>", isCorrect: true },
        { text: "D. None of the obove", isCorrect: false }
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
