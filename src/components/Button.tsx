import styled from 'styled-components';

interface IProps {
  text: string;
  onAction(): void;
}

const Button = ({ text, onAction }: IProps) => {
  return <ButtonStyled onClick={onAction}>{text}</ButtonStyled>;
};

const ButtonStyled = styled.button``;

export default Button;
