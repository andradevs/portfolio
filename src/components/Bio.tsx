import styled from 'styled-components';
import Avatar from './Avatar';

const Bio = () => {
  return (
    <Wrapper>
      <Avatar />
      <BioWrapper>
        <Headline>
          Olá, meu nome é <span>Guilherme Andarade.</span>
        </Headline>
        <SubHeadline>Desenvolvedor Front-End e FullStack no Brasil, especializado em Desenvolvimento Web. </SubHeadline>
      </BioWrapper>
      <ButtonWrappers>
        <button className="gradient">GET IN TOUCH</button>
        <button>VIEW ALL WORKS</button>
      </ButtonWrappers>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 1440px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BioWrapper = styled.div`
  text-align: center;
  width: 75%;
`;

const Headline = styled.h1`
  ${({ theme }) => theme['headline3']}
  color:${({ theme }) => theme['onPrimary']};

  & span {
    background: ${({ theme }) => theme['gradient']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SubHeadline = styled.div`
  ${({ theme }) => theme['paragraph1']}
  color:${({ theme }) => theme['onPrimary']};
`;

const ButtonWrappers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export default Bio;