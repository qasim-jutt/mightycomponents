/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CustomSelect from "../components/customSelect";

const Index = () => {
  const [data, setdata] = useState([
    { label: "item 1", value: "item1" },
    { label: "item 2", value: "item2" },
  ]);
  const [value, setvalue] = useState('')
  return (
    <div className="mightyContainer">
      <h1>Value: {value}</h1>
      <CustomSelect onChange={(e) => setvalue(e)} data={data} />
    </div>
  );
};

export default Index;
