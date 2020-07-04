### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    ```
    React is a powerful front end framework that makes it easy to build out re-usable components and modular applications.
    ```
- What is Babel?
     ```
    Babel transpiles JSX code so it can be read by the browser.
     ```
    
- What is JSX?
    ```
    JSX is a language similar to HTML that React uses to create HTML elements. 
    ```
- How is a Component created in React?
    ```
    import React from 'react';

    function App(){
        return(<h1>Hello World</h1>)
    }

    export default App;
    ```
- What are some difference between state and props?
    ```
    Props are immutable and usually passed into components. States are changeable.
    ```
- What does "downward data flow" refer to in React?
    ```
    When data has one, and only one, way to be transferred to other parts of the application.
    ```
- What is a controlled component?
    ```
    In a controlled component, form data is handled by a React component.
    ```
- What is an uncontrolled component?
    ```
    In an uncontrolled component, form data is handled by the DOM itself.
    ```
- What is the purpose of the `key` prop when rendering a list of components?
    ```
    React's `key` prop gives the ability to control component instances.
    ```
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    ```
    You would have to loop through the array to find the key. The `key` prop is intended to be stored in an object to make selection easier.
    ```
- Describe useEffect.  What use cases is it used for in React components?
    ```
    `useEffect` tells React that your component needs to do something after render.
    ```
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    ```
    The useRef Hook is a function that returns a mutable ref object whose current property is initialized with the passed argument.
    ```
- When would you use a ref? When wouldn't you use one?
    ```
    Setting up/clearing timers.
    ```
- What is a custom hook in React? When would you want to write one?
    ```
    A Javascript function that typically uses built in hooks and can be re-used.
    ```