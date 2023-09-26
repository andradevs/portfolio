import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example'));
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InlineInput>
          <input type="text" name="login" placeholder="Login" />
          <label htmlFor="login">Login</label>
        </InlineInput>
        <InlineInput>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </InlineInput>
        <button type="submit">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > h1 {
    ${({ theme }) => theme['headline3']};
    color: ${({ theme }) => theme['onPrimary']};
  }
`;

const InlineInput = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  /* width:; */
  ${({ theme }) => theme['menu']}

  & > input {
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
  }

  & > label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    /* font-size: 1rem; */
    background: ${({ theme }) => theme['onPrimary']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

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

export default Login;
