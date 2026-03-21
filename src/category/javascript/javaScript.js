export let javaScript = [
    {
        "id": 1,
        "title": "Introduction",
        "description": "Learn what JavaScript is, why it is used, and how it makes websites interactive.",
        "topics": [
            {
                "id": 1,
                "title": "What is JavaScript?",
                "description": "JavaScript is a programming language used to make web pages interactive. It allows you to add behavior like clicking buttons, animations, and dynamic content.",
                "example": "console.log('Hello World');"
            },
            {
                "id": 2,
                "title": "Why JavaScript is Important",
                "description": "JavaScript is one of the core technologies of the web. It works with HTML and CSS to create modern web applications.",
                "example": "HTML + CSS + JavaScript = Complete Website"
            },
            {
                "id": 3,
                "title": "Where JavaScript Runs",
                "description": "JavaScript runs inside web browsers and also on servers using environments like Node.js.",
                "example": "Browser (Chrome) and Server (Node.js)"
            },
            {
                "id": 4,
                "title": "How JavaScript Works with HTML",
                "description": "JavaScript can access and modify HTML elements to create dynamic behavior.",
                "example": "document.getElementById('demo').innerText = 'Hello';"
            },
            {
                "id": 5,
                "title": "Ways to Add JavaScript",
                "description": "JavaScript can be added inline, internal, or external in an HTML file.",
                "example": "<script src=\"script.js\"></script>"
            },
            {
                "id": 6,
                "title": "First JavaScript Program",
                "description": "A simple program to display output in console or browser.",
                "example": "console.log('My First JS Program');"
            }
        ],
        "quiz": [
            {
                "question": "What is JavaScript used for?",
                "options": [
                    "Styling",
                    "Structuring",
                    "Adding interactivity"
                ],
                "answer": "Adding interactivity"
            },
            {
                "question": "Where does JavaScript run?",
                "options": [
                    "Only server",
                    "Only browser",
                    "Both browser and server"
                ],
                "answer": "Both browser and server"
            }
        ],
        "practice": [
            {
                "task": "Write a JavaScript program to print 'Hello World' in console.",
                "hint": "Use console.log()"
            },
            {
                "task": "Link an external JavaScript file to HTML.",
                "hint": "Use script src"
            }
        ]
    },
    {
        "id": 2,
        "title": "Variables & Data Types",
        "description": "Learn how to store data in variables and understand different types of data in JavaScript.",
        "topics": [
            {
                "id": 1,
                "title": "What is a Variable?",
                "description": "A variable is a container used to store data values in a program.",
                "example": "let name = 'Vishal';"
            },
            {
                "id": 2,
                "title": "Declaring Variables",
                "description": "Variables can be declared using var, let, and const.",
                "example": "var a = 10;\nlet b = 20;\nconst c = 30;"
            },
            {
                "id": 3,
                "title": "var vs let vs const",
                "description": "var is function-scoped, let is block-scoped, and const cannot be reassigned.",
                "example": "let x = 10;\nx = 20; // allowed\nconst y = 30; // cannot change"
            },
            {
                "id": 4,
                "title": "Naming Rules",
                "description": "Variable names must start with a letter, underscore, or dollar sign and cannot use reserved keywords.",
                "example": "let userName = 'John';"
            },
            {
                "id": 5,
                "title": "Primitive Data Types",
                "description": "Primitive data types include string, number, boolean, null, undefined, and symbol.",
                "example": "let str = 'Hello';\nlet num = 10;\nlet isTrue = true;"
            },
            {
                "id": 6,
                "title": "String",
                "description": "Used to store text values.",
                "example": "let name = 'Vishal';"
            },
            {
                "id": 7,
                "title": "Number",
                "description": "Used to store numeric values.",
                "example": "let age = 25;"
            },
            {
                "id": 8,
                "title": "Boolean",
                "description": "Represents true or false values.",
                "example": "let isLoggedIn = true;"
            },
            {
                "id": 9,
                "title": "Undefined",
                "description": "A variable declared but not assigned a value is undefined.",
                "example": "let x;\nconsole.log(x);"
            },
            {
                "id": 10,
                "title": "Null",
                "description": "Represents an intentional absence of value.",
                "example": "let data = null;"
            },
            {
                "id": 11,
                "title": "Non-Primitive Data Types",
                "description": "Objects, arrays, and functions are non-primitive types.",
                "example": "let obj = {name: 'Vishal'};"
            },
            {
                "id": 12,
                "title": "typeof Operator",
                "description": "Used to check the data type of a variable.",
                "example": "typeof 'Hello'; // string"
            },
            {
                "id": 13,
                "title": "Dynamic Typing",
                "description": "JavaScript is dynamically typed, meaning variable types can change.",
                "example": "let x = 10;\nx = 'Hello';"
            }
        ],
        "quiz": [
            {
                "question": "Which keyword is block scoped?",
                "options": ["var", "let", "function"],
                "answer": "let"
            },
            {
                "question": "Which cannot be reassigned?",
                "options": ["let", "var", "const"],
                "answer": "const"
            },
            {
                "question": "What is typeof null?",
                "options": ["null", "object", "undefined"],
                "answer": "object"
            }
        ],
        "practice": [
            {
                "task": "Declare variables using var, let, and const.",
                "hint": "Try storing different values"
            },
            {
                "task": "Create variables for name, age, and isStudent.",
                "hint": "Use string, number, boolean"
            },
            {
                "task": "Use typeof to check data types.",
                "hint": "console.log(typeof variable)"
            }
        ]
    },
    {
        "id": 3,
        "title": "Operators",
        "description": "Learn how to perform operations on variables and values using different types of operators in JavaScript. Operators are essential for calculations, comparisons, and decision-making.",
        "topics": [
            {
                "id": 1,
                "title": "What are Operators?",
                "description": "Operators are symbols or keywords used to perform operations on values and variables.",
                "example": "let sum = 5 + 3;"
            },
            {
                "id": 2,
                "title": "Arithmetic Operators",
                "description": "Used to perform mathematical operations like addition, subtraction, multiplication, division, and modulus.",
                "example": "let a = 10 + 5;\nlet b = 10 - 5;\nlet c = 10 * 5;\nlet d = 10 / 5;\nlet e = 10 % 3;"
            },
            {
                "id": 3,
                "title": "Exponent Operator",
                "description": "Used to calculate power of a number.",
                "example": "let result = 2 ** 3; // 8"
            },
            {
                "id": 4,
                "title": "Increment & Decrement",
                "description": "Used to increase or decrease a value by 1. Can be prefix or postfix.",
                "example": "let x = 5;\nx++;\n++x;"
            },
            {
                "id": 5,
                "title": "Assignment Operators",
                "description": "Used to assign values to variables.",
                "example": "let x = 10;\nx += 5;\nx -= 2;\nx *= 2;\nx /= 2;"
            },
            {
                "id": 6,
                "title": "Comparison Operators",
                "description": "Used to compare two values and return true or false.",
                "example": "5 == '5'; // true\n5 === '5'; // false\n10 > 5; // true"
            },
            {
                "id": 7,
                "title": "Loose vs Strict Equality",
                "description": "== compares values only, === compares both value and type.",
                "example": "5 == '5' // true\n5 === '5' // false"
            },
            {
                "id": 8,
                "title": "Logical Operators",
                "description": "Used to combine conditions.",
                "example": "true && false; // false\ntrue || false; // true\n!true; // false"
            },
            {
                "id": 9,
                "title": "Short-Circuiting",
                "description": "Logical operators stop evaluation early if result is determined.",
                "example": "false && console.log('Run'); // won't run\ntrue || console.log('Run'); // won't run"
            },
            {
                "id": 10,
                "title": "Ternary Operator",
                "description": "A shorthand for if-else statements.",
                "example": "let result = age >= 18 ? 'Adult' : 'Minor';"
            },
            {
                "id": 11,
                "title": "String Concatenation",
                "description": "Used to combine strings using + operator.",
                "example": "let fullName = 'John' + ' ' + 'Doe';"
            },
            {
                "id": 12,
                "title": "Type Coercion",
                "description": "JavaScript automatically converts types in some operations.",
                "example": "'5' + 2; // '52'\n'5' - 2; // 3"
            },
            {
                "id": 13,
                "title": "Truthy and Falsy Values",
                "description": "Falsy values include false, 0, '', null, undefined, NaN. Everything else is truthy.",
                "example": "if(0) { } // false\nif('hello') { } // true"
            },
            {
                "id": 14,
                "title": "Bitwise Operators (Basic)",
                "description": "Operate on binary numbers (used less often but important conceptually).",
                "example": "5 & 1;\n5 | 1;"
            },
            {
                "id": 15,
                "title": "Operator Precedence",
                "description": "Defines the order in which operations are performed.",
                "example": "let result = 2 + 3 * 4; // 14"
            }
        ],
        "quiz": [
            {
                "question": "What is 5 === '5'?",
                "options": ["true", "false"],
                "answer": "false"
            },
            {
                "question": "Which operator checks both value and type?",
                "options": ["==", "===", "="],
                "answer": "==="
            },
            {
                "question": "Which is a falsy value?",
                "options": ["1", "'hello'", "0"],
                "answer": "0"
            },
            {
                "question": "What is '5' + 2?",
                "options": ["7", "52", "error"],
                "answer": "52"
            }
        ],
        "practice": [
            {
                "task": "Perform all arithmetic operations on two numbers.",
                "hint": "Use +, -, *, /, %"
            },
            {
                "task": "Check difference between == and ===.",
                "hint": "Compare number and string"
            },
            {
                "task": "Use logical operators in a condition.",
                "hint": "Try && and ||"
            },
            {
                "task": "Create a ternary condition for even/odd.",
                "hint": "Use % operator"
            }
        ]
    },
    {
        "id": 4,
        "title": "Type Conversion",
        "description": "Learn how JavaScript converts data from one type to another. Understanding type conversion helps avoid bugs and write predictable code.",
        "topics": [
            {
                "id": 1,
                "title": "What is Type Conversion?",
                "description": "Type conversion is the process of converting a value from one data type to another.",
                "example": "let num = Number('10'); // 10"
            },
            {
                "id": 2,
                "title": "Types of Conversion",
                "description": "There are two types: implicit (automatic) and explicit (manual) conversion.",
                "example": "Implicit: '5' + 2 = '52' | Explicit: Number('5') + 2 = 7"
            },
            {
                "id": 3,
                "title": "Implicit Type Conversion (Coercion)",
                "description": "JavaScript automatically converts types during operations.",
                "example": "'5' + 2; // '52'\n'5' - 2; // 3"
            },
            {
                "id": 4,
                "title": "String Conversion",
                "description": "Convert values to string using String() or toString().",
                "example": "String(100); // '100'\n(100).toString();"
            },
            {
                "id": 5,
                "title": "Number Conversion",
                "description": "Convert values to number using Number(), parseInt(), and parseFloat().",
                "example": "Number('10'); // 10\nparseInt('10px'); // 10\nparseFloat('10.5'); // 10.5"
            },
            {
                "id": 6,
                "title": "Boolean Conversion",
                "description": "Convert values to boolean using Boolean().",
                "example": "Boolean(1); // true\nBoolean(0); // false"
            },
            {
                "id": 7,
                "title": "Falsy Values",
                "description": "Values that convert to false: false, 0, '', null, undefined, NaN.",
                "example": "Boolean(0); // false"
            },
            {
                "id": 8,
                "title": "Truthy Values",
                "description": "All values except falsy values are truthy.",
                "example": "Boolean('hello'); // true"
            },
            {
                "id": 9,
                "title": "parseInt vs Number",
                "description": "parseInt extracts numbers from strings, while Number converts the entire value.",
                "example": "parseInt('10px'); // 10\nNumber('10px'); // NaN"
            },
            {
                "id": 10,
                "title": "Unary Plus Operator",
                "description": "The + operator can convert a value to a number quickly.",
                "example": "+'10'; // 10"
            },
            {
                "id": 11,
                "title": "NaN (Not a Number)",
                "description": "NaN represents an invalid number result.",
                "example": "Number('abc'); // NaN"
            },
            {
                "id": 12,
                "title": "Checking NaN",
                "description": "Use isNaN() or Number.isNaN() to check NaN values.",
                "example": "isNaN('abc'); // true"
            },
            {
                "id": 13,
                "title": "Type Conversion Pitfalls",
                "description": "Unexpected results can occur due to automatic conversion.",
                "example": "'' == 0; // true\n'' === 0; // false"
            }
        ],
        "quiz": [
            {
                "question": "What is Number('10px')?",
                "options": ["10", "NaN", "undefined"],
                "answer": "NaN"
            },
            {
                "question": "Which function converts string to number?",
                "options": ["String()", "Number()", "Boolean()"],
                "answer": "Number()"
            },
            {
                "question": "Which is a falsy value?",
                "options": ["'0'", "0", "'false'"],
                "answer": "0"
            },
            {
                "question": "What does +'5' return?",
                "options": ["5", "'5'", "NaN"],
                "answer": "5"
            }
        ],
        "practice": [
            {
                "task": "Convert string '100' to number using different methods.",
                "hint": "Use Number, parseInt, + operator"
            },
            {
                "task": "Check truthy and falsy values.",
                "hint": "Use Boolean()"
            },
            {
                "task": "Compare parseInt and Number with '20px'.",
                "hint": "Observe output"
            },
            {
                "task": "Create examples where == gives unexpected result.",
                "hint": "Try '', 0, false"
            }
        ]
    },
    {
        "id": 5,
        "title": "Conditional Statements",
        "description": "Learn how to make decisions in JavaScript using conditional statements like if, else, and switch. These are essential for controlling program flow.",
        "topics": [
            {
                "id": 1,
                "title": "What are Conditional Statements?",
                "description": "Conditional statements allow your program to make decisions based on conditions.",
                "example": "if (true) { console.log('Run'); }"
            },
            {
                "id": 2,
                "title": "if Statement",
                "description": "The if statement executes a block of code if the condition is true.",
                "example": "if (age >= 18) {\n  console.log('Adult');\n}"
            },
            {
                "id": 3,
                "title": "if...else Statement",
                "description": "Executes one block if condition is true, otherwise another block.",
                "example": "if (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}"
            },
            {
                "id": 4,
                "title": "else if Ladder",
                "description": "Used to check multiple conditions sequentially.",
                "example": "if (marks >= 90) {\n  console.log('A');\n} else if (marks >= 75) {\n  console.log('B');\n} else {\n  console.log('C');\n}"
            },
            {
                "id": 5,
                "title": "Nested if",
                "description": "An if statement inside another if statement.",
                "example": "if (age >= 18) {\n  if (hasLicense) {\n    console.log('Can drive');\n  }\n}"
            },
            {
                "id": 6,
                "title": "Switch Statement",
                "description": "Used to select one block of code among many options.",
                "example": "switch(day) {\n  case 1:\n    console.log('Monday');\n    break;\n  case 2:\n    console.log('Tuesday');\n    break;\n  default:\n    console.log('Invalid');\n}"
            },
            {
                "id": 7,
                "title": "Break Statement in Switch",
                "description": "Stops execution of further cases in switch.",
                "example": "Without break, execution continues to next cases."
            },
            {
                "id": 8,
                "title": "Default Case",
                "description": "Runs if no case matches.",
                "example": "default:\n  console.log('No match');"
            },
            {
                "id": 9,
                "title": "Ternary Operator",
                "description": "A short form of if...else.",
                "example": "let result = age >= 18 ? 'Adult' : 'Minor';"
            },
            {
                "id": 10,
                "title": "Truthy and Falsy in Conditions",
                "description": "Conditions are evaluated based on truthy and falsy values.",
                "example": "if (0) { } // false\nif ('hello') { } // true"
            },
            {
                "id": 11,
                "title": "Comparison in Conditions",
                "description": "Use comparison operators inside conditions.",
                "example": "if (a === b) { }"
            },
            {
                "id": 12,
                "title": "Logical Operators in Conditions",
                "description": "Combine multiple conditions using &&, ||, !.",
                "example": "if (age > 18 && hasID) { }"
            },
            {
                "id": 13,
                "title": "Common Mistakes",
                "description": "Using = instead of == or ===, missing break in switch, wrong condition logic.",
                "example": "if (a = 5) // wrong"
            },
            {
                "id": 14,
                "title": "Best Practices",
                "description": "Use strict equality (===), keep conditions simple, and avoid deep nesting.",
                "example": "Prefer clean and readable conditions"
            }
        ],
        "quiz": [
            {
                "question": "Which statement is used for multiple conditions?",
                "options": ["if", "switch", "loop"],
                "answer": "switch"
            },
            {
                "question": "What happens if break is missing in switch?",
                "options": [
                    "Error",
                    "Stops execution",
                    "Continues to next case"
                ],
                "answer": "Continues to next case"
            },
            {
                "question": "Which operator is shorthand for if-else?",
                "options": ["&&", "?:", "||"],
                "answer": "?:"
            },
            {
                "question": "Which is best practice?",
                "options": ["==", "===", "="],
                "answer": "==="
            }
        ],
        "practice": [
            {
                "task": "Check if a number is even or odd.",
                "hint": "Use % operator with if-else"
            },
            {
                "task": "Create a grading system using else if.",
                "hint": "Use marks range"
            },
            {
                "task": "Use switch to print day of week.",
                "hint": "Use numbers 1–7"
            },
            {
                "task": "Use ternary operator to check voting eligibility.",
                "hint": "age >= 18"
            }
        ]
    },
    {
        "id": 6,
        "title": "Loops",
        "description": "Learn how to execute code repeatedly using loops. Loops are essential for handling repetitive tasks and working with data structures.",
        "topics": [
            {
                "id": 1,
                "title": "What are Loops?",
                "description": "Loops allow you to execute a block of code multiple times based on a condition.",
                "example": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}"
            },
            {
                "id": 2,
                "title": "for Loop",
                "description": "The for loop is used when the number of iterations is known.",
                "example": "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}"
            },
            {
                "id": 3,
                "title": "while Loop",
                "description": "The while loop runs as long as the condition is true.",
                "example": "let i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}"
            },
            {
                "id": 4,
                "title": "do...while Loop",
                "description": "The do...while loop executes at least once before checking the condition.",
                "example": "let i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 5);"
            },
            {
                "id": 5,
                "title": "Loop Control Statements",
                "description": "Control loop execution using break and continue.",
                "example": "for (let i = 1; i <= 5; i++) {\n  if (i === 3) break;\n  console.log(i);\n}"
            },
            {
                "id": 6,
                "title": "Break Statement",
                "description": "Stops the loop completely when a condition is met.",
                "example": "if (i === 3) break;"
            },
            {
                "id": 7,
                "title": "Continue Statement",
                "description": "Skips the current iteration and moves to the next.",
                "example": "if (i === 3) continue;"
            },
            {
                "id": 8,
                "title": "Nested Loops",
                "description": "Loops inside loops are used for complex patterns and multi-dimensional data.",
                "example": "for (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= 3; j++) {\n    console.log(i, j);\n  }\n}"
            },
            {
                "id": 9,
                "title": "Infinite Loops",
                "description": "Loops that never end due to incorrect condition.",
                "example": "while (true) {\n  // runs forever\n}"
            },
            {
                "id": 10,
                "title": "for...of Loop",
                "description": "Used to iterate over iterable values like arrays and strings.",
                "example": "let arr = [1, 2, 3];\nfor (let value of arr) {\n  console.log(value);\n}"
            },
            {
                "id": 11,
                "title": "for...in Loop",
                "description": "Used to iterate over object properties.",
                "example": "let obj = {a:1, b:2};\nfor (let key in obj) {\n  console.log(key);\n}"
            },
            {
                "id": 12,
                "title": "Loop Performance",
                "description": "Avoid unnecessary loops and reduce nested loops for better performance.",
                "example": "Use efficient conditions and avoid deep nesting"
            },
            {
                "id": 13,
                "title": "Common Mistakes",
                "description": "Forgetting increment, wrong condition, infinite loops.",
                "example": "for (let i = 0; i < 5;) // missing i++"
            },
            {
                "id": 14,
                "title": "Real-world Use Cases",
                "description": "Loops are used for iterating arrays, rendering UI, handling data, and algorithms.",
                "example": "Loop through array to display items"
            }
        ],
        "quiz": [
            {
                "question": "Which loop runs at least once?",
                "options": ["for", "while", "do...while"],
                "answer": "do...while"
            },
            {
                "question": "Which statement stops a loop?",
                "options": ["continue", "break", "stop"],
                "answer": "break"
            },
            {
                "question": "Which loop is used for arrays?",
                "options": ["for...of", "for...in", "while"],
                "answer": "for...of"
            },
            {
                "question": "What causes infinite loop?",
                "options": [
                    "Correct condition",
                    "Missing increment",
                    "Using break"
                ],
                "answer": "Missing increment"
            }
        ],
        "practice": [
            {
                "task": "Print numbers from 1 to 10 using for loop.",
                "hint": "Use i++"
            },
            {
                "task": "Print even numbers between 1 to 20.",
                "hint": "Use condition with %"
            },
            {
                "task": "Create a multiplication table of a number.",
                "hint": "Use loop from 1 to 10"
            },
            {
                "task": "Print a pattern using nested loops.",
                "hint": "Try star pattern"
            }
        ]
    },
    {
        "id": 7,
        "title": "Functions",
        "description": "Learn how to create reusable blocks of code using functions. Functions are essential for structuring programs, reducing repetition, and building scalable applications.",
        "topics": [
            {
                "id": 1,
                "title": "What is a Function?",
                "description": "A function is a block of code designed to perform a specific task and can be reused multiple times.",
                "example": "function greet() {\n  console.log('Hello');\n}"
            },
            {
                "id": 2,
                "title": "Function Declaration",
                "description": "A function declared using the function keyword.",
                "example": "function add(a, b) {\n  return a + b;\n}"
            },
            {
                "id": 3,
                "title": "Function Expression",
                "description": "A function assigned to a variable.",
                "example": "const add = function(a, b) {\n  return a + b;\n};"
            },
            {
                "id": 4,
                "title": "Arrow Functions",
                "description": "A shorter syntax for writing functions introduced in ES6.",
                "example": "const add = (a, b) => a + b;"
            },
            {
                "id": 5,
                "title": "Parameters and Arguments",
                "description": "Parameters are variables in function definition, arguments are values passed when calling.",
                "example": "function greet(name) {\n  console.log(name);\n}\ngreet('Vishal');"
            },
            {
                "id": 6,
                "title": "Return Statement",
                "description": "The return keyword sends a value back from the function.",
                "example": "function sum(a, b) {\n  return a + b;\n}"
            },
            {
                "id": 7,
                "title": "Default Parameters",
                "description": "Allows setting default values for parameters.",
                "example": "function greet(name = 'Guest') {\n  console.log(name);\n}"
            },
            {
                "id": 8,
                "title": "Function Scope",
                "description": "Variables inside a function are not accessible outside.",
                "example": "function test() {\n  let x = 10;\n}"
            },
            {
                "id": 9,
                "title": "Function Hoisting",
                "description": "Function declarations are hoisted, meaning they can be called before definition.",
                "example": "greet();\nfunction greet() {}"
            },
            {
                "id": 10,
                "title": "Anonymous Functions",
                "description": "Functions without a name, often used in expressions.",
                "example": "setTimeout(function() {\n  console.log('Hi');\n}, 1000);"
            },
            {
                "id": 11,
                "title": "Callback Functions",
                "description": "Functions passed as arguments to other functions.",
                "example": "function greet(callback) {\n  callback();\n}"
            },
            {
                "id": 12,
                "title": "Higher Order Functions",
                "description": "Functions that take other functions as arguments or return functions.",
                "example": "function higher(fn) {\n  return fn();\n}"
            },
            {
                "id": 13,
                "title": "IIFE (Immediately Invoked Function)",
                "description": "A function that runs immediately after being defined.",
                "example": "(function() {\n  console.log('Run');\n})();"
            },
            {
                "id": 14,
                "title": "Rest Parameters",
                "description": "Used to handle multiple arguments as an array.",
                "example": "function sum(...nums) {\n  return nums.reduce((a, b) => a + b);\n}"
            },
            {
                "id": 15,
                "title": "Pure vs Impure Functions",
                "description": "Pure functions return same output for same input, impure functions depend on external data.",
                "example": "Pure: add(2,3) // always 5"
            },
            {
                "id": 16,
                "title": "Common Mistakes",
                "description": "Forgetting return, misunderstanding arrow functions, scope issues.",
                "example": "function add(a,b) { a+b } // missing return"
            }
        ],
        "quiz": [
            {
                "question": "Which function syntax is shortest?",
                "options": ["function", "arrow", "expression"],
                "answer": "arrow"
            },
            {
                "question": "What does return do?",
                "options": [
                    "Stops function",
                    "Returns value",
                    "Both"
                ],
                "answer": "Both"
            },
            {
                "question": "What is a callback?",
                "options": [
                    "Normal function",
                    "Function inside loop",
                    "Function passed as argument"
                ],
                "answer": "Function passed as argument"
            },
            {
                "question": "Which function runs immediately?",
                "options": ["Arrow", "IIFE", "Callback"],
                "answer": "IIFE"
            }
        ],
        "practice": [
            {
                "task": "Create a function to add two numbers.",
                "hint": "Use return"
            },
            {
                "task": "Convert a normal function into arrow function.",
                "hint": "Use =>"
            },
            {
                "task": "Create a function with default parameter.",
                "hint": "name = 'Guest'"
            },
            {
                "task": "Create a function that takes another function as argument.",
                "hint": "callback function"
            }
        ]
    },
    {
        "id": 8,
        "title": "Scope & Hoisting",
        "description": "Learn how variable scope works and how JavaScript handles variable and function declarations internally using hoisting.",
        "topics": [
            {
                "id": 1,
                "title": "What is Scope?",
                "description": "Scope determines where variables are accessible in your code.",
                "example": "let x = 10;"
            },
            {
                "id": 2,
                "title": "Global Scope",
                "description": "Variables declared outside any function are global and can be accessed anywhere.",
                "example": "let x = 10;\nfunction test() {\n  console.log(x);\n}"
            },
            {
                "id": 3,
                "title": "Function Scope",
                "description": "Variables declared inside a function are only accessible within that function.",
                "example": "function test() {\n  let x = 5;\n}"
            },
            {
                "id": 4,
                "title": "Block Scope",
                "description": "Variables declared with let and const inside a block {} are only accessible within that block.",
                "example": "if (true) {\n  let x = 10;\n}"
            },
            {
                "id": 5,
                "title": "var vs let vs const (Scope)",
                "description": "var is function-scoped, while let and const are block-scoped.",
                "example": "if (true) {\n  var a = 1;\n  let b = 2;\n}\nconsole.log(a); // works\nconsole.log(b); // error"
            },
            {
                "id": 6,
                "title": "Lexical Scope",
                "description": "Inner functions have access to variables of outer functions.",
                "example": "function outer() {\n  let x = 10;\n  function inner() {\n    console.log(x);\n  }\n  inner();\n}"
            },
            {
                "id": 7,
                "title": "Scope Chain",
                "description": "JavaScript looks for variables from inner scope to outer scope step by step.",
                "example": "If variable not found locally, it checks parent scope"
            },
            {
                "id": 8,
                "title": "What is Hoisting?",
                "description": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.",
                "example": "console.log(a);\nvar a = 10; // undefined"
            },
            {
                "id": 9,
                "title": "Hoisting with var",
                "description": "Variables declared with var are hoisted and initialized with undefined.",
                "example": "console.log(a); // undefined\nvar a = 5;"
            },
            {
                "id": 10,
                "title": "Hoisting with let and const",
                "description": "let and const are hoisted but not initialized, leading to Temporal Dead Zone.",
                "example": "console.log(a); // error\nlet a = 10;"
            },
            {
                "id": 11,
                "title": "Temporal Dead Zone (TDZ)",
                "description": "The time between variable declaration and initialization where accessing it causes error.",
                "example": "let a;\n// TDZ ends here"
            },
            {
                "id": 12,
                "title": "Function Hoisting",
                "description": "Function declarations are fully hoisted and can be called before definition.",
                "example": "greet();\nfunction greet() {}"
            },
            {
                "id": 13,
                "title": "Function Expression Hoisting",
                "description": "Function expressions are not fully hoisted like declarations.",
                "example": "greet(); // error\nconst greet = function() {}"
            },
            {
                "id": 14,
                "title": "Common Mistakes",
                "description": "Using variables before declaration, confusion between var and let, misunderstanding scope.",
                "example": "console.log(a);\nlet a = 10; // error"
            },
            {
                "id": 15,
                "title": "Best Practices",
                "description": "Always declare variables at top, use let/const instead of var, avoid global variables.",
                "example": "Use const whenever possible"
            }
        ],
        "quiz": [
            {
                "question": "Which keyword is block scoped?",
                "options": ["var", "let", "function"],
                "answer": "let"
            },
            {
                "question": "What is hoisted with var?",
                "options": ["value", "undefined", "error"],
                "answer": "undefined"
            },
            {
                "question": "What is TDZ?",
                "options": [
                    "Error zone",
                    "Time before initialization",
                    "Global scope"
                ],
                "answer": "Time before initialization"
            },
            {
                "question": "Which is fully hoisted?",
                "options": ["function declaration", "function expression", "arrow function"],
                "answer": "function declaration"
            }
        ],
        "practice": [
            {
                "task": "Create variables using var, let, and const inside a block and test scope.",
                "hint": "Use if block"
            },
            {
                "task": "Try accessing variable before declaration using var and let.",
                "hint": "Observe difference"
            },
            {
                "task": "Create nested functions and access outer variable.",
                "hint": "Lexical scope"
            },
            {
                "task": "Call function before declaration.",
                "hint": "Test hoisting"
            }
        ]
    },
    {
        "id": 9,
        "title": "Arrays",
        "description": "Learn how to store, access, and manipulate collections of data using arrays. Arrays are one of the most important data structures in JavaScript.",
        "topics": [
            {
                "id": 1,
                "title": "What is an Array?",
                "description": "An array is a collection of multiple values stored in a single variable.",
                "example": "let arr = [1, 2, 3, 4];"
            },
            {
                "id": 2,
                "title": "Creating Arrays",
                "description": "Arrays can be created using square brackets or constructor.",
                "example": "let arr1 = [1, 2, 3];\nlet arr2 = new Array(1, 2, 3);"
            },
            {
                "id": 3,
                "title": "Accessing Elements",
                "description": "Array elements are accessed using index (starting from 0).",
                "example": "arr[0]; // first element"
            },
            {
                "id": 4,
                "title": "Updating Elements",
                "description": "You can update values using index.",
                "example": "arr[1] = 10;"
            },
            {
                "id": 5,
                "title": "Array Length",
                "description": "The length property gives number of elements.",
                "example": "arr.length;"
            },
            {
                "id": 6,
                "title": "push()",
                "description": "Adds element at the end of array.",
                "example": "arr.push(5);"
            },
            {
                "id": 7,
                "title": "pop()",
                "description": "Removes last element.",
                "example": "arr.pop();"
            },
            {
                "id": 8,
                "title": "shift()",
                "description": "Removes first element.",
                "example": "arr.shift();"
            },
            {
                "id": 9,
                "title": "unshift()",
                "description": "Adds element at beginning.",
                "example": "arr.unshift(0);"
            },
            {
                "id": 10,
                "title": "Looping Arrays",
                "description": "Use loops to iterate through arrays.",
                "example": "for (let i = 0; i < arr.length; i++) {\n  console.log(arr[i]);\n}"
            },
            {
                "id": 11,
                "title": "forEach()",
                "description": "Executes a function for each array element.",
                "example": "arr.forEach(item => console.log(item));"
            },
            {
                "id": 12,
                "title": "map()",
                "description": "Creates a new array by transforming elements.",
                "example": "let newArr = arr.map(x => x * 2);"
            },
            {
                "id": 13,
                "title": "filter()",
                "description": "Returns elements that match a condition.",
                "example": "let even = arr.filter(x => x % 2 === 0);"
            },
            {
                "id": 14,
                "title": "find()",
                "description": "Returns the first matching element.",
                "example": "arr.find(x => x > 2);"
            },
            {
                "id": 15,
                "title": "includes()",
                "description": "Checks if value exists in array.",
                "example": "arr.includes(3);"
            },
            {
                "id": 16,
                "title": "indexOf()",
                "description": "Returns index of element.",
                "example": "arr.indexOf(2);"
            },
            {
                "id": 17,
                "title": "slice()",
                "description": "Returns a portion of array without modifying original.",
                "example": "arr.slice(1, 3);"
            },
            {
                "id": 18,
                "title": "splice()",
                "description": "Adds/removes elements and modifies original array.",
                "example": "arr.splice(1, 2);"
            },
            {
                "id": 19,
                "title": "concat()",
                "description": "Merges arrays.",
                "example": "arr1.concat(arr2);"
            },
            {
                "id": 20,
                "title": "spread operator",
                "description": "Used to copy or merge arrays.",
                "example": "let newArr = [...arr1, ...arr2];"
            },
            {
                "id": 21,
                "title": "Destructuring Arrays",
                "description": "Extract values from arrays easily.",
                "example": "let [a, b] = arr;"
            },
            {
                "id": 22,
                "title": "2D Arrays",
                "description": "Arrays inside arrays (matrix).",
                "example": "let matrix = [[1,2],[3,4]];"
            },
            {
                "id": 23,
                "title": "Common Mistakes",
                "description": "Confusing map vs forEach, modifying original arrays unintentionally.",
                "example": "splice modifies original array"
            },
            {
                "id": 24,
                "title": "Best Practices",
                "description": "Use map/filter instead of loops when possible, avoid mutation.",
                "example": "Prefer immutable operations"
            }
        ],
        "quiz": [
            {
                "question": "Which method adds element at end?",
                "options": ["push", "pop", "shift"],
                "answer": "push"
            },
            {
                "question": "Which method returns new array?",
                "options": ["map", "forEach", "pop"],
                "answer": "map"
            },
            {
                "question": "Which method modifies original array?",
                "options": ["slice", "splice", "map"],
                "answer": "splice"
            },
            {
                "question": "Which method filters data?",
                "options": ["map", "filter", "find"],
                "answer": "filter"
            }
        ],
        "practice": [
            {
                "task": "Create an array of numbers and print all elements.",
                "hint": "Use loop"
            },
            {
                "task": "Find even numbers using filter.",
                "hint": "Use condition % 2"
            },
            {
                "task": "Double all values using map.",
                "hint": "Return x * 2"
            },
            {
                "task": "Merge two arrays using spread operator.",
                "hint": "Use ..."
            }
        ]
    },
    {
        "id": 10,
        "title": "Objects",
        "description": "Learn how to store and manage complex data using objects. Objects are key-value pairs and are widely used in real-world applications and APIs.",
        "topics": [
            {
                "id": 1,
                "title": "What is an Object?",
                "description": "An object is a collection of key-value pairs used to store data.",
                "example": "let user = { name: 'Vishal', age: 25 };"
            },
            {
                "id": 2,
                "title": "Creating Objects",
                "description": "Objects can be created using object literal or constructor.",
                "example": "let obj = { a: 1 };\nlet obj2 = new Object();"
            },
            {
                "id": 3,
                "title": "Accessing Properties",
                "description": "Access values using dot notation or bracket notation.",
                "example": "user.name;\nuser['age'];"
            },
            {
                "id": 4,
                "title": "Adding & Updating Properties",
                "description": "You can add or update properties dynamically.",
                "example": "user.city = 'Mumbai';\nuser.age = 26;"
            },
            {
                "id": 5,
                "title": "Deleting Properties",
                "description": "Use delete keyword to remove a property.",
                "example": "delete user.age;"
            },
            {
                "id": 6,
                "title": "Nested Objects",
                "description": "Objects can contain other objects.",
                "example": "let user = { address: { city: 'Mumbai' } };"
            },
            {
                "id": 7,
                "title": "Object Methods",
                "description": "Functions inside objects are called methods.",
                "example": "let user = {\n  greet: function() {\n    console.log('Hello');\n  }\n};"
            },
            {
                "id": 8,
                "title": "this Keyword",
                "description": "Refers to the current object inside a method.",
                "example": "let user = {\n  name: 'Vishal',\n  greet() {\n    console.log(this.name);\n  }\n};"
            },
            {
                "id": 9,
                "title": "Object.keys()",
                "description": "Returns all keys of an object.",
                "example": "Object.keys(user);"
            },
            {
                "id": 10,
                "title": "Object.values()",
                "description": "Returns all values of an object.",
                "example": "Object.values(user);"
            },
            {
                "id": 11,
                "title": "Object.entries()",
                "description": "Returns key-value pairs as arrays.",
                "example": "Object.entries(user);"
            },
            {
                "id": 12,
                "title": "Looping Objects",
                "description": "Use for...in loop to iterate over object properties.",
                "example": "for (let key in user) {\n  console.log(key, user[key]);\n}"
            },
            {
                "id": 13,
                "title": "Object Destructuring",
                "description": "Extract values from objects easily.",
                "example": "let { name, age } = user;"
            },
            {
                "id": 14,
                "title": "Spread Operator in Objects",
                "description": "Used to copy or merge objects.",
                "example": "let newUser = { ...user, city: 'Delhi' };"
            },
            {
                "id": 15,
                "title": "Shallow vs Deep Copy",
                "description": "Spread creates shallow copy, nested objects still share reference.",
                "example": "let copy = { ...user };"
            },
            {
                "id": 16,
                "title": "JSON (JavaScript Object Notation)",
                "description": "A format used to store and transfer data.",
                "example": "JSON.stringify(user);\nJSON.parse(data);"
            },
            {
                "id": 17,
                "title": "Optional Chaining",
                "description": "Safely access nested properties without errors.",
                "example": "user.address?.city;"
            },
            {
                "id": 18,
                "title": "Common Mistakes",
                "description": "Confusing dot vs bracket, forgetting this, shallow copy issues.",
                "example": "user.name vs user['name']"
            },
            {
                "id": 19,
                "title": "Best Practices",
                "description": "Use destructuring, avoid mutation, use meaningful keys.",
                "example": "Keep objects clean and readable"
            }
        ],
        "quiz": [
            {
                "question": "How to access object property?",
                "options": ["obj.name", "obj[name]", "Both"],
                "answer": "Both"
            },
            {
                "question": "Which method returns keys?",
                "options": ["Object.keys", "Object.values", "Object.entries"],
                "answer": "Object.keys"
            },
            {
                "question": "What does this refer to?",
                "options": ["Global object", "Current object", "Function"],
                "answer": "Current object"
            },
            {
                "question": "What does JSON.stringify do?",
                "options": [
                    "Convert object to string",
                    "Convert string to object",
                    "Delete object"
                ],
                "answer": "Convert object to string"
            }
        ],
        "practice": [
            {
                "task": "Create an object for a student with name, age, and marks.",
                "hint": "Use key-value pairs"
            },
            {
                "task": "Loop through object and print keys and values.",
                "hint": "Use for...in"
            },
            {
                "task": "Use destructuring to extract values.",
                "hint": "Use {}"
            },
            {
                "task": "Convert object to JSON and back.",
                "hint": "Use JSON.stringify and JSON.parse"
            }
        ]
    },
    {
        "id": 11,
        "title": "DOM Manipulation",
        "description": "Learn how JavaScript interacts with HTML using the DOM (Document Object Model). This allows you to dynamically update content, styles, and structure of a webpage.",
        "topics": [
            {
                "id": 1,
                "title": "What is DOM?",
                "description": "DOM (Document Object Model) represents the HTML document as a tree structure that JavaScript can manipulate.",
                "example": "document"
            },
            {
                "id": 2,
                "title": "Selecting Elements",
                "description": "JavaScript can select HTML elements using different methods.",
                "example": "document.getElementById('id');\ndocument.querySelector('.class');\ndocument.querySelectorAll('p');"
            },
            {
                "id": 3,
                "title": "getElementById",
                "description": "Selects an element by its id.",
                "example": "document.getElementById('demo');"
            },
            {
                "id": 4,
                "title": "querySelector",
                "description": "Selects the first matching element using CSS selector.",
                "example": "document.querySelector('.box');"
            },
            {
                "id": 5,
                "title": "querySelectorAll",
                "description": "Selects all matching elements.",
                "example": "document.querySelectorAll('p');"
            },
            {
                "id": 6,
                "title": "Changing Content",
                "description": "Modify text or HTML content.",
                "example": "element.innerText = 'Hello';\nelement.innerHTML = '<b>Hi</b>';"
            },
            {
                "id": 7,
                "title": "Changing Attributes",
                "description": "Modify element attributes like src, href, etc.",
                "example": "img.src = 'image.jpg';"
            },
            {
                "id": 8,
                "title": "Changing Styles",
                "description": "Modify CSS styles using JavaScript.",
                "example": "element.style.color = 'red';"
            },
            {
                "id": 9,
                "title": "classList",
                "description": "Add, remove, or toggle CSS classes.",
                "example": "element.classList.add('active');\nelement.classList.remove('active');\nelement.classList.toggle('active');"
            },
            {
                "id": 10,
                "title": "Creating Elements",
                "description": "Create new HTML elements dynamically.",
                "example": "let div = document.createElement('div');"
            },
            {
                "id": 11,
                "title": "Appending Elements",
                "description": "Add elements to the DOM.",
                "example": "parent.appendChild(div);\nparent.append(div);"
            },
            {
                "id": 12,
                "title": "Removing Elements",
                "description": "Remove elements from the DOM.",
                "example": "element.remove();"
            },
            {
                "id": 13,
                "title": "Traversing DOM",
                "description": "Navigate between elements.",
                "example": "element.parentElement;\nelement.children;\nelement.nextElementSibling;"
            },
            {
                "id": 14,
                "title": "Event Listeners (Intro)",
                "description": "Attach events to elements.",
                "example": "button.addEventListener('click', function() {\n  console.log('Clicked');\n});"
            },
            {
                "id": 15,
                "title": "innerText vs innerHTML",
                "description": "innerText shows text only, innerHTML parses HTML.",
                "example": "innerText = '<b>Hello</b>' vs innerHTML = '<b>Hello</b>'"
            },
            {
                "id": 16,
                "title": "Common Mistakes",
                "description": "Using wrong selectors, manipulating before DOM loads.",
                "example": "Script should run after DOM loads"
            },
            {
                "id": 17,
                "title": "Best Practices",
                "description": "Use querySelector, avoid excessive DOM updates, use classes instead of inline styles.",
                "example": "Use classList instead of style"
            }
        ],
        "quiz": [
            {
                "question": "Which method selects element by id?",
                "options": ["querySelector", "getElementById", "getElements"],
                "answer": "getElementById"
            },
            {
                "question": "Which property changes text?",
                "options": ["innerText", "value", "style"],
                "answer": "innerText"
            },
            {
                "question": "Which method creates element?",
                "options": ["createElement", "append", "add"],
                "answer": "createElement"
            },
            {
                "question": "Which adds class?",
                "options": ["style", "classList.add", "setClass"],
                "answer": "classList.add"
            }
        ],
        "practice": [
            {
                "task": "Select an element and change its text.",
                "hint": "Use innerText"
            },
            {
                "task": "Change background color of a div.",
                "hint": "Use style"
            },
            {
                "task": "Create a new paragraph and add it to body.",
                "hint": "Use createElement and append"
            },
            {
                "task": "Toggle a class on button click.",
                "hint": "Use classList.toggle"
            }
        ]
    },
    {
        "id": 12,
        "title": "Events",
        "description": "Learn how to handle user interactions like clicks, typing, and mouse actions using JavaScript events.",
        "topics": [
            {
                "id": 1,
                "title": "What are Events?",
                "description": "Events are actions that occur in the browser such as clicks, key presses, or page load.",
                "example": "click, input, submit"
            },
            {
                "id": 2,
                "title": "Event Listener",
                "description": "Use addEventListener to attach an event to an element.",
                "example": "button.addEventListener('click', () => console.log('Clicked'));"
            },
            {
                "id": 3,
                "title": "Common Events",
                "description": "Common events include click, input, change, submit, keydown, mouseover.",
                "example": "element.addEventListener('input', handler);"
            },
            {
                "id": 4,
                "title": "Click Event",
                "description": "Triggered when an element is clicked.",
                "example": "button.addEventListener('click', () => alert('Clicked'));"
            },
            {
                "id": 5,
                "title": "Input Event",
                "description": "Triggered when user types in input field.",
                "example": "input.addEventListener('input', e => console.log(e.target.value));"
            },
            {
                "id": 6,
                "title": "Submit Event",
                "description": "Triggered when a form is submitted.",
                "example": "form.addEventListener('submit', e => {\n  e.preventDefault();\n});"
            },
            {
                "id": 7,
                "title": "Event Object",
                "description": "An object automatically passed to event handler containing event details.",
                "example": "element.addEventListener('click', function(e) {\n  console.log(e);\n});"
            },
            {
                "id": 8,
                "title": "event.target",
                "description": "Refers to the element that triggered the event.",
                "example": "e.target.value;"
            },
            {
                "id": 9,
                "title": "preventDefault()",
                "description": "Prevents default browser behavior like form submission.",
                "example": "e.preventDefault();"
            },
            {
                "id": 10,
                "title": "stopPropagation()",
                "description": "Stops event from bubbling up to parent elements.",
                "example": "e.stopPropagation();"
            },
            {
                "id": 11,
                "title": "Event Bubbling",
                "description": "Event moves from child element to parent.",
                "example": "Click child triggers parent event"
            },
            {
                "id": 12,
                "title": "Event Capturing",
                "description": "Event flows from parent to child (less commonly used).",
                "example": "addEventListener('click', handler, true)"
            },
            {
                "id": 13,
                "title": "Event Delegation",
                "description": "Attach event to parent instead of multiple children.",
                "example": "parent.addEventListener('click', e => {\n  if (e.target.tagName === 'LI') {\n    console.log('Item clicked');\n  }\n});"
            },
            {
                "id": 14,
                "title": "Keyboard Events",
                "description": "Handle keyboard actions like keydown, keyup.",
                "example": "document.addEventListener('keydown', e => console.log(e.key));"
            },
            {
                "id": 15,
                "title": "Mouse Events",
                "description": "Handle mouse actions like click, hover, move.",
                "example": "div.addEventListener('mouseover', () => console.log('Hover'));"
            },
            {
                "id": 16,
                "title": "Debouncing (Basic)",
                "description": "Limits how often a function runs (useful for search input).",
                "example": "Used to reduce API calls"
            },
            {
                "id": 17,
                "title": "Common Mistakes",
                "description": "Forgetting preventDefault, multiple listeners, wrong target.",
                "example": "Form reload without preventDefault"
            },
            {
                "id": 18,
                "title": "Best Practices",
                "description": "Use event delegation, avoid inline events, clean up listeners.",
                "example": "Prefer addEventListener"
            }
        ],
        "quiz": [
            {
                "question": "Which method attaches event?",
                "options": ["addEventListener", "onclick", "attach"],
                "answer": "addEventListener"
            },
            {
                "question": "What does preventDefault do?",
                "options": [
                    "Stops event",
                    "Stops default behavior",
                    "Stops bubbling"
                ],
                "answer": "Stops default behavior"
            },
            {
                "question": "Event moves from child to parent is?",
                "options": ["Capturing", "Bubbling", "Propagation"],
                "answer": "Bubbling"
            },
            {
                "question": "Which is best for many elements?",
                "options": ["Multiple listeners", "Delegation", "Loop"],
                "answer": "Delegation"
            }
        ],
        "practice": [
            {
                "task": "Add click event to a button.",
                "hint": "Use addEventListener"
            },
            {
                "task": "Create input box and log value on typing.",
                "hint": "Use input event"
            },
            {
                "task": "Prevent form reload on submit.",
                "hint": "Use preventDefault"
            },
            {
                "task": "Use event delegation on list items.",
                "hint": "Attach event to parent"
            }
        ]
    },
    {
        "id": 13,
        "title": "ES6+ Features",
        "description": "Learn modern JavaScript features introduced in ES6 and later versions. These features make code cleaner, shorter, and more powerful.",
        "topics": [
            {
                "id": 1,
                "title": "What is ES6?",
                "description": "ES6 (ECMAScript 2015) introduced major improvements to JavaScript including new syntax and features.",
                "example": "Modern JS = ES6+"
            },
            {
                "id": 2,
                "title": "let and const",
                "description": "Block-scoped variables replacing var.",
                "example": "let x = 10;\nconst y = 20;"
            },
            {
                "id": 3,
                "title": "Arrow Functions",
                "description": "Shorter syntax for writing functions and does not have its own this.",
                "example": "const add = (a, b) => a + b;"
            },
            {
                "id": 4,
                "title": "Template Literals",
                "description": "Use backticks to create strings with embedded expressions.",
                "example": "let name = 'Vishal'; \n `Hello $ {name}`;"
            },
            {
                "id": 5,
                "title": "Destructuring",
                "description": "Extract values from arrays or objects easily.",
                "example": "let [a, b] = [1, 2];\nlet {name} = user;"
            },
            {
                "id": 6,
                "title": "Spread Operator",
                "description": "Used to expand arrays or objects.",
                "example": "let arr = [1, 2];\nlet newArr = [...arr, 3];"
            },
            {
                "id": 7,
                "title": "Rest Parameters",
                "description": "Collect multiple arguments into an array.",
                "example": "function sum(...nums) {\n  return nums.reduce((a,b)=>a+b);\n}"
            },
            {
                "id": 8,
                "title": "Default Parameters",
                "description": "Set default values for function parameters.",
                "example": "function greet(name = 'Guest') {}"
            },
            {
                "id": 9,
                "title": "Enhanced Object Literals",
                "description": "Shorter syntax for objects.",
                "example": "let name = 'Vishal';\nlet user = { name };"
            },
            {
                "id": 10,
                "title": "Optional Chaining",
                "description": "Safely access nested properties without errors.",
                "example": "user.address?.city;"
            },
            {
                "id": 11,
                "title": "Nullish Coalescing",
                "description": "Returns right value only if left is null or undefined.",
                "example": "let val = input ?? 'default';"
            },
            {
                "id": 12,
                "title": "Modules (import/export)",
                "description": "Split code into reusable files.",
                "example": "export const x = 10;\nimport { x } from './file.js';"
            },
            {
                "id": 13,
                "title": "Promises (Intro)",
                "description": "Handle asynchronous operations.",
                "example": "new Promise((resolve, reject) => {});"
            },
            {
                "id": 14,
                "title": "Classes",
                "description": "Blueprint for creating objects.",
                "example": "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}"
            },
            {
                "id": 15,
                "title": "Common Mistakes",
                "description": "Confusing spread and rest, misuse of arrow functions, destructuring errors.",
                "example": "...arr vs ...args"
            },
            {
                "id": 16,
                "title": "Best Practices",
                "description": "Use const by default, prefer arrow functions, use destructuring for clean code.",
                "example": "Write modern clean JS"
            }
        ],
        "quiz": [
            {
                "question": "Which is used for string interpolation?",
                "options": ["''", "\"\"", "``"],
                "answer": "``"
            },
            {
                "question": "Which operator spreads array?",
                "options": ["...", "&&", "??"],
                "answer": "..."
            },
            {
                "question": "What does ?? check?",
                "options": ["false", "null/undefined", "0"],
                "answer": "null/undefined"
            },
            {
                "question": "Which is block scoped?",
                "options": ["var", "let", "function"],
                "answer": "let"
            }
        ],
        "practice": [
            {
                "task": "Use template literals to print name.",
                "hint": "Use backticks"
            },
            {
                "task": "Merge arrays using spread operator.",
                "hint": "Use ..."
            },
            {
                "task": "Extract values using destructuring.",
                "hint": "Use [] or {}"
            },
            {
                "task": "Create a simple class.",
                "hint": "Use constructor"
            }
        ]
    },
    {
        "id": 14,
        "title": "Error Handling",
        "description": "Learn how to handle errors in JavaScript using try, catch, throw, and finally. Error handling helps prevent crashes and makes applications more stable.",
        "topics": [
            {
                "id": 1,
                "title": "What is an Error?",
                "description": "An error is a problem that occurs during code execution that stops the program.",
                "example": "console.log(x); // x is not defined"
            },
            {
                "id": 2,
                "title": "Types of Errors",
                "description": "Common types include Syntax Error, Reference Error, and Type Error.",
                "example": "SyntaxError, ReferenceError, TypeError"
            },
            {
                "id": 3,
                "title": "try...catch",
                "description": "Used to catch and handle runtime errors.",
                "example": "try {\n  let x = y;\n} catch (err) {\n  console.log(err.message);\n}"
            },
            {
                "id": 4,
                "title": "try...catch...finally",
                "description": "finally block always executes whether error occurs or not.",
                "example": "try {\n  // code\n} catch (err) {\n  // handle\n} finally {\n  console.log('Always runs');\n}"
            },
            {
                "id": 5,
                "title": "throw Statement",
                "description": "Used to create custom errors.",
                "example": "throw new Error('Something went wrong');"
            },
            {
                "id": 6,
                "title": "Custom Error Messages",
                "description": "You can throw custom error messages.",
                "example": "if (age < 18) {\n  throw new Error('Not allowed');\n}"
            },
            {
                "id": 7,
                "title": "Error Object",
                "description": "Error object contains name and message properties.",
                "example": "err.name;\nerr.message;"
            },
            {
                "id": 8,
                "title": "Optional Catch Binding",
                "description": "Catch block can omit error parameter.",
                "example": "try {\n  // code\n} catch {\n  console.log('Error');\n}"
            },
            {
                "id": 9,
                "title": "Handling Async Errors",
                "description": "Use try-catch with async/await or .catch() with promises.",
                "example": "async function test() {\n  try {\n    await fetch('url');\n  } catch (err) {}\n}"
            },
            {
                "id": 10,
                "title": "Common Mistakes",
                "description": "Overusing try-catch, not handling errors properly, ignoring errors.",
                "example": "Empty catch block"
            },
            {
                "id": 11,
                "title": "Best Practices",
                "description": "Handle errors gracefully, log errors, avoid silent failures.",
                "example": "Always show meaningful messages"
            }
        ],
        "quiz": [
            {
                "question": "Which block always runs?",
                "options": ["try", "catch", "finally"],
                "answer": "finally"
            },
            {
                "question": "Which keyword throws error?",
                "options": ["throw", "error", "catch"],
                "answer": "throw"
            },
            {
                "question": "Which error occurs for undefined variable?",
                "options": ["TypeError", "ReferenceError", "SyntaxError"],
                "answer": "ReferenceError"
            },
            {
                "question": "Where to handle async errors?",
                "options": ["try-catch", ".catch()", "Both"],
                "answer": "Both"
            }
        ],
        "practice": [
            {
                "task": "Write code using try-catch to handle error.",
                "hint": "Use undefined variable"
            },
            {
                "task": "Throw a custom error for invalid age.",
                "hint": "Use throw"
            },
            {
                "task": "Use finally block in example.",
                "hint": "Add cleanup code"
            },
            {
                "task": "Handle error in async function.",
                "hint": "Use try-catch with await"
            }
        ]
    },
    {
        "id": 15,
        "title": "Async JavaScript",
        "description": "Learn how JavaScript handles asynchronous operations like API calls, timers, and events using callbacks, promises, and async/await.",
        "topics": [
            {
                "id": 1,
                "title": "Synchronous vs Asynchronous",
                "description": "Synchronous code runs line by line, while asynchronous code runs in the background without blocking execution.",
                "example": "console.log('A');\nsetTimeout(() => console.log('B'), 1000);\nconsole.log('C'); // A C B"
            },
            {
                "id": 2,
                "title": "What is Asynchronous JS?",
                "description": "JavaScript can execute tasks like API calls or timers without blocking the main thread.",
                "example": "setTimeout(() => console.log('Hello'), 1000);"
            },
            {
                "id": 3,
                "title": "Callback Functions",
                "description": "Functions passed as arguments to be executed later.",
                "example": "setTimeout(() => console.log('Done'), 1000);"
            },
            {
                "id": 4,
                "title": "Callback Hell",
                "description": "Nested callbacks leading to unreadable code.",
                "example": "callback inside callback inside callback"
            },
            {
                "id": 5,
                "title": "Promises",
                "description": "Promises represent a future value and avoid callback hell.",
                "example": "let p = new Promise((res, rej) => {\n  res('Success');\n});"
            },
            {
                "id": 6,
                "title": "Promise States",
                "description": "A promise can be pending, fulfilled, or rejected.",
                "example": "pending -> fulfilled/rejected"
            },
            {
                "id": 7,
                "title": "then() and catch()",
                "description": "Handle resolved and rejected promises.",
                "example": "fetch(url)\n.then(res => res.json())\n.catch(err => console.log(err));"
            },
            {
                "id": 8,
                "title": "finally()",
                "description": "Runs after promise is settled (success or failure).",
                "example": "promise.finally(() => console.log('Done'));"
            },
            {
                "id": 9,
                "title": "Promise Chaining",
                "description": "Execute multiple async operations in sequence.",
                "example": "fetch(url)\n.then(res => res.json())\n.then(data => console.log(data));"
            },
            {
                "id": 10,
                "title": "async and await",
                "description": "Modern way to handle asynchronous code using cleaner syntax.",
                "example": "async function getData() {\n  let res = await fetch(url);\n}"
            },
            {
                "id": 11,
                "title": "Error Handling in Async",
                "description": "Use try-catch with async/await.",
                "example": "try {\n  await fetch(url);\n} catch (err) {}"
            },
            {
                "id": 12,
                "title": "setTimeout",
                "description": "Executes code after a delay.",
                "example": "setTimeout(() => console.log('Hi'), 1000);"
            },
            {
                "id": 13,
                "title": "setInterval",
                "description": "Executes code repeatedly after interval.",
                "example": "setInterval(() => console.log('Run'), 1000);"
            },
            {
                "id": 14,
                "title": "clearTimeout & clearInterval",
                "description": "Stops timers.",
                "example": "clearTimeout(id);\nclearInterval(id);"
            },
            {
                "id": 15,
                "title": "Event Loop (Basic)",
                "description": "Handles execution of async tasks in JavaScript.",
                "example": "Call stack + queue"
            },
            {
                "id": 16,
                "title": "Common Mistakes",
                "description": "Forgetting await, mixing async styles, not handling errors.",
                "example": "Missing await causes unexpected behavior"
            },
            {
                "id": 17,
                "title": "Best Practices",
                "description": "Use async/await over callbacks, always handle errors, keep code readable.",
                "example": "Prefer async/await"
            }
        ],
        "quiz": [
            {
                "question": "Which runs first?",
                "options": ["setTimeout", "console.log", "Both same"],
                "answer": "console.log"
            },
            {
                "question": "Promise has how many states?",
                "options": ["2", "3", "4"],
                "answer": "3"
            },
            {
                "question": "Which is modern async approach?",
                "options": ["callback", "promise", "async/await"],
                "answer": "async/await"
            },
            {
                "question": "Which handles errors in promise?",
                "options": ["then", "catch", "map"],
                "answer": "catch"
            }
        ],
        "practice": [
            {
                "task": "Use setTimeout to print message after 2 seconds.",
                "hint": "Use 2000 ms"
            },
            {
                "task": "Create a promise that resolves after 1 second.",
                "hint": "Use setTimeout inside Promise"
            },
            {
                "task": "Fetch data using async/await.",
                "hint": "Use fetch API"
            },
            {
                "task": "Handle error using try-catch in async function.",
                "hint": "Wrap await inside try"
            }
        ]
    },
    {
        "id": 16,
        "title": "Local Storage",
        "description": "Learn how to store data in the browser using Local Storage. This allows data to persist even after page refresh or browser restart.",
        "topics": [
            {
                "id": 1,
                "title": "What is Local Storage?",
                "description": "Local Storage is a web storage API that allows storing key-value pairs in the browser.",
                "example": "localStorage"
            },
            {
                "id": 2,
                "title": "Why Use Local Storage?",
                "description": "Used to store data like user preferences, login info, cart data without a backend.",
                "example": "Save theme, save user data"
            },
            {
                "id": 3,
                "title": "setItem()",
                "description": "Used to store data in local storage.",
                "example": "localStorage.setItem('name', 'Vishal');"
            },
            {
                "id": 4,
                "title": "getItem()",
                "description": "Used to retrieve data from local storage.",
                "example": "localStorage.getItem('name');"
            },
            {
                "id": 5,
                "title": "removeItem()",
                "description": "Removes a specific item.",
                "example": "localStorage.removeItem('name');"
            },
            {
                "id": 6,
                "title": "clear()",
                "description": "Removes all data from local storage.",
                "example": "localStorage.clear();"
            },
            {
                "id": 7,
                "title": "Storing Only Strings",
                "description": "Local Storage stores only strings, so objects must be converted.",
                "example": "localStorage.setItem('age', '25');"
            },
            {
                "id": 8,
                "title": "JSON.stringify()",
                "description": "Convert object to string before storing.",
                "example": "localStorage.setItem('user', JSON.stringify(user));"
            },
            {
                "id": 9,
                "title": "JSON.parse()",
                "description": "Convert string back to object.",
                "example": "let user = JSON.parse(localStorage.getItem('user'));"
            },
            {
                "id": 10,
                "title": "Storage Limit",
                "description": "Local storage has limited size (around 5MB).",
                "example": "Small data only"
            },
            {
                "id": 11,
                "title": "Session Storage",
                "description": "Similar to local storage but data is cleared when tab is closed.",
                "example": "sessionStorage.setItem('key', 'value');"
            },
            {
                "id": 12,
                "title": "Local vs Session Storage",
                "description": "Local persists permanently, session lasts only for tab.",
                "example": "localStorage vs sessionStorage"
            },
            {
                "id": 13,
                "title": "Common Mistakes",
                "description": "Forgetting JSON.stringify, storing large data, not handling null values.",
                "example": "JSON.parse(null) error"
            },
            {
                "id": 14,
                "title": "Best Practices",
                "description": "Store minimal data, avoid sensitive data, handle null safely.",
                "example": "Check before parsing"
            }
        ],
        "quiz": [
            {
                "question": "Which method stores data?",
                "options": ["getItem", "setItem", "clear"],
                "answer": "setItem"
            },
            {
                "question": "Local storage stores?",
                "options": ["objects", "strings", "numbers"],
                "answer": "strings"
            },
            {
                "question": "Which clears all data?",
                "options": ["removeItem", "clear", "delete"],
                "answer": "clear"
            },
            {
                "question": "Which persists after refresh?",
                "options": ["sessionStorage", "localStorage", "memory"],
                "answer": "localStorage"
            }
        ],
        "practice": [
            {
                "task": "Store your name in local storage.",
                "hint": "Use setItem"
            },
            {
                "task": "Retrieve and display stored value.",
                "hint": "Use getItem"
            },
            {
                "task": "Store an object using JSON.",
                "hint": "Use stringify"
            },
            {
                "task": "Remove stored item.",
                "hint": "Use removeItem"
            }
        ]
    },
    {
        "id": 17,
        "title": "Browser APIs",
        "description": "Learn how to use built-in browser APIs like fetch, geolocation, and others to build real-world applications.",
        "topics": [
            {
                "id": 1,
                "title": "What are Browser APIs?",
                "description": "Browser APIs are built-in features provided by the browser to interact with the environment.",
                "example": "fetch(), navigator, window"
            },
            {
                "id": 2,
                "title": "Fetch API",
                "description": "Used to make HTTP requests to get or send data.",
                "example": "fetch(url)\n.then(res => res.json())\n.then(data => console.log(data));"
            },
            {
                "id": 3,
                "title": "Fetch with async/await",
                "description": "Modern way to handle API calls.",
                "example": "async function getData() {\n  let res = await fetch(url);\n  let data = await res.json();\n}"
            },
            {
                "id": 4,
                "title": "Handling API Errors",
                "description": "Check response status and handle errors.",
                "example": "if (!res.ok) throw new Error('Error');"
            },
            {
                "id": 5,
                "title": "Geolocation API",
                "description": "Get user's current location.",
                "example": "navigator.geolocation.getCurrentPosition(pos => {\n  console.log(pos.coords.latitude);\n});"
            },
            {
                "id": 6,
                "title": "Clipboard API",
                "description": "Copy and paste text programmatically.",
                "example": "navigator.clipboard.writeText('Hello');"
            },
            {
                "id": 7,
                "title": "Window Object",
                "description": "Represents browser window and provides methods.",
                "example": "window.alert('Hello');"
            },
            {
                "id": 8,
                "title": "Location Object",
                "description": "Provides information about current URL.",
                "example": "window.location.href;"
            },
            {
                "id": 9,
                "title": "History API",
                "description": "Allows navigation through browser history.",
                "example": "history.back();"
            },
            {
                "id": 10,
                "title": "Navigator Object",
                "description": "Provides browser and device information.",
                "example": "navigator.userAgent;"
            },
            {
                "id": 11,
                "title": "setTimeout & setInterval",
                "description": "Timers for delayed or repeated execution.",
                "example": "setTimeout(() => console.log('Hi'), 1000);"
            },
            {
                "id": 12,
                "title": "FormData API",
                "description": "Used to collect form data easily.",
                "example": "let formData = new FormData(form);"
            },
            {
                "id": 13,
                "title": "URL API",
                "description": "Used to work with URLs.",
                "example": "new URL(window.location.href);"
            },
            {
                "id": 14,
                "title": "Common Mistakes",
                "description": "Not handling async properly, ignoring errors, permission issues (like geolocation).",
                "example": "Location requires user permission"
            },
            {
                "id": 15,
                "title": "Best Practices",
                "description": "Always handle errors, use async/await, respect user privacy.",
                "example": "Check permissions before using APIs"
            }
        ],
        "quiz": [
            {
                "question": "Which API is used for HTTP requests?",
                "options": ["fetch", "navigator", "window"],
                "answer": "fetch"
            },
            {
                "question": "Which API gets location?",
                "options": ["clipboard", "geolocation", "history"],
                "answer": "geolocation"
            },
            {
                "question": "Which object gives URL?",
                "options": ["navigator", "location", "window"],
                "answer": "location"
            },
            {
                "question": "Which API copies text?",
                "options": ["clipboard", "fetch", "history"],
                "answer": "clipboard"
            }
        ],
        "practice": [
            {
                "task": "Fetch data from a public API.",
                "hint": "Use fetch"
            },
            {
                "task": "Get user's location.",
                "hint": "Use geolocation"
            },
            {
                "task": "Copy text to clipboard.",
                "hint": "Use clipboard API"
            },
            {
                "task": "Display current URL.",
                "hint": "Use location.href"
            }
        ]
    }
]