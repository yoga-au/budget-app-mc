import { forwardRef } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useTransactionStore } from "../store/transactionStore";

type Ref = HTMLDialogElement;

interface DialogFormProps {
  title: string;
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
  border-radius: 0.25rem;
  border-style: solid;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DialogForm = forwardRef<Ref, DialogFormProps>((props, ref) => {
  const { title } = props;

  const addBalance = useTransactionStore((state) => state.addBalance);
  const addExpense = useTransactionStore((state) => state.addExpense);

  return (
    <DialogStyle ref={ref}>
      <FormStyle method="dialog">
        <LabelForm htmlFor="amount">{title}</LabelForm>
        <InputAmount name="amount" id="amount" inputMode="numeric" />
        <ButtonWrapper>
          <Button type="submit" variant="income">
            Add
          </Button>
          <Button variant="expense">Cancel</Button>
        </ButtonWrapper>
      </FormStyle>
    </DialogStyle>
  );
});

export default DialogForm;
