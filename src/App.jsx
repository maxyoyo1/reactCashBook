import React, { useState, useEffect, useReducer } from "react";
import Transction from "../Components/Transction";
import "./App.css";
import FromComponent from "../Components/FormComponent";
import DataContext from "../Data/DataContext";
import ReportComponent from "../Components/ReportComponent";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function App() {
  const initState = [
    { id: 1, title: "ค่าขนม", amount: -2000 },
    { id: 2, title: "เงินเดือน", amount: 12000 },
    { id: 3, title: "ค่าเดินทาง", amount: -500 },
    { id: 4, title: "ขายของ", amount: 2000 },
  ];
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);

    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
    console.log("รายได้", income);
    console.log("รายจ่าย", expense);
  }, [items, reportIncome, reportExpense]);
  // reducer state
  // const [count, setCount] = useState(0);
  // const [showReport, setShowReport] = useState(false);
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true);
  //     case "HIDE":
  //       return setShowReport(false);
  // case "ADD":
  //   return state + action.payload;
  // case "SUB":
  //   return state - action.payload;
  // case "CLEAR":
  //   return 0;
  // }
  // };
  // const [result, dispatch] = useReducer(reducer, showReport);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1 style={design}>แอพบัญชีรายรับ-รายจ่าย</h1>
        <Router>
          <ul className="horizontal-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/insert">About</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<ReportComponent />}></Route>
            <Route
              path="/insert"
              element={
                <>
                  <FromComponent onAddItem={onAddNewItem} />{" "}
                  <Transction items={items} />{" "}
                </>
              }
            ></Route>
          </Routes>
        </Router>

        {/* <ReportComponent />
        <FromComponent onAddNewItem={onAddNewItem} />
        <Transction items={items} /> */}
        {/* {showReport && <ReportComponent />} */}
      </div>
      <div>
        {/* <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "SHOW" })}>แสดง</button>
        <button onClick={() => dispatch({ type: "HIDE" })}>ซ่อน</button> */}
        {/* <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>
          เพิ่ม
        </button>
        <button onClick={() => dispatch({ type: "SUB", payload: 5 })}>
          ลบ{" "}
        </button> */}
        {/* <button onClick={() => dispatch({ type: "CLEAR" })}>ล้าง</button> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
