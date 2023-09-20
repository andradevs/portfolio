import styled from 'styled-components';
import avatar from '../assets/avatar.jpg';

const Avatar = () => {
  return (
    <Wrapper>
      <img src={avatar} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  img {
    width: 100%;
    border-radius: 60%;
  }
`;
export default Avatar;
