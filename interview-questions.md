# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is `this` in JavaScript?

Your answer: `this` is the JavaScript keyword to refer to methods, properties, or any variables in an object from inside the object. If `this` is not included, then an undefined would be returned.

Researched answer: In JavaScript, the `this` keyword refers to the object it belongs to. Depending on where it is used, `this` behaves differently. In a method, `this` refers to the object in which it is in. On its own or in a function, `this` refers to the global object. In a function, in strict mode, `this` is undefined. In an event, `this` refers to the element that received the event.

2. What is React? Why would you use it?

Your answer: React is a frontend JavaScript framework created by developers at Facebook to change the way user interact with websites. React alters the webpage through the virtual DOM thus eliminating the need for websites to reload when a change happens, like clicking a like button.

Researched answer: React is a client-side JavaScript framework that allows easy and effective manipulation ofthe DOM based on application data and how it changes and responds to user interaction. React facilitates creating fast, interactive applications and is heavily focused on the application's interactive UI. It can easily help create a highly interactive application with a UI that quickly reacts to different data inputs.

3. Which lifecycle method is required in a React class component?

Your answer: The birth of a React class component is required instantiate it. <!-- yeah i had no idea on this one 😅 -->

Researched answer: The `render()` method is the only required lifecycle method that needs to be called, the others, such as `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()` are optional and will be called if defined.

4. What is JSX? What is one notable difference between HTML and JSX?

Your answer: JSX is a hybrid HTML/JavaScript language used in React. It is a way to code HTML-like tags in JavaScript files.

Researched answer: JavaScript XML (JSX) is a syntax extension of JavaScript that allows us to write HTML in React.

5. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: Yarn is a package installer created by Facebook to pull down dependencies for software like React and Jest.

Researched answer: Yet Another Resource Negotiator (Yarn) is aimed to be a speedy, consistent, stable, and secure alternative to Node Package Manager (npm)

6. STRETCH: What is an anonymous function in JavaScript?

Your answer: An anonymous function in JavaScript is a function that typically is used only once and does not have a name.

Researched answer: The synatx for an anonymouse function would be something like:

```javascript
let anonFunc = function () {
  return "Anonymous function";
};

console.log(anonFunc()); //--> Anonymous function
```

## Looking Ahead: Terms for Next Week

1. Conditional rendering: In React, you can create distinct components that encapsulates a desired behavior. Then, depending on the state of your application, render only some of them.

2. Props: Properties or Props for short, is a way for the parent class to pass data to the child class, but not the other way around.

3. JavaScript Events: A JavaScript event is any action done by the user or even when the page loads. An event occurs when the user or the browser manipulates a page. Examples of an event would be `onClick`, when a user clicks on something.

4. Object-oriented programming: Object-oriented programming (OOP) is a programming paradigm that organizes its design around data, or objects, rather than functions and logic. OOP is well-suited for programs that are large, complex and actively updated or maintained. The structure of OOP is focused around classes, objects, methods, and attributes. The four main principles of OOP are encapsulation, abstraction, inheritance, and polymorphism.

5. Ruby: An interpreted general purpose programming language developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. It supports many programming paradigms, including procedural, object-oriented, and functional programming.
