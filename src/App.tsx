import styled from "styled-components";
import BalanceCard from "./components/BalanceCard";
import Button from "./components/Button";
import TransactionCard from "./components/TransactionCard";

import type { ComponentProps } from "react";

const AppWrapper = styled.div`
  margin: 1.5rem;
`;

const ButtonAddWrapper = styled.div`
  margin-block: 36px;
  display: grid;
  gap: 16px;
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
      <BalanceCard />
      <ButtonAddWrapper>
        <Button variant="income">Add Income</Button>
        <Button variant="expense">Add Expense</Button>
      </ButtonAddWrapper>
      {/* Recent transaction */}
      <TransactionCard
        cardTitle="Recent Transaction"
        transactionData={transactionArray}
      />
    </AppWrapper>
  );
}

export default App;
