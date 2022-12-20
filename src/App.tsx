import styled from "styled-components";
import BalanceCard from "./components/BalanceCard";

const AppWrapper = styled.div`
  margin: 1.5rem;
`;

function App() {
  return (
    <AppWrapper>
      <BalanceCard />
    </AppWrapper>
  );
}

export default App;
