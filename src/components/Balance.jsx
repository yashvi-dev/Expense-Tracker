import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const total = transactions?.length
    ? transactions
        .reduce((acc, transaction) => acc + transaction.amount, 0)
        .toFixed(2)
    : "0.00";

  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
