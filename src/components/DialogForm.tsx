import { forwardRef, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";

type Ref = HTMLDialogElement;

interface DialogFormProps {
  title: string;
  onCancel: () => void;
  onSubmit: (transactionName: string, amount: number) => void;
}

const DialogStyle = styled.dialog`
  margin: auto;
  border-color: transparent;
  padding: 1rem;
  border-radius: 1rem;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LabelForm = styled.label`
  font-family: "Unbounded", sans-serif;
  font-size: 1.25rem;
`;

const InputAmount = styled.input`
  display: block;
  border-radius: 0.5rem;
  border-style: solid;
  padding: 0.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DialogForm = forwardRef<Ref, DialogFormProps>((props, ref) => {
  const { title, onSubmit, onCancel } = props;

  const amount = useRef(0);
  const transactionName = useRef("");

  return (
    <DialogStyle ref={ref}>
      <FormStyle
        method="dialog"
        onSubmit={(ev) => {
          ev.preventDefault();
          onSubmit(transactionName.current, amount.current);
        }}
      >
        <LabelForm htmlFor="transactionName">Transaction Name</LabelForm>
        <InputAmount
          name="transactionName"
          id="transactionName"
          onChange={(ev) => {
            transactionName.current = ev.target.value;
          }}
        />
        <LabelForm htmlFor="amount">{title}</LabelForm>
        <InputAmount
          name="amount"
          id="amount"
          inputMode="numeric"
          type="number"
          onChange={(ev) => {
            amount.current = parseInt(ev.target.value);
          }}
        />
        <ButtonWrapper>
          <Button type="submit" variant="income">
            Add
          </Button>
          <Button
            variant="expense"
            onClick={(ev) => {
              ev.preventDefault();
              onCancel();
            }}
          >
            Cancel
          </Button>
        </ButtonWrapper>
      </FormStyle>
    </DialogStyle>
  );
});

export default DialogForm;
