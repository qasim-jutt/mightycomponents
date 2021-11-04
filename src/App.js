import React, { useState } from "react";
import SlideToggle from "./components/slideToggle";

function App() {
  const [toggle, settoggle] = useState(false);
  return (
    <React.Fragment>
      <button onClick={() => (toggle ? settoggle(false) : settoggle(true))}>
        toggle
      </button>
      <SlideToggle collapsed={toggle}>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
          aspernatur dicta molestias, officia nulla suscipit, asperiores
          praesentium tempore magni maiores impedit voluptatum esse hic minima!
          Odit itaque quis consequatur mollitia. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Cumque aspernatur dicta molestias,
          officia nulla suscipit, asperiores praesentium tempore magni maiores
          impedit voluptatum esse hic minima! Odit itaque quis consequatur
          mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Cumque aspernatur dicta molestias, officia nulla suscipit, asperiores
          praesentium tempore magni maiores impedit voluptatum esse hic minima!
          Odit itaque quis consequatur mollitia. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Cumque aspernatur dicta molestias,
          officia nulla suscipit, asperiores praesentium tempore magni maiores
          impedit voluptatum esse hic minima! Odit itaque quis consequatur
          mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Cumque aspernatur dicta molestias, officia nulla suscipit, asperiores
          praesentium tempore magni maiores impedit voluptatum esse hic minima!
          Odit itaque quis consequatur mollitia. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Cumque aspernatur dicta molestias,
          officia nulla suscipit, asperiores praesentium tempore magni maiores
          impedit voluptatum esse hic minima! Odit itaque quis consequatur
          mollitia.
        </div>
      </SlideToggle>
    </React.Fragment>
  );
}

export default App;
