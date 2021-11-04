import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Index = ({ children, collapsed }) => {
  const slideNode = useRef(null);
  const slideUp = () => {
    const e = slideNode.current;
    e.style.transition = "0.3s height ease-in-out";
    e.style.height = `${e.offsetHeight}px`;
    e.style.overflow = "hidden";
    setTimeout(() => {
      e.style.height = "0px";
    }, 10);
    setTimeout(() => {
      e.style.removeProperty("transition");
      e.style.removeProperty("height");
      e.style.removeProperty("overflow");
      e.style.display = "none";
    }, 300);
  };

  const slideDown = () => {
    const e = slideNode.current;
    e.style.display = "block";
    let height = `${e.offsetHeight}px`;
    e.style.removeProperty("overflow");
    e.style.height = "0px";
    e.style.overflow = "hidden";
    e.style.transition = "0.3s height ease-in-out";
    setTimeout(() => {
      e.style.height = height;
    }, 10);
    setTimeout(() => {
      e.style.removeProperty("transition");
      e.style.removeProperty("height");
      e.style.removeProperty("overflow");
    }, 300);
  };

  useEffect(() => {
    const e = slideNode.current;
    console.log(e.offsetHeight);
    collapsed ? slideUp() : slideDown();
  }, [collapsed]);
  return <div ref={slideNode}>{children}</div>;
};

Index.propTypes = {
  collapsed: PropTypes.bool,
};
export default Index;
