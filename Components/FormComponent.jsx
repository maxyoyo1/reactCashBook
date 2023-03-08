import { number } from "prop-types";
import { useEffect, useState } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from "uuid";
function FromComponent(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);

  console.log("renderform");
  const inputTitle = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const inputAmount = (event) => {
    const value = event.target.value;
    setAmount(value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData);
    setTitle("");
    setAmount(0);
    console.log(itemData);
  };

  useEffect(() => {
    const checkData = title.length > 0 && amount !== 0;
    if (checkData) {
      setFormValid(checkData);
    }
    console.log("useeffect");
  }, [title, amount]);

  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการของคุณ"
            onChange={inputTitle}
            value={title}
          ></input>
        </div>
        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input
            type="number"
            placeholder="(+ รายรับ,- รายจ่าย)"
            onChange={inputAmount}
            value={amount}
          ></input>
        </div>
        <div>
          <button type="submit" disabled={!formValid} className="btn">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
}
export default FromComponent;
