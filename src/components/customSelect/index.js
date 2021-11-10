/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import "./customSelect.css";
import { slideToggle, slideUp } from "../slideToggle";
import PropTypes from "prop-types";

const Index = ({ data, onChange, placeholder }) => {
    const mdr = useRef(null);
    const msb = useRef(null);
    const [label, setlabel] = useState(placeholder ?? "select one");

    const changeValue = (v, l) => {
        setlabel(l);
        slideUp(mdr.current);
        if(onChange) return onChange(v);
    };

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (!msb.current.contains(e.target)) {
                slideUp(mdr.current);
            }
        });
    }, []);
    return (
        <div className="mightySelect" style={{ maxWidth: "400px" }}>
            <button ref={msb} onClick={() => slideToggle(mdr.current)}>
                <span>{label}</span>
            </button>
            <ul ref={mdr} className="mightySelectDropdown">
                <li
                    onClick={() => changeValue("", placeholder ?? "select one")}
                >
                    {placeholder ?? "select one"}
                </li>
                {data?.map((row, i) => (
                    <li
                        onClick={() => changeValue(row?.value, row?.label)}
                        key={i}
                    >
                        {row.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

Index.propTypes = {
    data: PropTypes.array,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};

export default Index;
