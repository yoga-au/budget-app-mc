import styled, { css } from "styled-components";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface TransactionCardProps {
  cardTitle: string;
  transactionData: {
    title: string;
    timestamp: string;
    type: "expense" | "income";
    total: number;
  }[];
}

const TransactionCardWrapper = styled.div`
  background-color: white;
  box-shadow: 4px 8px 24px hsla(0, 0%, 0%, 0.1);
  padding: 1rem;
  border-radius: 1rem;
  display: grid;
  row-gap: 1rem;
`;

const TransactionHeading = styled.h3`
  font-family: "Unbounded", sans-serif;
`;

const TransactionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 8px;
  border-bottom: 1px solid #efefef;
`;

const TimestampTransaction = styled.p`
  font-size: 0.75rem;
  color: #818181;
`;

const TotalTransaction = styled.div<{ variant: "expense" | "income" }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ variant }) => (variant === "expense" ? "#e6492d" : "#34aa44")};
`;

const TransactionCard = ({
  cardTitle,
  transactionData,
}: TransactionCardProps) => {
  return (
    <TransactionCardWrapper>
      <TransactionHeading>{cardTitle}</TransactionHeading>
      {transactionData.map((transaction, idx) => {
        return (
          <TransactionWrapper key={idx}>
            <div>
              <p>{transaction.title}</p>
              <TimestampTransaction>
                {transaction.timestamp}
              </TimestampTransaction>
            </div>
            <TotalTransaction variant={transaction.type}>
              {transaction.type === "expense" ? (
                <AiFillCaretDown />
              ) : (
                <AiFillCaretUp />
              )}
              <p>
                {Intl.NumberFormat("id", {
                  currency: "IDR",
                  style: "currency",
                }).format(transaction.total)}
              </p>
            </TotalTransaction>
          </TransactionWrapper>
        );
      })}
    </TransactionCardWrapper>
  );
};

export default TransactionCard;
