import styled from "styled-components";

const BalanceCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-block: 1rem;
  padding-inline: 1.5rem;
  min-height: 200px;
  background: linear-gradient(135deg, #4361ce, #031a6e);
  border-radius: 1rem;
  color: white;
  box-shadow: 3px 6px 12px hsla(0, 0%, 0%, 0.4);
`;

const BalanceTitle = styled.p`
  font-size: 1.5rem;
  line-height: 130%;
  font-family: "Unbounded", sans-serif;
`;

const BalanceSubtitle = styled.p`
  font-size: 0.875rem;
  opacity: 0.75;
`;

const BalanceDigit = styled.p`
  font-size: 2rem;
`;

interface BalanceCardProps {
  balance: number;
}

const BalanceCard = ({ balance }: BalanceCardProps) => {
  return (
    <BalanceCardWrapper>
      <div>
        {/* Balance Title */}
        <BalanceTitle>Balance</BalanceTitle>
        {/* Subtitle */}
        <BalanceSubtitle>Your current balance</BalanceSubtitle>
      </div>
      {/* Balance Amount */}
      <div>
        {/* Amount */}
        <BalanceDigit>
          {Intl.NumberFormat("id", {
            currency: "IDR",
            style: "currency",
          }).format(balance)}
        </BalanceDigit>
        {/* Logo */}
      </div>
    </BalanceCardWrapper>
  );
};

export default BalanceCard;
