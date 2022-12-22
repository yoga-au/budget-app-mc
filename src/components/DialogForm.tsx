import { forwardRef } from "react";
import styled from "styled-components";
import Button from "./Button";

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

  return (
    <DialogStyle ref={ref}>
      <FormStyle method="dialog">
        <LabelForm htmlFor="amount">{title}</LabelForm>
        <InputAmount type="number" name="amount" id="amount" />
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
