import styled from "styled-components";
import BalanceCard from "./components/BalanceCard";
import Button from "./components/Button";
import TransactionCard from "./components/TransactionCard";

import type { ComponentProps } from "react";

const AppWrapper = styled.div`
  margin: 1.5rem;
  max-width: 1280px;

  @media screen and (min-width: 80em) {
    margin: 1.5rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 36px;
  }
`;

const BudgetAndAddWrapper = styled.div`
  @media screen and (min-width: 80em) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ButtonAddWrapper = styled.div`
  margin-block: 2.25rem;
  display: grid;
  gap: 1rem;
`;

function App() {
  const transactionArray: ComponentProps<
    typeof TransactionCard
  >["transactionData"] = [
    {
      title: "Beli Sayuran",
      timestamp: "12/21/2022 10:39",
      type: "expense",
      total: 100000,
    },
    {
      title: "Beli Sayuran",
      timestamp: "12/21/2022 10:39",
      type: "income",
      total: 50000,
    },
    {
      title: "Beli Sayuran",
      timestamp: "12/21/2022 10:39",
      type: "income",
      total: 150000,
    },
    {
      title: "Beli Sayuran",
      timestamp: "12/21/2022 10:39",
      type: "expense",
      total: 100000,
    },
    {
      title: "Beli Sayuran",
      timestamp: "12/21/2022 10:39",
      type: "expense",
      total: 100000,
    },
  ];

  return (
    <AppWrapper>
      <BudgetAndAddWrapper>
        <div>
          <BalanceCard />
          <ButtonAddWrapper>
            <Button variant="income">Add Income</Button>
            <Button variant="expense">Add Expense</Button>
          </ButtonAddWrapper>
        </div>
        <TransactionCard
          cardTitle="Recent Transaction"
          transactionData={transactionArray}
        />
      </BudgetAndAddWrapper>
      <div>
        <TransactionCard
          cardTitle="Expense Transaction"
          transactionData={transactionArray.filter(
            (item) => item.type === "expense"
          )}
        />
        <TransactionCard
          cardTitle="Income Transaction"
          transactionData={transactionArray.filter(
            (item) => item.type === "income"
          )}
        />
      </div>
    </AppWrapper>
  );
}

export default App;
