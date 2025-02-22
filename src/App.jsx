import Header from "./components/Header.jsx";
import Calculator from "./components/Calculator.jsx";
import Table from "./components/Table.jsx";
import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  function handleInputData(field, value) {
    setInputData((prevData) => {
      return { ...prevData, [field]: value };
    });
  }

  return (
    <>
      <Header />
      <Calculator handleInputData={handleInputData} />
      <Table data={inputData} />
    </>
  );
}

export default App;
