import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import InlineInput from './ui/InlineInput';

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <InlineInput props={{ placeholder: 'Login' }} id="login" label="Login" register={register} />
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

  & > button {
    align-self: self-end;
  }
`;

export default Login;
