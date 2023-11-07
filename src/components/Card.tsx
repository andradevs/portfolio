import styled from 'styled-components';
import { Link } from 'react-router-dom';
interface IProps {
  url: string;
  imageSrc: string;
  name: string;
  description: string;
}

const Card = ({ url, imageSrc, name, description }: IProps) => {
  //   const logo = require(imageSrc).default;
  return (
    <Link style={{ textDecoration: 'none' }} to={url}>
      <Wrapper>
        <ImgWrapper>
          <img src={imageSrc} alt={name} />
        </ImgWrapper>
        <Content>
          <h1>{name}</h1>
          <p>{description}</p>
        </Content>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme['primary']};
  border-radius: 15px;
  background: ${({ theme }) => theme['primary']};
  overflow: hidden;
  position: relative;
`;
const ImgWrapper = styled.div`
  img {
    width: 100%;
  }
`;
const Content = styled.div`
  padding: 1.5rem;
  color: ${({ theme }) => theme['onPrimary']};
  h1 {
    margin: 0;
    ${({ theme }) => theme['headline5']};
  }
  p {
    ${({ theme }) => theme['paragraph3']};
    /* margin-top:; */
  }
`;

export default Card;
