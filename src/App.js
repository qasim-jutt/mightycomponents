import React, { useRef } from "react";
import {slideUp, slideDown, slideToggle} from "./components/slideToggle";
import './app.css'

function App() {
  const target = useRef();
  return (
    <React.Fragment>
      <button onClick={() => slideUp(target.current)}>
        hide
      </button>
      <button onClick={() => slideDown(target.current)}>
        show
      </button>
      <button onClick={() => slideToggle(target.current)}>
        toggle
      </button>
        <div className='box' ref={target}>
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
    </React.Fragment>
  );
}

export default App;
