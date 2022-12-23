import { useRef, useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import BalanceCard from "./components/BalanceCard";
import Button from "./components/Button";
import TransactionCard from "./components/TransactionCard";
import DialogForm from "./components/DialogForm";
import { useTransactionStore } from "./store/transactionStore";

import type { ComponentProps } from "react";

const AppWrapper = styled.div`
  margin: 1.5rem;
  max-width: 1280px;

  @media screen and (min-width: calc(80em + 1.5em)) {
    margin: 1.5rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2.25rem;
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
  const [formType, setFormType] = useState<"income" | "expense">("income");

  const dialogRef = useRef<HTMLDialogElement>(null);

  const balance = useTransactionStore((state) => state.balance);
  const transactionData = useTransactionStore((state) => state.transaction);
  const addBalance = useTransactionStore((state) => state.addBalance);
  const addExpense = useTransactionStore((state) => state.addExpense);

  return (
    <AppWrapper>
      <BudgetAndAddWrapper>
        <div>
          <BalanceCard balance={balance} />
          <ButtonAddWrapper>
            <Button
              variant="income"
              onClick={() => {
                if (dialogRef.current) {
                  dialogRef.current.showModal();
                  setFormType("income");
                }
              }}
            >
              Add Balance
            </Button>
            <Button
              variant="expense"
              onClick={() => {
                if (dialogRef.current) {
                  dialogRef.current.showModal();
                  setFormType("expense");
                }
              }}
            >
              Add Expense
            </Button>
          </ButtonAddWrapper>
        </div>
        <TransactionCard
          cardTitle="Recent Transaction"
          transactionData={transactionData.slice(0, 5)}
        />
      </BudgetAndAddWrapper>
      <div>
        <TransactionCard
          cardTitle="Expense Transaction"
          transactionData={transactionData
            .filter((item) => item.type === "expense")
            .slice(0, 5)}
        />
        <TransactionCard
          cardTitle="Income Transaction"
          transactionData={transactionData
            .filter((item) => item.type === "income")
            .slice(0, 5)}
        />
      </div>
      <DialogForm
        title={formType === "expense" ? "Add Expense" : "Add Balance"}
        ref={dialogRef}
        onSubmit={(transactionName, amount) => {
          if (dialogRef.current) {
            if (formType === "expense") {
              addExpense({
                title: transactionName,
                total: amount,
                timestamp: dayjs().format("DD/MM/YYYY HH:mm"),
                type: "expense",
              });
              dialogRef.current.close();
              return;
            }

            addBalance({
              title: transactionName,
              total: amount,
              timestamp: dayjs().format("DD/MM/YYYY HH:mm"),
              type: "income",
            });
            dialogRef.current.close();
          }
        }}
        onCancel={() => {
          if (dialogRef.current) {
            dialogRef.current.close();
          }
        }}
      />
    </AppWrapper>
  );
}

export default App;
