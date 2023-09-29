import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import InlineInput from './ui/InlineInput';
import { loginInWithEmail } from '../../services/firebase';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    loginInWithEmail({ email, password });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <InlineInput props={{ placeholder: 'E-mail', type: 'email' }} id="email" label="E-mail" register={register} />
      <InlineInput
        props={{ type: 'password', placeholder: 'Password' }}
        id="password"
        label="Password"
        register={register}
      ></InlineInput>
      <button type="submit">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme['secondary']};
  padding: 25px 30px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  & > button {
    align-self: self-end;
  }
`;

export default Login;
