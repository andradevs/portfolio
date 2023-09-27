import styled from 'styled-components';

const SignIn = () => {
  return <Form>SignIn</Form>;
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & > button {
    align-self: self-end;
  }
`;

export default SignIn;
