/* eslint-disable no-unused-vars */
import React,{useRef, useState, useEffect} from 'react';
import './customSelect.css';
import {slideToggle, slideUp} from '../slideToggle';

const Index = () => {
    const mdr = useRef(null);
    const msb = useRef(null);
    const [value, setvalue] = useState('');
    const [label, setlabel] = useState('select one')
    const [data, setdata] = useState([{label:'item 1',value:'item1'},{label:'item 2',value:'item2'}])
    const changeValue = (v,l) => {
        setvalue(v);
        setlabel(l);
        slideUp(mdr.current)
    }

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (!msb.current.contains(e.target)) {
                slideUp(mdr.current)
            }
        })
    },[])
    return (
        <div className='mightySelect' style={{maxWidth:'400px'}}>
            <button ref={msb} onClick={() => slideToggle(mdr.current)}><span>{label}</span></button>
            <ul ref={mdr} className="mightySelectDropdown">
            <li onClick={() => changeValue('','select one')}>select one</li>
                {
                    data.map((row, i) => (
                        <li onClick={() => changeValue(row.value,row.label)} key={i}>{row.label}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Index
