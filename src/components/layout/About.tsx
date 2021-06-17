import React, { useState } from "react";
import "./About.scss";

const About = () => {
  const [show, setShow] = useState(false);

  const renderContents = () => {
    if (!show) {
      return (
        <div className="link" onClick={() => setShow(true)}>
          <h1>About Hooks</h1>
        </div>
      );
    } else {
      return (
        <>
          <h1>What can Hooks help you solve?</h1>
          <ul>
            <li>
              <h4>Wrapper Hell</h4>
              Hooks allow you to reuse stateful logic without changing your
              component hierarchy.
            </li>
            <li>
              <h4>Huge Components</h4>
              Hooks let you split one component into smaller functions based on
              what pieces are related (such as setting up a subscription or
              fetching data)
            </li>
            <li>
              <h4>Confusing Classes</h4>
              Hooks let you use more of React’s features without classes.
            </li>
          </ul>
        </>
      );
    }
  };

  return <div className="about-container">{renderContents()}</div>;
};

export default About;
