# Common Questions

# Object Orient Programming
# Inheritance
A new class is created (derived) that inherits the features from the already existing class (base class),
while also extending and/or changing parts of it
It supports the concept of code reusability when classes have a lot in common

# Polymorphism
Perform a single action in different forms
The ability to call the same method on different objects
Each object responds in different ways
Polymorphism allows the object to decide which form of the function to implement at compile time as well as run time. 

# What is 29 in binary and hexadecimal?
binary 11101
      2^4 + 2^3 + 2^2 + 2^1 + 2^0
      16  +  8  +  4  +  0  +  1      

hexadecimal  base 16, each spot is the multiplication of 16
A=10, B=11, C, 12, D= 13, E=14, F=15
   1    D
  16 + 13

# 2 What is a singleton class?
A class that can only be instantiated once

# 4 With threads A and B and resource x and y, describe a deadlock situation
Thread A reserves resource x, Thread B reserves resource y
Thread A, without release resource x, requests resource y, but has to wait for thread B to release it
Thread B, without releasing resource y, requests resource x, but has to wait for thread A to release it
Deadlock situation: each waits for the release without releasing the resource

# 5 What is a non functional requirement?
A non -functional requirement specifies general behavior requirements of the system. It describes what you want your system to be, rather than what it should do. Some non-functional requirements include, accessibility, maintainability, and security. 

# 6 what is a functional requirement?
the specific functionality you want of your system

# 7 What are the steps of the waterfall method?
Requirements
Design
Implementation
Verification
Maintenance

# 8 In scrum, what is the purpose of daily stand ups?
Each team member answers:
What did I do yesterday?
What will I do today?
Have I discovered anything that might impede our progress towards the sprint goal?

# 9 Main advantages and disadvantages of paper prototyping?
Benefits: quick, cheap, easily allows an entire team to take part in the design process

Disadvantages: hard to emulate the true feel of the system and certain functionality, such as scrolling, data entry, and dynamic elements. Often paper prototyping will only be able to show the general outline (breadth first) or show off a few specific functionalities (depth first) of the system

# 10 What is the purpose of the sequence diagram/ event diagram? 
A sequence diagram shows the interaction, sent messages and return values, between objects, and in what order they are sent. This gives an idea of the runtime flow of the application

# 11 What is modularization?
Modularization is a technique where the software is divided into several modules that work independently of each other. The main benefit of this is better maintainability

# 12 Can you describe the Model-View-Controller Architecture
The MVC architecture is used most commonly for GUI applications, and means to separate the data from the user interface. The model layer holds the data, the view layer outputs the data to the user and the controller is responsible for making changes to the model based on user input
Model: holds data
View: outputs the data
Controller: changes model based on user input


# 13 What is a directed acyclic graph?
A DAG is a directed (edges have direction) graph without any cycles (it is impossible to start at a node, and following any directed edges return to that same node)

# 14 what is the difference between black box and white box testing?
black box testing: only tests a function for correct output and input
white box testing: tests if implementation is correct

# 15 What is the difference between a queue and a stack? 
Queue: FIFO first in first out, line
Stack: LIFO last in first out, pringles can

# 16 What is a recursive function? 
A recursive function is a function that calls itself. At each function call, one or more parameters are changed. The recursion continues until a base case ( a set of parameters which return a value instead of calling itself recursively) is reached and the recursion is resolved

# 17 What is the average and worst case run time of the quick sort algorithm?
Average: O (n log n)
Worst case: O (n^2)

# 18 How does the A* algorithm work?
A* is a path-finding algorithm that works on weighted graphs with a heuristic function that estimates the cost of traveling from node n to the goal node (The heuristic function is problem specific)

The nodes to be considered at each step is stored in a collection - usually a priority queue. It starts by adding every node that is adjacent to the start node into the queue with their estimated total cost, based on the formula f(n) = g(n) + h(n), where g(n) is the actual cost from the start node to node n, while h(n) is the heuristic function

At each iteration, the node with the smallest estimated cost f(n) is expanded. A path is found when the goal node is the one chosen for expansion. Alternatively, no path is found if the queue becomes empty.

# heuristic 
Heuristic: problem solving or self discovery, practical method that is not guaranteed to be optimal, but is sufficient for reaching an immediate, short term goal or approximation

# 19 In SQL, with unique keys, what does inner and outer join do?
Both operations join two tables. Inner join works as the intersection between the tables, so only keys that exists in both tables will be kept in the joined table

Outer join works as the union between the tables, so all rows are included in the joined table. (Left outer join will keep all rows from the left table, while only the rows with keys that also exists in the left table are included from the right table. Equivalently, right outer join includes all rows from the right table, but not necessarily all rows from the left)

Inner is only what is in common
Outer is everything is joined
Left outer join is all of left and what is common from right

# 20 What is an SQL injection, how are they prevented?
SQL injection is when SQL statements are entered into data fields that are to be stored in a SQL database. The most usual mitigation techniques include parameterized statements, escaping characters with special meaning in SQL, pattern checking and limiting database permission. 
