export let htmlCourse = [
    {
        "id": 1,
        "title": "Introduction",
        "description": "Learn what HTML is, why it is used, and how it forms the foundation of every website.",
        "topics": [
            {
                "id": 1,
                "title": "What is HTML?",
                "description": "HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It uses tags to define elements like headings, paragraphs, images, and links.",
                "example": "Hello World"
            },
            {
                "id": 2,
                "title": "Why HTML is Important",
                "description": "HTML is the backbone of all websites. Without HTML, browsers would not know how to display content. It works together with CSS (for styling) and JavaScript (for interactivity).",
                "example": "This is a simple paragraph on a webpage"
            },
            {
                "id": 3,
                "title": "HTML as Structure (Skeleton)",
                "description": "HTML provides the structure of a webpage, just like a skeleton gives structure to the human body. CSS adds design, and JavaScript adds behavior.",
                "example": "\n  My Website\n  Welcome to my page\n"
            },
            {
                "id": 4,
                "title": "How HTML Works",
                "description": "Web browsers read HTML files and render them into visual web pages. HTML tags are not shown directly but are used to display content correctly.",
                "example": ""
            },
            {
                "id": 5,
                "title": "HTML File Extension",
                "description": "HTML files are saved with .html or .htm extension and can be opened in any web browser like Chrome, Edge, or Firefox.",
                "example": "index.html"
            },
            {
                "id": 6,
                "title": "First Simple HTML Page",
                "description": "You can create a basic HTML page using simple tags and open it in a browser to see the output.",
                "example": "\n\n\n  My First Webpage\n  This is my first HTML page\n\n"
            }
        ],
        "quiz": [
            {
                "question": "What does HTML stand for?",
                "options": [
                    "Hyper Trainer Marking Language",
                    "HyperText Markup Language",
                    "HyperText Marketing Language"
                ],
                "answer": "HyperText Markup Language"
            },
            {
                "question": "What is the role of HTML?",
                "options": [
                    "Styling web pages",
                    "Structuring web pages",
                    "Adding interactivity"
                ],
                "answer": "Structuring web pages"
            }
        ],
        "practice": [
            {
                "task": "Create a simple HTML page with a heading and a paragraph.",
                "hint": "Use  for heading and  for paragraph."
            },
            {
                "task": "Save a file as index.html and open it in your browser.",
                "hint": "Right-click → Open with browser"
            }
        ]
    },
    {
        "id": 2,
        "title": "Basic Structure",
        "description": "Learn the standard structure of an HTML document including doctype, html, head, and body tags.",
        "topics": [
            {
                "id": 1,
                "title": "HTML Document Structure",
                "description": "Every HTML page follows a standard structure with doctype, html, head, and body.",
                "example": "<!DOCTYPE html>\n<html>\n<head>\n<title>My Page</title>\n</head>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>"
            },
            {
                "id": 2,
                "title": "DOCTYPE Declaration",
                "description": "The DOCTYPE tells the browser that this is an HTML5 document.",
                "example": "<!DOCTYPE html>"
            },
            {
                "id": 3,
                "title": "HTML Tag",
                "description": "The html tag is the root element of the page.",
                "example": "<html>\n</html>"
            },
            {
                "id": 4,
                "title": "Head Tag",
                "description": "The head contains metadata like title and links.",
                "example": "<head>\n<title>My Website</title>\n</head>"
            },
            {
                "id": 5,
                "title": "Title Tag",
                "description": "The title appears on the browser tab.",
                "example": "<title>My Page</title>"
            },
            {
                "id": 6,
                "title": "Body Tag",
                "description": "The body contains all visible content.",
                "example": "<body>\n<h1>Welcome</h1>\n<p>This is my page</p>\n</body>"
            }
        ],
        "quiz": [
            {
                "question": "Which tag is the root element?",
                "options": ["body", "html", "head"],
                "answer": "html"
            },
            {
                "question": "Where is visible content placed?",
                "options": ["head", "body", "title"],
                "answer": "body"
            }
        ],
        "practice": [
            {
                "task": "Create a basic HTML page with a heading.",
                "hint": "Use html, head, body and h1 tags."
            }
        ]
    },
    {
        "id": 3,
        "title": "Tags & Elements",
        "description": "Understand how HTML uses tags and elements to structure content, including nesting, attributes, and different types of elements.",
        "topics": [
            {
                "id": 1,
                "title": "What are HTML Tags?",
                "description": "HTML tags are keywords enclosed in angle brackets used to define elements and structure content on a webpage.",
                "example": "<p>This is a paragraph</p>"
            },
            {
                "id": 2,
                "title": "Opening and Closing Tags",
                "description": "Most HTML tags have an opening tag and a closing tag. The closing tag includes a forward slash.",
                "example": "<h1>Hello</h1>"
            },
            {
                "id": 3,
                "title": "What are HTML Elements?",
                "description": "An HTML element is made up of an opening tag, content, and a closing tag.",
                "example": "<p>This is an element</p>"
            },
            {
                "id": 4,
                "title": "Nested Elements",
                "description": "HTML elements can be placed inside other elements. Proper nesting is important for correct structure.",
                "example": "<div><p>Nested paragraph</p></div>"
            },
            {
                "id": 5,
                "title": "Empty (Self-Closing) Tags",
                "description": "Some tags do not have closing tags. These are called empty elements.",
                "example": "<br> <hr> <img src=\"image.jpg\">"
            },
            {
                "id": 6,
                "title": "Attributes in Elements",
                "description": "Attributes provide extra information about elements and are written inside the opening tag.",
                "example": "<a href=\"https://example.com\">Visit</a>"
            },
            {
                "id": 7,
                "title": "Block Elements",
                "description": "Block elements take full width and start on a new line.",
                "example": "<div>Block Element</div>"
            },
            {
                "id": 8,
                "title": "Inline Elements",
                "description": "Inline elements take only the required width and do not start on a new line.",
                "example": "<span>Inline Element</span>"
            },
            {
                "id": 9,
                "title": "Common Block Elements",
                "description": "Some commonly used block elements include div, p, h1 to h6, and section.",
                "example": "<div><p>Text</p></div>"
            },
            {
                "id": 10,
                "title": "Common Inline Elements",
                "description": "Some commonly used inline elements include span, a, img, and strong.",
                "example": "<span>Text</span> <a href=\"#\">Link</a>"
            },
            {
                "id": 11,
                "title": "Case Sensitivity",
                "description": "HTML is not case-sensitive, but it is recommended to use lowercase for consistency and best practices.",
                "example": "<p>Good Practice</p>"
            },
            {
                "id": 12,
                "title": "Proper Nesting Rules",
                "description": "Tags must be properly nested. Incorrect nesting can break layout and structure.",
                "example": "Correct: <p><b>Text</b></p> | Incorrect: <p><b>Text</p></b>"
            }
        ],
        "quiz": [
            {
                "question": "What is an HTML element?",
                "options": [
                    "Only opening tag",
                    "Opening tag + content + closing tag",
                    "Only content"
                ],
                "answer": "Opening tag + content + closing tag"
            },
            {
                "question": "Which is an empty tag?",
                "options": ["div", "p", "br"],
                "answer": "br"
            },
            {
                "question": "Which is a block element?",
                "options": ["span", "div", "a"],
                "answer": "div"
            },
            {
                "question": "Where are attributes written?",
                "options": [
                    "Inside closing tag",
                    "Inside opening tag",
                    "Outside element"
                ],
                "answer": "Inside opening tag"
            }
        ],
        "practice": [
            {
                "task": "Create a div containing a heading and a paragraph.",
                "hint": "Use nesting: div > h1 + p"
            },
            {
                "task": "Add a link with an href attribute.",
                "hint": "Use anchor tag with href"
            },
            {
                "task": "Use both block and inline elements in one example.",
                "hint": "Try div and span together"
            }
        ]
    },
    {
        "id": 4,
        "title": "Lists & Links",
        "description": "Learn how to organize content using lists and navigate between pages using links. These are essential for building real-world websites.",
        "topics": [
            {
                "id": 1,
                "title": "What are Lists?",
                "description": "Lists are used to group related items together in a structured way. HTML provides ordered, unordered, and description lists.",
                "example": "<ul><li>Item 1</li><li>Item 2</li></ul>"
            },
            {
                "id": 2,
                "title": "Unordered List (ul)",
                "description": "Unordered lists display items with bullet points. Used when order does not matter.",
                "example": "<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>"
            },
            {
                "id": 3,
                "title": "Ordered List (ol)",
                "description": "Ordered lists display items in a numbered format. Used when order is important.",
                "example": "<ol>\n  <li>Step 1</li>\n  <li>Step 2</li>\n</ol>"
            },
            {
                "id": 4,
                "title": "List Item (li)",
                "description": "Each item inside a list is defined using the li tag.",
                "example": "<li>This is a list item</li>"
            },
            {
                "id": 5,
                "title": "Nested Lists",
                "description": "Lists can be nested inside other lists to create sub-items.",
                "example": "<ul>\n  <li>Fruits\n    <ul>\n      <li>Apple</li>\n      <li>Mango</li>\n    </ul>\n  </li>\n</ul>"
            },
            {
                "id": 6,
                "title": "Description List (dl)",
                "description": "Description lists are used to display terms and their descriptions.",
                "example": "<dl>\n  <dt>HTML</dt>\n  <dd>Markup language</dd>\n</dl>"
            },
            {
                "id": 7,
                "title": "What are Links?",
                "description": "Links are used to navigate from one page to another using the anchor tag.",
                "example": "<a href=\"https://google.com\">Go to Google</a>"
            },
            {
                "id": 8,
                "title": "Anchor Tag (a)",
                "description": "The anchor tag is used to create hyperlinks. The href attribute specifies the destination.",
                "example": "<a href=\"https://example.com\">Visit</a>"
            },
            {
                "id": 9,
                "title": "Absolute vs Relative Links",
                "description": "Absolute links use full URLs, while relative links point to files within the same project.",
                "example": "Absolute: https://google.com | Relative: about.html"
            },
            {
                "id": 10,
                "title": "Open Link in New Tab",
                "description": "Use target=\"_blank\" to open a link in a new browser tab.",
                "example": "<a href=\"https://google.com\" target=\"_blank\">Open</a>"
            },
            {
                "id": 11,
                "title": "Email Links",
                "description": "You can create clickable email links using mailto.",
                "example": "<a href=\"mailto:test@example.com\">Send Email</a>"
            },
            {
                "id": 12,
                "title": "Linking to Sections (Anchor Links)",
                "description": "Links can jump to specific sections of the same page using id.",
                "example": "<a href=\"#section1\">Go</a>\n<h2 id=\"section1\">Section</h2>"
            },
            {
                "id": 13,
                "title": "Image as Link",
                "description": "Images can be wrapped inside anchor tags to make them clickable.",
                "example": "<a href=\"https://example.com\"><img src=\"img.jpg\"></a>"
            },
            {
                "id": 14,
                "title": "Best Practices for Links",
                "description": "Use meaningful link text, avoid 'click here', and always provide valid URLs.",
                "example": "<a href=\"/contact\">Contact Us</a>"
            }
        ],
        "quiz": [
            {
                "question": "Which tag is used for unordered lists?",
                "options": ["ol", "ul", "li"],
                "answer": "ul"
            },
            {
                "question": "Which attribute defines the link destination?",
                "options": ["src", "href", "link"],
                "answer": "href"
            },
            {
                "question": "How to open link in new tab?",
                "options": ["target=_self", "target=_blank", "new=true"],
                "answer": "target=_blank"
            },
            {
                "question": "Which list shows numbers?",
                "options": ["ul", "ol", "dl"],
                "answer": "ol"
            }
        ],
        "practice": [
            {
                "task": "Create an unordered list of your 5 favorite foods.",
                "hint": "Use ul and li tags"
            },
            {
                "task": "Create an ordered list of steps to make tea.",
                "hint": "Use ol and li"
            },
            {
                "task": "Create a link that opens Google in a new tab.",
                "hint": "Use target=_blank"
            },
            {
                "task": "Create a nested list with categories and subcategories.",
                "hint": "Use ul inside li"
            }
        ]
    },
    {
        "id": 5,
        "title": "Forms",
        "description": "Learn how to collect user input using HTML forms. Forms are essential for login pages, signup pages, search bars, and connecting frontend with backend.",
        "topics": [
            {
                "id": 1,
                "title": "What is a Form?",
                "description": "A form is used to collect user input and send it to a server for processing.",
                "example": "<form></form>"
            },
            {
                "id": 2,
                "title": "Form Tag (form)",
                "description": "The form tag is the container for all input elements. It can send data using GET or POST methods.",
                "example": "<form action=\"/submit\" method=\"POST\"></form>"
            },
            {
                "id": 3,
                "title": "Input Field (input)",
                "description": "The input tag is used to take user input. It supports different types like text, password, email, etc.",
                "example": "<input type=\"text\" placeholder=\"Enter name\">"
            },
            {
                "id": 4,
                "title": "Common Input Types",
                "description": "HTML supports various input types such as text, password, email, number, date, and file.",
                "example": "<input type=\"email\">\n<input type=\"password\">\n<input type=\"number\">"
            },
            {
                "id": 5,
                "title": "Label Tag (label)",
                "description": "Labels are used to define a label for input fields, improving accessibility.",
                "example": "<label for=\"name\">Name:</label>\n<input id=\"name\" type=\"text\">"
            },
            {
                "id": 6,
                "title": "Textarea",
                "description": "Textarea is used for multi-line text input such as comments or messages.",
                "example": "<textarea rows=\"4\" cols=\"30\"></textarea>"
            },
            {
                "id": 7,
                "title": "Radio Buttons",
                "description": "Radio buttons allow users to select one option from a group.",
                "example": "<input type=\"radio\" name=\"gender\"> Male\n<input type=\"radio\" name=\"gender\"> Female"
            },
            {
                "id": 8,
                "title": "Checkbox",
                "description": "Checkboxes allow users to select multiple options.",
                "example": "<input type=\"checkbox\"> Cricket\n<input type=\"checkbox\"> Football"
            },
            {
                "id": 9,
                "title": "Select Dropdown",
                "description": "Dropdown lists allow users to select one option from many.",
                "example": "<select>\n<option>India</option>\n<option>USA</option>\n</select>"
            },
            {
                "id": 10,
                "title": "Button",
                "description": "Buttons are used to submit or reset forms.",
                "example": "<button type=\"submit\">Submit</button>"
            },
            {
                "id": 11,
                "title": "Form Attributes",
                "description": "Important attributes include action (where data is sent) and method (GET or POST).",
                "example": "<form action=\"/login\" method=\"POST\"></form>"
            },
            {
                "id": 12,
                "title": "GET vs POST",
                "description": "GET sends data in URL and is less secure, while POST sends data in request body and is more secure.",
                "example": "GET: /login?name=John | POST: Data hidden in request body"
            },
            {
                "id": 13,
                "title": "Required Attribute",
                "description": "The required attribute ensures that a field must be filled before submitting.",
                "example": "<input type=\"text\" required>"
            },
            {
                "id": 14,
                "title": "Placeholder Attribute",
                "description": "Placeholder shows a hint inside the input field.",
                "example": "<input type=\"text\" placeholder=\"Enter your name\">"
            },
            {
                "id": 15,
                "title": "Name Attribute",
                "description": "The name attribute is used to identify form data when sending it to the server.",
                "example": "<input type=\"text\" name=\"username\">"
            }
        ],
        "quiz": [
            {
                "question": "Which tag is used to create a form?",
                "options": ["input", "form", "label"],
                "answer": "form"
            },
            {
                "question": "Which input type hides text?",
                "options": ["text", "password", "email"],
                "answer": "password"
            },
            {
                "question": "Which attribute makes a field mandatory?",
                "options": ["required", "placeholder", "name"],
                "answer": "required"
            },
            {
                "question": "Which method is more secure?",
                "options": ["GET", "POST", "Both same"],
                "answer": "POST"
            }
        ],
        "practice": [
            {
                "task": "Create a login form with username and password.",
                "hint": "Use input type text and password"
            },
            {
                "task": "Create a registration form with name, email, and gender.",
                "hint": "Use input, radio buttons, and labels"
            },
            {
                "task": "Create a dropdown for selecting country.",
                "hint": "Use select and option tags"
            },
            {
                "task": "Make a form where all fields are required.",
                "hint": "Use required attribute"
            }
        ]
    },
    {
        "id": 6,
        "title": "Tables",
        "description": "Learn how to display data in rows and columns using HTML tables. Tables are useful for structured data like reports, dashboards, and lists.",
        "topics": [
            {
                "id": 1,
                "title": "What is a Table?",
                "description": "An HTML table is used to organize data into rows and columns.",
                "example": "<table></table>"
            },
            {
                "id": 2,
                "title": "Table Tag (table)",
                "description": "The table tag is the container for all table elements.",
                "example": "<table>\n</table>"
            },
            {
                "id": 3,
                "title": "Table Row (tr)",
                "description": "The tr tag defines a row in the table.",
                "example": "<tr>\n</tr>"
            },
            {
                "id": 4,
                "title": "Table Header (th)",
                "description": "The th tag defines a header cell. It is bold and centered by default.",
                "example": "<th>Name</th>"
            },
            {
                "id": 5,
                "title": "Table Data (td)",
                "description": "The td tag defines a normal data cell.",
                "example": "<td>John</td>"
            },
            {
                "id": 6,
                "title": "Basic Table Structure",
                "description": "A table is made using table, tr, th, and td tags together.",
                "example": "<table>\n<tr>\n<th>Name</th>\n<th>Age</th>\n</tr>\n<tr>\n<td>John</td>\n<td>25</td>\n</tr>\n</table>"
            },
            {
                "id": 7,
                "title": "Border Attribute",
                "description": "The border attribute is used to add borders to a table (not recommended in modern HTML, use CSS instead).",
                "example": "<table border=\"1\">...</table>"
            },
            {
                "id": 8,
                "title": "Colspan",
                "description": "Colspan is used to merge multiple columns into one.",
                "example": "<td colspan=\"2\">Merged Column</td>"
            },
            {
                "id": 9,
                "title": "Rowspan",
                "description": "Rowspan is used to merge multiple rows into one.",
                "example": "<td rowspan=\"2\">Merged Row</td>"
            },
            {
                "id": 10,
                "title": "Table Sections",
                "description": "Tables can be divided into thead, tbody, and tfoot for better structure.",
                "example": "<table>\n<thead><tr><th>Name</th></tr></thead>\n<tbody><tr><td>John</td></tr></tbody>\n</table>"
            },
            {
                "id": 11,
                "title": "Caption",
                "description": "The caption tag adds a title to the table.",
                "example": "<table>\n<caption>Student Data</caption>\n</table>"
            },
            {
                "id": 12,
                "title": "Best Practices",
                "description": "Use tables only for data, not for layout. Use CSS for styling instead of attributes.",
                "example": "Use CSS instead of border attribute"
            }
        ],
        "quiz": [
            {
                "question": "Which tag defines a table row?",
                "options": ["td", "tr", "th"],
                "answer": "tr"
            },
            {
                "question": "Which tag is used for table headers?",
                "options": ["td", "th", "tr"],
                "answer": "th"
            },
            {
                "question": "What does colspan do?",
                "options": [
                    "Merge rows",
                    "Merge columns",
                    "Add border"
                ],
                "answer": "Merge columns"
            },
            {
                "question": "Which section contains main data?",
                "options": ["thead", "tbody", "tfoot"],
                "answer": "tbody"
            }
        ],
        "practice": [
            {
                "task": "Create a table with Name and Age columns.",
                "hint": "Use table, tr, th, td"
            },
            {
                "task": "Create a table with 3 rows and 2 columns.",
                "hint": "Repeat tr and td"
            },
            {
                "task": "Merge two columns using colspan.",
                "hint": "Use colspan attribute"
            },
            {
                "task": "Add a caption to your table.",
                "hint": "Use caption tag"
            }
        ]
    },
    {
        "id": 7,
        "title": "Semantic HTML",
        "description": "Learn how to use semantic HTML tags to create meaningful, structured, and accessible web pages. Semantic tags improve readability, SEO, and accessibility.",
        "topics": [
            {
                "id": 1,
                "title": "What is Semantic HTML?",
                "description": "Semantic HTML uses tags that clearly describe their meaning and purpose in the webpage.",
                "example": "<header>Header Content</header>"
            },
            {
                "id": 2,
                "title": "Why Semantic HTML is Important",
                "description": "Semantic HTML improves code readability, helps search engines understand content, and enhances accessibility for screen readers.",
                "example": "Better SEO and accessibility"
            },
            {
                "id": 3,
                "title": "Non-Semantic vs Semantic Tags",
                "description": "Non-semantic tags like div and span do not describe content, while semantic tags like header, footer, and article do.",
                "example": "Non-semantic: <div> | Semantic: <header>"
            },
            {
                "id": 4,
                "title": "Header Tag",
                "description": "The header tag defines the top section of a webpage, usually containing logo, title, or navigation.",
                "example": "<header>\n<h1>My Website</h1>\n</header>"
            },
            {
                "id": 5,
                "title": "Footer Tag",
                "description": "The footer tag defines the bottom section of a webpage, usually containing copyright or contact info.",
                "example": "<footer>\n<p>© 2026 My Site</p>\n</footer>"
            },
            {
                "id": 6,
                "title": "Section Tag",
                "description": "The section tag groups related content together.",
                "example": "<section>\n<h2>About</h2>\n<p>Info</p>\n</section>"
            },
            {
                "id": 7,
                "title": "Article Tag",
                "description": "The article tag is used for independent content like blog posts or news articles.",
                "example": "<article>\n<h2>Blog Title</h2>\n<p>Content</p>\n</article>"
            },
            {
                "id": 8,
                "title": "Nav Tag",
                "description": "The nav tag is used for navigation links.",
                "example": "<nav>\n<a href=\"#\">Home</a>\n<a href=\"#\">About</a>\n</nav>"
            },
            {
                "id": 9,
                "title": "Main Tag",
                "description": "The main tag represents the main content of the webpage.",
                "example": "<main>\n<p>Main content</p>\n</main>"
            },
            {
                "id": 10,
                "title": "Aside Tag",
                "description": "The aside tag is used for side content like ads or sidebars.",
                "example": "<aside>\n<p>Sidebar</p>\n</aside>"
            },
            {
                "id": 11,
                "title": "Figure and Figcaption",
                "description": "Used to group images with captions.",
                "example": "<figure>\n<img src=\"img.jpg\">\n<figcaption>Image</figcaption>\n</figure>"
            },
            {
                "id": 12,
                "title": "Semantic Page Layout",
                "description": "A full webpage can be structured using semantic tags instead of divs.",
                "example": "<header></header>\n<nav></nav>\n<main></main>\n<footer></footer>"
            },
            {
                "id": 13,
                "title": "SEO Benefits",
                "description": "Search engines understand semantic tags better, improving ranking.",
                "example": "Better search visibility"
            },
            {
                "id": 14,
                "title": "Accessibility Benefits",
                "description": "Screen readers can better interpret semantic tags, improving accessibility.",
                "example": "Better user experience for all users"
            }
        ],
        "quiz": [
            {
                "question": "Which tag is semantic?",
                "options": ["div", "span", "header"],
                "answer": "header"
            },
            {
                "question": "Which tag is used for navigation?",
                "options": ["nav", "section", "article"],
                "answer": "nav"
            },
            {
                "question": "Which tag represents main content?",
                "options": ["main", "aside", "footer"],
                "answer": "main"
            },
            {
                "question": "Which tag is used for sidebar content?",
                "options": ["aside", "header", "nav"],
                "answer": "aside"
            }
        ],
        "practice": [
            {
                "task": "Create a webpage layout using header, nav, main, and footer.",
                "hint": "Use semantic tags instead of div"
            },
            {
                "task": "Create a blog section using article and section.",
                "hint": "Use article for content and section for grouping"
            },
            {
                "task": "Add a sidebar using aside.",
                "hint": "Place aside beside main content"
            },
            {
                "task": "Add an image with caption using figure and figcaption.",
                "hint": "Wrap img inside figure"
            }
        ]
    }
]