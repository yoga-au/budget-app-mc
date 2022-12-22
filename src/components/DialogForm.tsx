import { forwardRef, useRef } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import Button from "./Button";
import { useTransactionStore } from "../store/transactionStore";

import type { FormEvent } from "react";

type Ref = HTMLDialogElement;

interface DialogFormProps {
  title: string;
  type: "income" | "expense";
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
  const { title, type } = props;

  const amount = useRef(0);
  const transactionName = useRef("");

  const addBalance = useTransactionStore((state) => state.addBalance);
  const addExpense = useTransactionStore((state) => state.addExpense);

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    if (type === "expense") {
      addExpense({
        title: transactionName.current,
        total: amount.current,
        timestamp: dayjs().format("DD/MM/YYYY HH:mm"),
        type: "expense",
      });
      return;
    }

    addBalance({
      title: transactionName.current,
      total: amount.current,
      timestamp: dayjs().format("DD/MM/YYYY HH:mm"),
      type: "income",
    });
  };

  return (
    <DialogStyle ref={ref}>
      <FormStyle
        method="dialog"
        onSubmit={(ev) => {
          onSubmit(ev);
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
          <Button variant="expense">Cancel</Button>
        </ButtonWrapper>
      </FormStyle>
    </DialogStyle>
  );
});

export default DialogForm;
