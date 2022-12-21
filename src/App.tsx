import styled, { css } from "styled-components";
import BalanceCard from "./components/BalanceCard";
import Button from "./components/Button";

interface ButtonStyleProps {
  variant: "income" | "expense";
}

const AppWrapper = styled.div`
  margin: 1.5rem;
`;

const ButtonAddWrapper = styled.div`
  margin-block: 36px;
  display: grid;
  gap: 16px;
`;

function App() {
  return (
    <AppWrapper>
      <BalanceCard />
      <ButtonAddWrapper>
        <Button variant="income">Add Income</Button>
        <Button variant="expense">Add Expense</Button>
      </ButtonAddWrapper>
    </AppWrapper>
  );
}

export default App;
