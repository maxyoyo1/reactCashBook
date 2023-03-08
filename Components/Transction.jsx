import Items from "./Items";
import "./Transction.css";
import DataContext from "../Data/DataContext";
import { useContext } from "react";
function Transction(props) {
  const { items } = props;
  const { income, expense } = useContext(DataContext);

  // const name = useContext(DataContext);
  return (
    <div>
      <ul className="item-list">
        {items.map((element) => {
          return <Items {...element} key={element.id} />;
        })}
      </ul>
      {/* <p>รายรับ:{income}</p>
      <p>รายจ่าย:{expense}</p> */}
      {/* <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer> */}
    </div>
  );
}

export default Transction;
