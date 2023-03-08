import "./items.css";
import PropTypes from "prop-types";

function Items(props) {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <li className={status}>
      {title}
      <span>
        {symbol}
        {formatNumber(Math.abs(amount))}
      </span>
    </li>
  );
}
Items.prototype = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Items;
