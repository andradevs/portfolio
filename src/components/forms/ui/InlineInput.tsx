import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form';

interface IProps {
  id: string;
  label?: string;
  register: UseFormRegister<any>;
  props?: React.InputHTMLAttributes<object>;
}

const InlineInput = ({ id, label, register, props }: IProps) => {
  return (
    <Wrapper>
      <CustomInput {...props} {...register(id)} id={id} />
      <CustomLabel htmlFor={id}>{label}</CustomLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  ${({ theme }) => theme['menu']}
`;

const CustomInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['onPrimary']};
  outline: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme['onPrimary']};
  padding: 7px 0;
  background: transparent;

  &::placeholder {
    color: transparent;
    user-select: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #ffffff;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px ${({ theme }) => theme['primary']};
  }

  &:placeholder-shown ~ label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    border-image: ${({ theme }) => theme['gradient']};
    border-image-slice: 1;

    ~ label {
      font-size: 1rem;
      top: 0;
      background: ${({ theme }) => theme['gradient']};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
    }
  }
`;
const CustomLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  background: ${({ theme }) => theme['onPrimary']};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export default InlineInput;
