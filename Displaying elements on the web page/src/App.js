import "./styles.css";
import React from "react";
import { map } from "ramda";

const Header = ({ caption }) => (
  <div>
    <h2> {caption} </h2>
  </div>
);

const Content = ({ name, exercises }) => (
  <div>
    <h3>
      {name} {exercises}{" "}
    </h3>
  </div>
);

const Total = ({ total }) => (
  <div>
    <h4>Total Number is {total}</h4>
  </div>
);

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header caption={course.name} />
      {course.parts.map((course) => (
        <Content name={course.name} exercises={course.exercises} />
      ))}
    </div>
  );
};

export default App;
