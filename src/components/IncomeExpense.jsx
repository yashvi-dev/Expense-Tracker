import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions?.length
    ? transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)
        .toFixed(2)
    : "0.00";

  const expense = transactions?.length
    ? Math.abs(
        transactions
          .filter((transaction) => transaction.amount < 0)
          .reduce((acc, transaction) => acc + transaction.amount, 0)
      ).toFixed(2)
    : "0.00";

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
