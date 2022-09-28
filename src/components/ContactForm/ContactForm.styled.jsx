import styled from 'styled-components';
import { Field, Form } from 'formik';

export const MainContactsForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${p => p.theme.space[2]}px;
`;

export const Input = styled(Field)`
  width: 400px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;

export const InputName = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accent};
`;

export const SubmitButton = styled.button`
  margin-top: ${p => p.theme.space[2]}px;
  display: flex;
  justify-content: center;
  width: 140px;
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  :hover,
  :focus {
    color: white;
    background-color: ${p => p.theme.colors.accent};
  }
`;
