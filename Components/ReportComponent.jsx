import DataContext from "../Data/DataContext";
import { useContext } from "react";
import "../Components/ReportComponent.css";
const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  //   const name = useContext(DataContext);
  return (
    <div>
      <h4>ยอทคงเหลือ (บาท)</h4>
      <h1>฿{formatNumber((income - expense).toFixed(2))}</h1>
      <div className="report-container">
        <div>
          <h4>ยอดรายรับ</h4>
          <p className="report plus">฿{formatNumber(income)}</p>
        </div>
        <div>
          <h4>ยอดรายจ่าย</h4>
          <p className="report minus">฿{formatNumber(expense)}</p>
        </div>
      </div>
      {/* {(context) => (
              <DataContext.Consumer> รายรับ : {context.income} รายจ่าย : {context.expense}</DataContext.Consumer>
         )} */}
      {/* <p>
        รายรับ : {income} รายจ่าย : {expense}
      </p> */}
    </div>
  );
};
export default ReportComponent;
