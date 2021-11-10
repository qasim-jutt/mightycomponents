/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import "./app.css";
// import CodeEditor from './components/codeEditor';
import CustomSelect from './components/customSelect';

function App() {
  const [data, setdata] = useState([{label:'item 1',value:'item1'},{label:'item 2',value:'item2'}])
  return (
    <div className='mightyContainer'>
      <CustomSelect onChange={(e) => console.log(e)} data={data} />
    </div>
  );
}

export default App;
