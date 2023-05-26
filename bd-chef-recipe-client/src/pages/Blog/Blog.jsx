import React from "react";
import { Button } from "react-bootstrap";

const Blog = () => {
  return (
    //  questions and answer section
    <div style={{ fontFamily: "playfairDisplay", textAlign: "center" }}>
      <h2
        className="text-center mb-4"
        style={{ fontSize: "45px", textDecoration: "underline" }}
      >
        {" "}
        <span style={{ color: "#da722c" }}>Answer And Question</span> Section
      </h2>
      {/* question 1 */}
      <div className="border rounded mb-4 p-2">
        <h1>
          <span style={{ color: "#da722c" }}>Question No 1: </span> Tell Us The
          Difference Between Uncontrolled And Controlled Components ?
        </h1>
        {/* Answer 1 */}
        <div>
          <p
            style={{
              color: "#da722c",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Answer:{" "}
          </p>{" "}
          <br />
          <p style={{ color: "#da722c", fontWeight: "bold" }}>
            Uncontrolled Components:
          </p>
          <ul>
            <ol>
              1. In uncontrolled components, the form data is managed by the DOM
              itself.
            </ol>
            <ol>
              2. The form inputs (such as input fields, checkboxes, and select
              dropdowns) hold their own state internally.
            </ol>
            <ol>
              3. The state is not controlled or managed by React, but rather
              accessed through the DOM using refs.
            </ol>
            <ol>
              4. Uncontrolled components are generally simpler to implement but
              offer less control and validation.
            </ol>
          </ul>
          <p style={{ color: "#da722c", fontWeight: "bold" }}>
            Controlled Components:{" "}
          </p>{" "}
          <br />
          <ul>
            <ol>
              1. In controlled components, the form data is managed by React
              component state.
            </ol>
            <ol>
              2. The state is defined and updated within the component and
              passed down to the form inputs as props.
            </ol>
            <ol>
              3. Any changes to the form inputs trigger a state update, and the
              component re-renders with the new values.
            </ol>
            <ol>
              4. Data retrieval from controlled components is done declaratively
              by accessing the state directly.
            </ol>
          </ul>
        </div>
      </div>
      {/* question 2 */}
      <div className="border rounded mb-4 p-2">
        <h1>
          <span style={{ color: "#da722c" }}>Question No 2: </span> How To
          Validate React Props Using Props Type ?
        </h1>
        {/* Answer 2 */}
        <div>
          <p
            style={{
              color: "#da722c",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Answer:{" "}
          </p>{" "}
          <br />
          React provides a built-in feature called PropTypes to validate the
          props passed to a component. PropTypes allow you to specify the type
          and shape of the props to ensure that they meet the expected
          requirements. Here's how you can validate React props using PropTypes:{" "}
          <br />
          <ul>
            <ol>1. Import PropTypes from the 'prop-types' package.</ol>
            <ol>2. Define the prop types for your component</ol>
            <ol>3. Use the component with the validated props:</ol>
          </ul>
        </div>
      </div>
      {/* question 3 */}
      <div className="border rounded mb-4 p-2">
        <h1>
          <span style={{ color: "#da722c" }}>Question No 3: </span> Tell Us The
          Difference Between NodeJs vs ExpressJs ?
        </h1>
        {/* Answer 3 */}
        <div>
          <p
            style={{
              color: "#da722c",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Answer:{" "}
          </p>{" "}
          <br />
          <p style={{ color: "#da722c", fontWeight: "bold" }}>Node.js: </p>{" "}
          <br />
          <ul>
            <ol>
              1. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
              engine.
            </ol>
            <ol>
              2. It allows developers to run JavaScript code on the server-side,
              enabling server-side scripting and handling backend operations.
            </ol>
            <ol>
              3. It has a vast ecosystem of modules and packages available
              through the npm (Node Package Manager) registry.
            </ol>
            <ol>
              4. Node.js can handle network requests, perform file system
              operations, interact with databases, and execute server-side
              business logic.
            </ol>
          </ul>{" "}
          <br />
          <p style={{ color: "#da722c", fontWeight: "bold" }}>
            Express.js:
          </p>{" "}
          <br />
          <ul>
            <ol>
              1. Express.js is a minimal, flexible, and lightweight web
              application framework for Node.js.
            </ol>
            <ol>
              2. It builds on top of Node.js, providing a higher-level
              abstraction for building web applications and APIs.
            </ol>
            <ol>
              3. Express.js allows developers to structure their applications in
              a modular and organized manner, making it easy to add middleware,
              implement authentication, and handle error management.
            </ol>
            <ol>
              4. It does not restrict developers to a specific project structure
              or impose strict conventions, providing freedom and flexibility in
              application design.
            </ol>
          </ul>
        </div>
      </div>
      {/* question 4 */}
      <div className="border rounded mb-4 p-2">
        <h1>
          <span style={{ color: "#da722c" }}>Question No 4: </span> What is a
          custom hook, and why will you create a custom hook ?
        </h1>
        {/* Answer 4 */}
        <div>
          <p
            style={{
              color: "#da722c",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Answer:{" "}
          </p>{" "}
          <br />
          A custom hook in React is a JavaScript function that utilizes React's
          built-in hooks (such as useState, useEffect, useContext, etc.) to
          encapsulate and reuse a specific piece of logic or stateful behavior.
          Custom hooks allow you to extract reusable code and share it across
          multiple components, promoting code organization, reusability, and
          maintainability. <br />
          <p style={{ color: "#da722c", fontWeight: "bold" }}>
            Here are a few reasons why you might create a custom hook:
          </p>{" "}
          <br />
          <ul>
            <ol>
              1. Reusability: Custom hooks enable you to encapsulate logic and
              state management into a single function that can be easily reused
              across multiple components. This promotes code reuse and reduces
              duplication, enhancing the maintainability and scalability of your
              codebase.
            </ol>
            <ol>
              2. Abstraction: Custom hooks allow you to abstract away complex or
              repetitive logic into a simple, self-contained function.{" "}
            </ol>
            <ol>
              3. Composition: Custom hooks can be composed together with other
              hooks and components, enabling you to build more complex and
              feature-rich behavior.{" "}
            </ol>
            <ol>
              4. Testing: Custom hooks can be independently tested, making it
              easier to write unit tests for the encapsulated logic. You can
              write test cases specifically for the custom hook without the need
              to mount and interact with a full React component.
            </ol>
          </ul>
        </div>
      </div>
      <Button
        onClick={() => {
          window.print();
        }}
        className="p-2 text-white border border-0 mb-4"
        style={{
          fontSize: "18px",
          background: "#da722c",
          width: "110px",
        }}
      >
        Make Pdf
      </Button>
    </div>
  );
};

export default Blog;
