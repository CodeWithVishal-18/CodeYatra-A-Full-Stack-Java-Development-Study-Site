export let sqlData = [
    {
        "id": 1,
        "title": "Introduction",
        "description": "Learn the basics of SQL, what databases are, and how data is stored and managed using tables.",
        "topics": [
            {
                "id": 1,
                "title": "What is SQL?",
                "description": "SQL (Structured Query Language) is used to communicate with relational databases to store, retrieve, update, and delete data.",
                "example": "SELECT 'Hello SQL';"
            },
            {
                "id": 2,
                "title": "What is a Database?",
                "description": "A database is a structured collection of data stored electronically. It helps in organizing and managing large amounts of data efficiently.",
                "example": "-- Example: Database contains tables like users, orders"
            },
            {
                "id": 3,
                "title": "What is a Table?",
                "description": "A table is a structure inside a database that stores data in rows and columns.",
                "example": "-- users (id, name, email)"
            },
            {
                "id": 4,
                "title": "Rows and Columns",
                "description": "Rows represent individual records, and columns represent attributes or fields of data.",
                "example": "-- Row = one user, Column = name/email"
            },
            {
                "id": 5,
                "title": "Primary Key",
                "description": "A primary key uniquely identifies each record in a table. It cannot contain duplicate or NULL values.",
                "example": "id INT PRIMARY KEY"
            },
            {
                "id": 6,
                "title": "Why SQL is Important",
                "description": "SQL is used in almost every application to manage data such as users, transactions, and products.",
                "example": "-- Used in banking, e-commerce, login systems"
            },
            {
                "id": 7,
                "title": "Types of SQL Commands",
                "description": "SQL commands are categorized into DDL, DML, DQL, DCL, and TCL.",
                "example": "-- DDL, DML, DQL, DCL, TCL"
            },
            {
                "id": 8,
                "title": "Relational Databases",
                "description": "Relational databases store data in tables and establish relationships between them.",
                "example": "-- MySQL, PostgreSQL"
            }
        ],
        "quiz": [
            {
                "question": "What does SQL stand for?",
                "options": [
                    "Structured Query Language",
                    "Simple Query Language",
                    "Sequential Query Language"
                ],
                "answer": "Structured Query Language"
            },
            {
                "question": "What is a table?",
                "options": [
                    "Collection of files",
                    "Collection of rows and columns",
                    "Collection of functions"
                ],
                "answer": "Collection of rows and columns"
            },
            {
                "question": "What is a primary key?",
                "options": [
                    "Duplicate value",
                    "Unique identifier",
                    "Random value"
                ],
                "answer": "Unique identifier"
            }
        ],
        "practice": [
            {
                "task": "Write a simple SQL query to display text.",
                "hint": "Use SELECT 'Hello';"
            },
            {
                "task": "Identify rows and columns in a table.",
                "hint": "Think of table structure"
            },
            {
                "task": "Give an example of a primary key.",
                "hint": "Use id column"
            }
        ]
    },
    {
        "id": 2,
        "title": "Database Basics",
        "description": "Learn the core concepts of databases including tables, schemas, relationships, and how data is structured and organized.",
        "topics": [
            {
                "id": 1,
                "title": "What is a Schema?",
                "description": "A schema defines the structure of a database including tables, columns, and relationships.",
                "example": "-- Schema = blueprint of database"
            },
            {
                "id": 2,
                "title": "Database vs Table",
                "description": "A database is a collection of tables, while a table stores actual data.",
                "example": "-- Database: company_db\n-- Table: employees"
            },
            {
                "id": 3,
                "title": "Columns (Fields)",
                "description": "Columns define the type of data stored in a table such as name, age, or email.",
                "example": "name VARCHAR(50), age INT"
            },
            {
                "id": 4,
                "title": "Rows (Records)",
                "description": "Each row represents a single record in a table.",
                "example": "-- One employee record"
            },
            {
                "id": 5,
                "title": "Data Types",
                "description": "Data types define the kind of data a column can store.",
                "example": "INT, VARCHAR, DATE, DECIMAL"
            },
            {
                "id": 6,
                "title": "Primary Key",
                "description": "Uniquely identifies each record in a table.",
                "example": "id INT PRIMARY KEY"
            },
            {
                "id": 7,
                "title": "Foreign Key",
                "description": "A foreign key links one table to another and creates relationships.",
                "example": "department_id INT REFERENCES departments(id)"
            },
            {
                "id": 8,
                "title": "Relationships",
                "description": "Defines how tables are connected (one-to-one, one-to-many, many-to-many).",
                "example": "-- One user can have many orders"
            },
            {
                "id": 9,
                "title": "One-to-Many Relationship",
                "description": "One record in a table is related to multiple records in another table.",
                "example": "-- One customer → many orders"
            },
            {
                "id": 10,
                "title": "Many-to-Many Relationship",
                "description": "Multiple records in one table relate to multiple records in another table.",
                "example": "-- Students ↔ Courses"
            },
            {
                "id": 11,
                "title": "Normalization (Basic)",
                "description": "Process of organizing data to reduce redundancy and improve consistency.",
                "example": "-- Split data into multiple tables"
            },
            {
                "id": 12,
                "title": "Redundancy",
                "description": "Duplicate data in a database which should be minimized.",
                "example": "-- Same user stored multiple times"
            },
            {
                "id": 13,
                "title": "Consistency",
                "description": "Ensures data remains accurate and uniform across the database.",
                "example": "-- Same data everywhere"
            },
            {
                "id": 14,
                "title": "Common Mistakes",
                "description": "Not using primary keys, poor relationships, storing duplicate data.",
                "example": "-- No unique id"
            },
            {
                "id": 15,
                "title": "Best Practices",
                "description": "Use proper data types, define relationships, normalize data.",
                "example": "-- Clean structured database"
            }
        ],
        "quiz": [
            {
                "question": "What is a schema?",
                "options": [
                    "Database data",
                    "Database structure",
                    "Database query"
                ],
                "answer": "Database structure"
            },
            {
                "question": "What does a primary key do?",
                "options": [
                    "Stores data",
                    "Identifies records uniquely",
                    "Deletes data"
                ],
                "answer": "Identifies records uniquely"
            },
            {
                "question": "What is a foreign key?",
                "options": [
                    "Unique key",
                    "Links tables",
                    "Deletes rows"
                ],
                "answer": "Links tables"
            }
        ],
        "practice": [
            {
                "task": "Identify primary key in a table.",
                "hint": "Look for unique column"
            },
            {
                "task": "Create example of one-to-many relationship.",
                "hint": "User and orders"
            },
            {
                "task": "List common SQL data types.",
                "hint": "INT, VARCHAR"
            }
        ]
    },
    {
        "id": 3,
        "title": "DDL Commands",
        "description": "DDL (Data Definition Language) commands are used to define, modify, and manage the structure of a database including tables, schemas, and databases.",
        "topics": [
            {
                "id": 1,
                "title": "What is DDL?",
                "description": "DDL commands are used to define and modify the structure of database objects like tables and databases.",
                "example": "-- CREATE, ALTER, DROP"
            },
            {
                "id": 2,
                "title": "CREATE DATABASE",
                "description": "Creates a new database.",
                "example": "CREATE DATABASE company_db;"
            },
            {
                "id": 3,
                "title": "DROP DATABASE",
                "description": "Deletes a database permanently along with all its data.",
                "example": "DROP DATABASE company_db;"
            },
            {
                "id": 4,
                "title": "CREATE TABLE",
                "description": "Creates a new table with columns, data types, and constraints.",
                "example": "CREATE TABLE employees (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(50) NOT NULL,\n  email VARCHAR(100) UNIQUE,\n  salary DECIMAL(10,2)\n);"
            },
            {
                "id": 5,
                "title": "DROP TABLE",
                "description": "Deletes a table and all its data permanently.",
                "example": "DROP TABLE employees;"
            },
            {
                "id": 6,
                "title": "TRUNCATE TABLE",
                "description": "Removes all records from a table without deleting its structure. Faster than DELETE.",
                "example": "TRUNCATE TABLE employees;"
            },
            {
                "id": 7,
                "title": "ALTER TABLE - ADD COLUMN",
                "description": "Adds a new column to an existing table.",
                "example": "ALTER TABLE employees ADD department VARCHAR(50);"
            },
            {
                "id": 8,
                "title": "ALTER TABLE - MODIFY COLUMN",
                "description": "Changes the data type or size of a column.",
                "example": "ALTER TABLE employees MODIFY salary DECIMAL(12,2);"
            },
            {
                "id": 9,
                "title": "ALTER TABLE - RENAME COLUMN",
                "description": "Renames a column in a table.",
                "example": "ALTER TABLE employees RENAME COLUMN name TO full_name;"
            },
            {
                "id": 10,
                "title": "ALTER TABLE - DROP COLUMN",
                "description": "Deletes a column from a table.",
                "example": "ALTER TABLE employees DROP COLUMN department;"
            },
            {
                "id": 11,
                "title": "RENAME TABLE",
                "description": "Changes the name of an existing table.",
                "example": "RENAME TABLE employees TO staff;"
            },
            {
                "id": 12,
                "title": "TRUNCATE vs DELETE vs DROP",
                "description": "TRUNCATE removes all rows, DELETE removes selected rows, DROP deletes entire table.",
                "example": "-- TRUNCATE: fast\n-- DELETE: conditional\n-- DROP: removes structure"
            },
            {
                "id": 13,
                "title": "Common Mistakes",
                "description": "Using DROP instead of TRUNCATE, forgetting constraints, deleting important data.",
                "example": "-- DROP TABLE deletes everything"
            },
            {
                "id": 14,
                "title": "Best Practices",
                "description": "Use TRUNCATE for clearing data, always backup before DROP, define proper constraints.",
                "example": "-- Avoid accidental data loss"
            }
        ],
        "quiz": [
            {
                "question": "Which command creates a table?",
                "options": ["CREATE TABLE", "INSERT", "SELECT"],
                "answer": "CREATE TABLE"
            },
            {
                "question": "Which command removes all data but keeps structure?",
                "options": ["DELETE", "DROP", "TRUNCATE"],
                "answer": "TRUNCATE"
            },
            {
                "question": "Which command deletes table completely?",
                "options": ["DELETE", "TRUNCATE", "DROP"],
                "answer": "DROP"
            }
        ],
        "practice": [
            {
                "task": "Create a database named 'school_db'.",
                "hint": "Use CREATE DATABASE"
            },
            {
                "task": "Create a table 'students' with id, name, and marks.",
                "hint": "Use CREATE TABLE"
            },
            {
                "task": "Add a column 'email' to students table.",
                "hint": "Use ALTER TABLE ADD"
            },
            {
                "task": "Remove all data from a table without deleting it.",
                "hint": "Use TRUNCATE"
            }
        ]
    },
    {
        "id": 4,
        "title": "DML Commands",
        "description": "DML (Data Manipulation Language) commands are used to manage and manipulate data inside tables such as inserting, updating, and deleting records.",
        "topics": [
            {
                "id": 1,
                "title": "What is DML?",
                "description": "DML commands are used to modify data stored in database tables.",
                "example": "-- INSERT, UPDATE, DELETE"
            },
            {
                "id": 2,
                "title": "INSERT INTO",
                "description": "Used to insert new records into a table.",
                "example": "INSERT INTO employees (name, email, salary)\nVALUES ('Vishal', 'vishal@gmail.com', 50000);"
            },
            {
                "id": 3,
                "title": "INSERT Multiple Rows",
                "description": "Insert multiple records in a single query.",
                "example": "INSERT INTO employees (name, salary)\nVALUES ('A', 1000), ('B', 2000);"
            },
            {
                "id": 4,
                "title": "INSERT Without Columns",
                "description": "Insert values without specifying column names (order must match table).",
                "example": "INSERT INTO employees VALUES (1, 'Vishal', 'v@gmail.com', 50000);"
            },
            {
                "id": 5,
                "title": "UPDATE",
                "description": "Used to modify existing records in a table.",
                "example": "UPDATE employees\nSET salary = 60000\nWHERE id = 1;"
            },
            {
                "id": 6,
                "title": "UPDATE Multiple Columns",
                "description": "Update more than one column in a single query.",
                "example": "UPDATE employees\nSET name = 'Rahul', salary = 70000\nWHERE id = 2;"
            },
            {
                "id": 7,
                "title": "DELETE",
                "description": "Deletes records from a table.",
                "example": "DELETE FROM employees WHERE id = 1;"
            },
            {
                "id": 8,
                "title": "DELETE All Rows",
                "description": "Deletes all records from a table (structure remains).",
                "example": "DELETE FROM employees;"
            },
            {
                "id": 9,
                "title": "WHERE Clause in DML",
                "description": "Used to filter records when updating or deleting.",
                "example": "UPDATE employees SET salary = 50000 WHERE name = 'Vishal';"
            },
            {
                "id": 10,
                "title": "Safe Updates",
                "description": "Always use WHERE clause to avoid updating/deleting all rows accidentally.",
                "example": "-- Avoid: UPDATE employees SET salary = 0;"
            },
            {
                "id": 11,
                "title": "INSERT vs UPDATE vs DELETE",
                "description": "INSERT adds data, UPDATE modifies data, DELETE removes data.",
                "example": "-- INSERT = add\n-- UPDATE = change\n-- DELETE = remove"
            },
            {
                "id": 12,
                "title": "Common Mistakes",
                "description": "Forgetting WHERE clause, inserting wrong data types, missing columns.",
                "example": "-- DELETE FROM employees; (danger)"
            },
            {
                "id": 13,
                "title": "Best Practices",
                "description": "Always use WHERE clause, validate data before inserting, backup important data.",
                "example": "-- Write safe queries"
            }
        ],
        "quiz": [
            {
                "question": "Which command inserts data?",
                "options": ["INSERT", "UPDATE", "DELETE"],
                "answer": "INSERT"
            },
            {
                "question": "Which command modifies data?",
                "options": ["INSERT", "UPDATE", "SELECT"],
                "answer": "UPDATE"
            },
            {
                "question": "What happens if WHERE is missing in DELETE?",
                "options": [
                    "Error",
                    "Deletes one row",
                    "Deletes all rows"
                ],
                "answer": "Deletes all rows"
            }
        ],
        "practice": [
            {
                "task": "Insert a record into students table.",
                "hint": "Use INSERT INTO"
            },
            {
                "task": "Update marks of a student.",
                "hint": "Use UPDATE with WHERE"
            },
            {
                "task": "Delete a student record.",
                "hint": "Use DELETE with WHERE"
            },
            {
                "task": "Insert multiple records in one query.",
                "hint": "Use multiple VALUES"
            }
        ]
    },
    {
        "id": 5,
        "title": "DQL (SELECT)",
        "description": "DQL (Data Query Language) is used to retrieve data from the database using the SELECT statement. It is the most commonly used SQL command.",
        "topics": [
            {
                "id": 1,
                "title": "What is DQL?",
                "description": "DQL is used to fetch data from database tables.",
                "example": "-- SELECT queries"
            },
            {
                "id": 2,
                "title": "SELECT Statement",
                "description": "Used to retrieve data from one or more tables.",
                "example": "SELECT * FROM employees;"
            },
            {
                "id": 3,
                "title": "Selecting Specific Columns",
                "description": "Retrieve only selected columns instead of all.",
                "example": "SELECT name, salary FROM employees;"
            },
            {
                "id": 4,
                "title": "WHERE Clause",
                "description": "Filters records based on conditions.",
                "example": "SELECT * FROM employees WHERE salary > 50000;"
            },
            {
                "id": 5,
                "title": "Comparison Operators",
                "description": "Used in WHERE clause for conditions.",
                "example": "WHERE salary > 50000 AND age < 30"
            },
            {
                "id": 6,
                "title": "AND, OR, NOT",
                "description": "Logical operators to combine conditions.",
                "example": "WHERE salary > 50000 AND department = 'IT'"
            },
            {
                "id": 7,
                "title": "LIKE Operator",
                "description": "Used for pattern matching in strings.",
                "example": "SELECT * FROM employees WHERE name LIKE 'A%';"
            },
            {
                "id": 8,
                "title": "IN Operator",
                "description": "Checks if value matches any value in a list.",
                "example": "SELECT * FROM employees WHERE department IN ('IT', 'HR');"
            },
            {
                "id": 9,
                "title": "BETWEEN Operator",
                "description": "Filters values within a range.",
                "example": "SELECT * FROM employees WHERE salary BETWEEN 30000 AND 60000;"
            },
            {
                "id": 10,
                "title": "ORDER BY",
                "description": "Sorts result in ascending or descending order.",
                "example": "SELECT * FROM employees ORDER BY salary DESC;"
            },
            {
                "id": 11,
                "title": "DISTINCT",
                "description": "Removes duplicate values from result.",
                "example": "SELECT DISTINCT department FROM employees;"
            },
            {
                "id": 12,
                "title": "LIMIT",
                "description": "Limits number of records returned.",
                "example": "SELECT * FROM employees LIMIT 5;"
            },
            {
                "id": 13,
                "title": "Alias (AS)",
                "description": "Rename column or table for readability.",
                "example": "SELECT name AS employee_name FROM employees;"
            },
            {
                "id": 14,
                "title": "NULL Handling",
                "description": "Check for NULL values using IS NULL or IS NOT NULL.",
                "example": "SELECT * FROM employees WHERE email IS NULL;"
            },
            {
                "id": 15,
                "title": "Common Mistakes",
                "description": "Using = for NULL, forgetting WHERE, wrong conditions.",
                "example": "email = NULL ❌"
            },
            {
                "id": 16,
                "title": "Best Practices",
                "description": "Select only needed columns, use proper filtering, avoid SELECT * in production.",
                "example": "-- Better performance"
            }
        ],
        "quiz": [
            {
                "question": "Which command retrieves data?",
                "options": ["INSERT", "SELECT", "UPDATE"],
                "answer": "SELECT"
            },
            {
                "question": "Which clause filters data?",
                "options": ["WHERE", "ORDER BY", "GROUP BY"],
                "answer": "WHERE"
            },
            {
                "question": "Which operator is used for pattern matching?",
                "options": ["IN", "LIKE", "BETWEEN"],
                "answer": "LIKE"
            },
            {
                "question": "Which keyword removes duplicates?",
                "options": ["UNIQUE", "DISTINCT", "FILTER"],
                "answer": "DISTINCT"
            }
        ],
        "practice": [
            {
                "task": "Select all data from students table.",
                "hint": "Use SELECT *"
            },
            {
                "task": "Filter students with marks > 50.",
                "hint": "Use WHERE"
            },
            {
                "task": "Sort students by marks descending.",
                "hint": "Use ORDER BY DESC"
            },
            {
                "task": "Select unique departments.",
                "hint": "Use DISTINCT"
            }
        ]
    },
    {
        "id": 6,
        "title": "Constraints",
        "description": "Constraints are rules applied to table columns to ensure data accuracy, consistency, and integrity in a database.",
        "topics": [
            {
                "id": 1,
                "title": "What are Constraints?",
                "description": "Constraints are rules enforced on columns to restrict the type of data that can be inserted.",
                "example": "-- Ensures valid data"
            },
            {
                "id": 2,
                "title": "NOT NULL",
                "description": "Ensures that a column cannot have NULL (empty) values.",
                "example": "name VARCHAR(50) NOT NULL"
            },
            {
                "id": 3,
                "title": "UNIQUE",
                "description": "Ensures all values in a column are unique.",
                "example": "email VARCHAR(100) UNIQUE"
            },
            {
                "id": 4,
                "title": "PRIMARY KEY",
                "description": "Uniquely identifies each record in a table. Combines NOT NULL and UNIQUE.",
                "example": "id INT PRIMARY KEY"
            },
            {
                "id": 5,
                "title": "AUTO_INCREMENT",
                "description": "Automatically generates unique values for a column (usually used with PRIMARY KEY).",
                "example": "id INT AUTO_INCREMENT"
            },
            {
                "id": 6,
                "title": "FOREIGN KEY",
                "description": "Links one table to another and maintains referential integrity.",
                "example": "FOREIGN KEY (dept_id) REFERENCES departments(id)"
            },
            {
                "id": 7,
                "title": "CHECK",
                "description": "Ensures values meet a specific condition.",
                "example": "salary DECIMAL CHECK (salary > 0)"
            },
            {
                "id": 8,
                "title": "DEFAULT",
                "description": "Sets a default value if no value is provided.",
                "example": "status VARCHAR(20) DEFAULT 'active'"
            },
            {
                "id": 9,
                "title": "Composite Key",
                "description": "A primary key made up of multiple columns.",
                "example": "PRIMARY KEY (student_id, course_id)"
            },
            {
                "id": 10,
                "title": "Adding Constraints",
                "description": "Constraints can be added while creating or altering tables.",
                "example": "ALTER TABLE employees ADD UNIQUE (email);"
            },
            {
                "id": 11,
                "title": "Dropping Constraints",
                "description": "Constraints can be removed from a table.",
                "example": "ALTER TABLE employees DROP CONSTRAINT email;"
            },
            {
                "id": 12,
                "title": "Common Mistakes",
                "description": "Not using primary key, missing constraints, allowing invalid data.",
                "example": "-- No validation leads to bad data"
            },
            {
                "id": 13,
                "title": "Best Practices",
                "description": "Always use primary key, define foreign keys, validate data using constraints.",
                "example": "-- Ensure data integrity"
            }
        ],
        "quiz": [
            {
                "question": "Which constraint ensures no NULL values?",
                "options": ["UNIQUE", "NOT NULL", "CHECK"],
                "answer": "NOT NULL"
            },
            {
                "question": "Which constraint ensures unique records?",
                "options": ["PRIMARY KEY", "CHECK", "DEFAULT"],
                "answer": "PRIMARY KEY"
            },
            {
                "question": "Which constraint links tables?",
                "options": ["FOREIGN KEY", "UNIQUE", "DEFAULT"],
                "answer": "FOREIGN KEY"
            }
        ],
        "practice": [
            {
                "task": "Create a table with PRIMARY KEY and NOT NULL.",
                "hint": "Use id and name"
            },
            {
                "task": "Add UNIQUE constraint to email column.",
                "hint": "Use UNIQUE"
            },
            {
                "task": "Create a foreign key relationship.",
                "hint": "Link two tables"
            },
            {
                "task": "Add DEFAULT value to a column.",
                "hint": "Use DEFAULT keyword"
            }
        ]
    },
    {
        "id": 7,
        "title": "Joins",
        "description": "Joins are used to combine data from multiple tables based on a related column. They are essential for working with relational databases.",
        "topics": [
            {
                "id": 1,
                "title": "What is a Join?",
                "description": "A join combines rows from two or more tables using a related column (usually a foreign key).",
                "example": "-- Combine employees and departments"
            },
            {
                "id": 2,
                "title": "Why Joins are Important",
                "description": "Data is stored in multiple tables, and joins allow you to fetch combined information.",
                "example": "-- Get employee name with department name"
            },
            {
                "id": 3,
                "title": "INNER JOIN",
                "description": "Returns only matching records from both tables.",
                "example": "SELECT e.name, d.name\nFROM employees e\nINNER JOIN departments d\nON e.dept_id = d.id;"
            },
            {
                "id": 4,
                "title": "LEFT JOIN",
                "description": "Returns all records from left table and matching records from right table.",
                "example": "SELECT e.name, d.name\nFROM employees e\nLEFT JOIN departments d\nON e.dept_id = d.id;"
            },
            {
                "id": 5,
                "title": "RIGHT JOIN",
                "description": "Returns all records from right table and matching records from left table.",
                "example": "SELECT e.name, d.name\nFROM employees e\nRIGHT JOIN departments d\nON e.dept_id = d.id;"
            },
            {
                "id": 6,
                "title": "FULL JOIN",
                "description": "Returns all records when there is a match in either table.",
                "example": "-- Not supported directly in MySQL (use UNION)"
            },
            {
                "id": 7,
                "title": "CROSS JOIN",
                "description": "Returns all possible combinations of rows (Cartesian product).",
                "example": "SELECT * FROM table1 CROSS JOIN table2;"
            },
            {
                "id": 8,
                "title": "SELF JOIN",
                "description": "A table joined with itself.",
                "example": "SELECT a.name, b.name\nFROM employees a, employees b\nWHERE a.manager_id = b.id;"
            },
            {
                "id": 9,
                "title": "ON Clause",
                "description": "Specifies the condition for joining tables.",
                "example": "ON e.dept_id = d.id"
            },
            {
                "id": 10,
                "title": "Aliases in Joins",
                "description": "Short names for tables to make queries readable.",
                "example": "employees e, departments d"
            },
            {
                "id": 11,
                "title": "JOIN vs WHERE",
                "description": "JOIN is used for combining tables, WHERE filters results.",
                "example": "-- JOIN for relation, WHERE for condition"
            },
            {
                "id": 12,
                "title": "Common Mistakes",
                "description": "Missing ON condition, wrong join type, duplicate results.",
                "example": "-- Missing ON leads to wrong data"
            },
            {
                "id": 13,
                "title": "Best Practices",
                "description": "Use proper join type, always define ON condition, use aliases.",
                "example": "-- Clean and readable queries"
            }
        ],
        "quiz": [
            {
                "question": "Which join returns only matching records?",
                "options": ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN"],
                "answer": "INNER JOIN"
            },
            {
                "question": "Which join returns all records from left table?",
                "options": ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN"],
                "answer": "LEFT JOIN"
            },
            {
                "question": "Which join creates all combinations?",
                "options": ["CROSS JOIN", "INNER JOIN", "SELF JOIN"],
                "answer": "CROSS JOIN"
            }
        ],
        "practice": [
            {
                "task": "Join employees and departments tables.",
                "hint": "Use INNER JOIN"
            },
            {
                "task": "Get all employees even without department.",
                "hint": "Use LEFT JOIN"
            },
            {
                "task": "Create a self join example.",
                "hint": "Use same table twice"
            },
            {
                "task": "Use alias for tables.",
                "hint": "Use short names"
            }
        ]
    },
    {
        "id": 8,
        "title": "SQL Functions",
        "description": "SQL functions are used to perform calculations and operations on data. They help in analyzing and transforming data efficiently.",
        "topics": [
            {
                "id": 1,
                "title": "What are SQL Functions?",
                "description": "Functions are built-in methods used to perform operations on values.",
                "example": "-- COUNT, SUM, AVG"
            },
            {
                "id": 2,
                "title": "Types of Functions",
                "description": "Functions are mainly divided into Aggregate and Scalar functions.",
                "example": "-- Aggregate & Scalar"
            },
            {
                "id": 3,
                "title": "COUNT()",
                "description": "Returns number of rows.",
                "example": "SELECT COUNT(*) FROM employees;"
            },
            {
                "id": 4,
                "title": "SUM()",
                "description": "Returns total sum of a column.",
                "example": "SELECT SUM(salary) FROM employees;"
            },
            {
                "id": 5,
                "title": "AVG()",
                "description": "Returns average value.",
                "example": "SELECT AVG(salary) FROM employees;"
            },
            {
                "id": 6,
                "title": "MIN()",
                "description": "Returns minimum value.",
                "example": "SELECT MIN(salary) FROM employees;"
            },
            {
                "id": 7,
                "title": "MAX()",
                "description": "Returns maximum value.",
                "example": "SELECT MAX(salary) FROM employees;"
            },
            {
                "id": 8,
                "title": "UPPER()",
                "description": "Converts text to uppercase.",
                "example": "SELECT UPPER(name) FROM employees;"
            },
            {
                "id": 9,
                "title": "LOWER()",
                "description": "Converts text to lowercase.",
                "example": "SELECT LOWER(name) FROM employees;"
            },
            {
                "id": 10,
                "title": "LENGTH()",
                "description": "Returns length of a string.",
                "example": "SELECT LENGTH(name) FROM employees;"
            },
            {
                "id": 11,
                "title": "ROUND()",
                "description": "Rounds numeric values.",
                "example": "SELECT ROUND(salary, 2) FROM employees;"
            },
            {
                "id": 12,
                "title": "NOW()",
                "description": "Returns current date and time.",
                "example": "SELECT NOW();"
            },
            {
                "id": 13,
                "title": "CONCAT()",
                "description": "Joins multiple strings.",
                "example": "SELECT CONCAT(first_name, ' ', last_name) FROM employees;"
            },
            {
                "id": 14,
                "title": "Aggregate vs Scalar",
                "description": "Aggregate works on multiple rows, scalar works on single value.",
                "example": "-- COUNT = aggregate, UPPER = scalar"
            },
            {
                "id": 15,
                "title": "Common Mistakes",
                "description": "Using aggregate without GROUP BY, wrong column usage.",
                "example": "-- Mixing aggregated and non-aggregated columns"
            },
            {
                "id": 16,
                "title": "Best Practices",
                "description": "Use aggregate functions with GROUP BY, keep queries simple.",
                "example": "-- Clean readable queries"
            }
        ],
        "quiz": [
            {
                "question": "Which function counts rows?",
                "options": ["SUM", "COUNT", "AVG"],
                "answer": "COUNT"
            },
            {
                "question": "Which function gives average?",
                "options": ["AVG", "SUM", "MIN"],
                "answer": "AVG"
            },
            {
                "question": "Which function converts to uppercase?",
                "options": ["LOWER", "UPPER", "CONCAT"],
                "answer": "UPPER"
            }
        ],
        "practice": [
            {
                "task": "Find total salary of employees.",
                "hint": "Use SUM"
            },
            {
                "task": "Find average marks.",
                "hint": "Use AVG"
            },
            {
                "task": "Convert names to uppercase.",
                "hint": "Use UPPER"
            },
            {
                "task": "Count total records.",
                "hint": "Use COUNT"
            }
        ]
    },
    {
        "id": 9,
        "title": "GROUP BY & HAVING",
        "description": "GROUP BY is used to group rows with similar values, and HAVING is used to filter grouped data. These are essential for data analysis and reporting.",
        "topics": [
            {
                "id": 1,
                "title": "What is GROUP BY?",
                "description": "GROUP BY groups rows that have the same values into summary rows.",
                "example": "SELECT department FROM employees GROUP BY department;"
            },
            {
                "id": 2,
                "title": "GROUP BY with COUNT",
                "description": "Count number of records in each group.",
                "example": "SELECT department, COUNT(*) FROM employees GROUP BY department;"
            },
            {
                "id": 3,
                "title": "GROUP BY with SUM",
                "description": "Calculate total values for each group.",
                "example": "SELECT department, SUM(salary) FROM employees GROUP BY department;"
            },
            {
                "id": 4,
                "title": "GROUP BY with AVG",
                "description": "Calculate average values for each group.",
                "example": "SELECT department, AVG(salary) FROM employees GROUP BY department;"
            },
            {
                "id": 5,
                "title": "GROUP BY with Multiple Columns",
                "description": "Group data using more than one column.",
                "example": "SELECT department, role FROM employees GROUP BY department, role;"
            },
            {
                "id": 6,
                "title": "HAVING Clause",
                "description": "Filters grouped data after aggregation.",
                "example": "SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;"
            },
            {
                "id": 7,
                "title": "WHERE vs HAVING",
                "description": "WHERE filters rows before grouping, HAVING filters after grouping.",
                "example": "-- WHERE before GROUP BY\n-- HAVING after GROUP BY"
            },
            {
                "id": 8,
                "title": "Using GROUP BY with ORDER BY",
                "description": "Sort grouped results.",
                "example": "SELECT department, COUNT(*) FROM employees GROUP BY department ORDER BY COUNT(*) DESC;"
            },
            {
                "id": 9,
                "title": "Common Mistakes",
                "description": "Using HAVING without GROUP BY, mixing columns incorrectly.",
                "example": "-- Non-aggregated column without GROUP BY"
            },
            {
                "id": 10,
                "title": "Best Practices",
                "description": "Always group necessary columns, use HAVING for aggregate filters.",
                "example": "-- Clean aggregation queries"
            }
        ],
        "quiz": [
            {
                "question": "Which clause groups data?",
                "options": ["WHERE", "GROUP BY", "ORDER BY"],
                "answer": "GROUP BY"
            },
            {
                "question": "Which clause filters grouped data?",
                "options": ["WHERE", "HAVING", "SELECT"],
                "answer": "HAVING"
            },
            {
                "question": "Which runs first?",
                "options": ["HAVING", "GROUP BY", "WHERE"],
                "answer": "WHERE"
            }
        ],
        "practice": [
            {
                "task": "Count employees in each department.",
                "hint": "Use GROUP BY + COUNT"
            },
            {
                "task": "Find departments with more than 5 employees.",
                "hint": "Use HAVING"
            },
            {
                "task": "Calculate average salary per department.",
                "hint": "Use AVG + GROUP BY"
            },
            {
                "task": "Sort grouped data by count.",
                "hint": "Use ORDER BY"
            }
        ]
    },
    {
        "id": 10,
        "title": "Subqueries",
        "description": "A subquery is a query nested inside another SQL query. It is used to perform operations that depend on the result of another query.",
        "topics": [
            {
                "id": 1,
                "title": "What is a Subquery?",
                "description": "A subquery is a query inside another query used to retrieve intermediate results.",
                "example": "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);"
            },
            {
                "id": 2,
                "title": "Types of Subqueries",
                "description": "Subqueries can be single-row, multi-row, or correlated subqueries.",
                "example": "-- Single, Multi, Correlated"
            },
            {
                "id": 3,
                "title": "Single Row Subquery",
                "description": "Returns only one value and is used with operators like =, >, <.",
                "example": "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);"
            },
            {
                "id": 4,
                "title": "Multi Row Subquery",
                "description": "Returns multiple values and is used with IN, ANY, ALL.",
                "example": "SELECT * FROM employees WHERE department IN (SELECT department FROM departments);"
            },
            {
                "id": 5,
                "title": "Correlated Subquery",
                "description": "A subquery that depends on the outer query and runs once for each row.",
                "example": "SELECT name FROM employees e WHERE salary > (SELECT AVG(salary) FROM employees WHERE dept_id = e.dept_id);"
            },
            {
                "id": 6,
                "title": "Subquery with IN",
                "description": "Used to match multiple values from subquery.",
                "example": "SELECT * FROM employees WHERE dept_id IN (SELECT id FROM departments);"
            },
            {
                "id": 7,
                "title": "Subquery with EXISTS",
                "description": "Checks if subquery returns any result.",
                "example": "SELECT * FROM employees e WHERE EXISTS (SELECT 1 FROM departments d WHERE e.dept_id = d.id);"
            },
            {
                "id": 8,
                "title": "Subquery in SELECT",
                "description": "Used inside SELECT clause.",
                "example": "SELECT name, (SELECT AVG(salary) FROM employees) AS avg_salary FROM employees;"
            },
            {
                "id": 9,
                "title": "Subquery in FROM",
                "description": "Used as a temporary table.",
                "example": "SELECT * FROM (SELECT name, salary FROM employees) AS temp;"
            },
            {
                "id": 10,
                "title": "Subquery vs JOIN",
                "description": "Subqueries are simpler for nested logic, joins are faster for combining tables.",
                "example": "-- JOIN often preferred for performance"
            },
            {
                "id": 11,
                "title": "Common Mistakes",
                "description": "Using subquery returning multiple rows with =, performance issues.",
                "example": "-- Use IN instead of = for multiple rows"
            },
            {
                "id": 12,
                "title": "Best Practices",
                "description": "Use joins for performance, keep subqueries simple, avoid deep nesting.",
                "example": "-- Optimize queries"
            }
        ],
        "quiz": [
            {
                "question": "What is a subquery?",
                "options": [
                    "Query inside another query",
                    "Multiple queries",
                    "Join query"
                ],
                "answer": "Query inside another query"
            },
            {
                "question": "Which operator is used for multiple values?",
                "options": ["=", "IN", "LIKE"],
                "answer": "IN"
            },
            {
                "question": "Which is faster generally?",
                "options": ["Subquery", "Join", "Both same"],
                "answer": "Join"
            }
        ],
        "practice": [
            {
                "task": "Find employees with salary above average.",
                "hint": "Use subquery with AVG"
            },
            {
                "task": "Use IN with subquery.",
                "hint": "Match values from another table"
            },
            {
                "task": "Write a correlated subquery.",
                "hint": "Use outer query reference"
            },
            {
                "task": "Use EXISTS in query.",
                "hint": "Check existence of data"
            }
        ]
    },
    {
        "id": 11,
        "title": "Views",
        "description": "Views are virtual tables based on SQL queries. They help simplify complex queries, improve security, and make data reusable.",
        "topics": [
            {
                "id": 1,
                "title": "What is a View?",
                "description": "A view is a virtual table created using a SELECT query. It does not store data itself but displays data from one or more tables.",
                "example": "CREATE VIEW emp_view AS SELECT name, salary FROM employees;"
            },
            {
                "id": 2,
                "title": "Why Use Views?",
                "description": "Views simplify complex queries, improve readability, and restrict access to specific data.",
                "example": "-- Hide sensitive columns like salary"
            },
            {
                "id": 3,
                "title": "CREATE VIEW",
                "description": "Creates a new view based on a query.",
                "example": "CREATE VIEW emp_view AS SELECT name, department FROM employees;"
            },
            {
                "id": 4,
                "title": "Using a View",
                "description": "Views can be used like normal tables in SELECT queries.",
                "example": "SELECT * FROM emp_view;"
            },
            {
                "id": 5,
                "title": "Updating Views",
                "description": "In some cases, views can be updated if they are simple and based on one table.",
                "example": "UPDATE emp_view SET name = 'Rahul' WHERE id = 1;"
            },
            {
                "id": 6,
                "title": "DROP VIEW",
                "description": "Deletes a view permanently.",
                "example": "DROP VIEW emp_view;"
            },
            {
                "id": 7,
                "title": "Complex Views",
                "description": "Views can be created using joins, aggregations, and subqueries.",
                "example": "CREATE VIEW emp_dept AS SELECT e.name, d.name FROM employees e JOIN departments d ON e.dept_id = d.id;"
            },
            {
                "id": 8,
                "title": "View vs Table",
                "description": "Table stores data physically, view shows data dynamically from query.",
                "example": "-- Table = real data\n-- View = virtual data"
            },
            {
                "id": 9,
                "title": "Security with Views",
                "description": "Views can restrict access to certain columns or rows.",
                "example": "-- Show only limited data to users"
            },
            {
                "id": 10,
                "title": "Materialized View (Concept)",
                "description": "Stores actual data physically for faster performance (not directly supported in MySQL).",
                "example": "-- Used in advanced systems"
            },
            {
                "id": 11,
                "title": "Common Mistakes",
                "description": "Trying to update complex views, misunderstanding view behavior.",
                "example": "-- Complex views are not always updatable"
            },
            {
                "id": 12,
                "title": "Best Practices",
                "description": "Use views for reusable queries, improve security, and simplify complex logic.",
                "example": "-- Clean and reusable SQL"
            }
        ],
        "quiz": [
            {
                "question": "What is a view?",
                "options": [
                    "Physical table",
                    "Virtual table",
                    "Temporary table"
                ],
                "answer": "Virtual table"
            },
            {
                "question": "Which command creates a view?",
                "options": ["CREATE VIEW", "SELECT VIEW", "MAKE VIEW"],
                "answer": "CREATE VIEW"
            },
            {
                "question": "Does view store data?",
                "options": ["Yes", "No", "Sometimes"],
                "answer": "No"
            }
        ],
        "practice": [
            {
                "task": "Create a view from employees table.",
                "hint": "Use CREATE VIEW"
            },
            {
                "task": "Select data from a view.",
                "hint": "Use SELECT * FROM view_name"
            },
            {
                "task": "Drop a view.",
                "hint": "Use DROP VIEW"
            },
            {
                "task": "Create a view using JOIN.",
                "hint": "Combine two tables"
            }
        ]
    },
    {
        "id": 12,
        "title": "Indexes",
        "description": "Indexes are used to improve the speed of data retrieval operations on a table. They work like an index in a book, allowing faster lookup of data.",
        "topics": [
            {
                "id": 1,
                "title": "What is an Index?",
                "description": "An index is a data structure that improves the speed of SELECT queries by reducing the amount of data scanned.",
                "example": "-- Faster search using index"
            },
            {
                "id": 2,
                "title": "Why Use Index?",
                "description": "Indexes improve performance for large tables by making data retrieval faster.",
                "example": "-- Search millions of records quickly"
            },
            {
                "id": 3,
                "title": "CREATE INDEX",
                "description": "Creates an index on a column.",
                "example": "CREATE INDEX idx_name ON employees(name);"
            },
            {
                "id": 4,
                "title": "UNIQUE INDEX",
                "description": "Ensures all values in the indexed column are unique.",
                "example": "CREATE UNIQUE INDEX idx_email ON employees(email);"
            },
            {
                "id": 5,
                "title": "Composite Index",
                "description": "Index created on multiple columns.",
                "example": "CREATE INDEX idx_multi ON employees(name, department);"
            },
            {
                "id": 6,
                "title": "DROP INDEX",
                "description": "Deletes an index from a table.",
                "example": "DROP INDEX idx_name ON employees;"
            },
            {
                "id": 7,
                "title": "Primary Key Index",
                "description": "Primary key automatically creates an index.",
                "example": "-- id PRIMARY KEY creates index"
            },
            {
                "id": 8,
                "title": "Clustered vs Non-Clustered (Concept)",
                "description": "Clustered index sorts data physically, non-clustered stores separate structure.",
                "example": "-- Conceptual understanding"
            },
            {
                "id": 9,
                "title": "When to Use Index",
                "description": "Use index on frequently searched, filtered, or joined columns.",
                "example": "-- WHERE, JOIN columns"
            },
            {
                "id": 10,
                "title": "When NOT to Use Index",
                "description": "Avoid indexing small tables or columns with frequent updates.",
                "example": "-- Slows INSERT/UPDATE"
            },
            {
                "id": 11,
                "title": "Advantages of Index",
                "description": "Faster SELECT queries and better performance.",
                "example": "-- Quick data retrieval"
            },
            {
                "id": 12,
                "title": "Disadvantages of Index",
                "description": "Slows down INSERT, UPDATE, DELETE and uses extra storage.",
                "example": "-- Trade-off performance"
            },
            {
                "id": 13,
                "title": "Common Mistakes",
                "description": "Over-indexing, indexing unnecessary columns.",
                "example": "-- Too many indexes reduce performance"
            },
            {
                "id": 14,
                "title": "Best Practices",
                "description": "Use indexes wisely on frequently queried columns.",
                "example": "-- Balance performance"
            }
        ],
        "quiz": [
            {
                "question": "What is the main purpose of index?",
                "options": ["Store data", "Speed up queries", "Delete data"],
                "answer": "Speed up queries"
            },
            {
                "question": "Which command creates index?",
                "options": ["CREATE INDEX", "ADD INDEX", "MAKE INDEX"],
                "answer": "CREATE INDEX"
            },
            {
                "question": "Which operations become slower with index?",
                "options": ["SELECT", "INSERT", "READ"],
                "answer": "INSERT"
            }
        ],
        "practice": [
            {
                "task": "Create index on name column.",
                "hint": "Use CREATE INDEX"
            },
            {
                "task": "Create unique index on email.",
                "hint": "Use UNIQUE"
            },
            {
                "task": "Create composite index.",
                "hint": "Use multiple columns"
            },
            {
                "task": "Drop an index.",
                "hint": "Use DROP INDEX"
            }
        ]
    },
    {
        "id": 13,
        "title": "Stored Procedures",
        "description": "Stored procedures are pre-written SQL queries stored in the database that can be executed whenever needed. They help improve performance, reusability, and security.",
        "topics": [
            {
                "id": 1,
                "title": "What is a Stored Procedure?",
                "description": "A stored procedure is a saved SQL program that can be reused and executed multiple times.",
                "example": "-- Stored logic inside database"
            },
            {
                "id": 2,
                "title": "Why Use Stored Procedures?",
                "description": "They improve performance, reduce code duplication, and enhance security.",
                "example": "-- Reusable database logic"
            },
            {
                "id": 3,
                "title": "CREATE PROCEDURE",
                "description": "Used to create a stored procedure.",
                "example": "DELIMITER $$\nCREATE PROCEDURE getEmployees()\nBEGIN\n  SELECT * FROM employees;\nEND $$\nDELIMITER ;"
            },
            {
                "id": 4,
                "title": "CALL Procedure",
                "description": "Used to execute a stored procedure.",
                "example": "CALL getEmployees();"
            },
            {
                "id": 5,
                "title": "Procedure with Parameters",
                "description": "Stored procedures can accept input parameters.",
                "example": "DELIMITER $$\nCREATE PROCEDURE getEmployeeById(IN empId INT)\nBEGIN\n  SELECT * FROM employees WHERE id = empId;\nEND $$\nDELIMITER ;"
            },
            {
                "id": 6,
                "title": "IN, OUT Parameters",
                "description": "IN is used for input, OUT is used for output values.",
                "example": "IN empId INT, OUT total INT"
            },
            {
                "id": 7,
                "title": "Control Statements",
                "description": "Stored procedures support IF, LOOP, WHILE for logic.",
                "example": "IF salary > 50000 THEN SET status = 'High'; END IF;"
            },
            {
                "id": 8,
                "title": "Variables in Procedures",
                "description": "You can declare and use variables inside procedures.",
                "example": "DECLARE total INT DEFAULT 0;"
            },
            {
                "id": 9,
                "title": "DROP PROCEDURE",
                "description": "Deletes a stored procedure.",
                "example": "DROP PROCEDURE getEmployees;"
            },
            {
                "id": 10,
                "title": "Procedure vs Function",
                "description": "Procedure performs actions, function returns a value.",
                "example": "-- Procedure vs Function difference"
            },
            {
                "id": 11,
                "title": "Advantages",
                "description": "Improves performance, reusable, secure.",
                "example": "-- Faster execution"
            },
            {
                "id": 12,
                "title": "Disadvantages",
                "description": "Harder to debug, database dependent.",
                "example": "-- Debugging is complex"
            },
            {
                "id": 13,
                "title": "Common Mistakes",
                "description": "Forgetting delimiter, wrong parameter usage.",
                "example": "-- Missing DELIMITER"
            },
            {
                "id": 14,
                "title": "Best Practices",
                "description": "Keep procedures simple, use parameters, handle errors properly.",
                "example": "-- Clean logic"
            }
        ],
        "quiz": [
            {
                "question": "What is a stored procedure?",
                "options": [
                    "Saved SQL query",
                    "Temporary table",
                    "Database"
                ],
                "answer": "Saved SQL query"
            },
            {
                "question": "Which command executes procedure?",
                "options": ["RUN", "CALL", "EXECUTE"],
                "answer": "CALL"
            },
            {
                "question": "Which parameter is for input?",
                "options": ["IN", "OUT", "RETURN"],
                "answer": "IN"
            }
        ],
        "practice": [
            {
                "task": "Create a simple stored procedure.",
                "hint": "Use CREATE PROCEDURE"
            },
            {
                "task": "Call a stored procedure.",
                "hint": "Use CALL"
            },
            {
                "task": "Create procedure with parameter.",
                "hint": "Use IN parameter"
            },
            {
                "task": "Drop a stored procedure.",
                "hint": "Use DROP PROCEDURE"
            }
        ]
    }
]