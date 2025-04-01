import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <center>
        <Header />
        <div className="conatiner">
          <Balance />
          <IncomeExpense></IncomeExpense>
          <TransactionList />
          <AddTransaction />
        </div>
      </center>
    </GlobalProvider>
  );
}

export default App;
