import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Card from './Card';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <ProjectsWrapper>
        <TitleWrapper>
          <div>
            <h1>{t('Look at My')}</h1>
            <h1>
              <span>{t('Projects')}.</span>
            </h1>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus velit. Aenean vel nisi bibendum,
              volutpat nunc et, laoreet lectus. Nulla auctor a nisi eu facilisis. Maecenas tristique mauris vitae augue
              commodo scelerisque. Maecenas aliquet eu libero non pulvinar. Praesent arcu eros, malesuada id efficitur
              eu, vehicula nec felis. Pellentesque nisi mi, sollicitudin et turpis sit amet, placerat aliquam arcu.
            </p>
          </div>
        </TitleWrapper>
        <Cards>
          <Card imageSrc="teste.png" name="Teste" url="#" description="teste description" />
          <Card imageSrc="teste.png" name="Teste" url="#" description="teste description" />
          <Card imageSrc="teste.png" name="Teste" url="#" description="teste description" />
        </Cards>
      </ProjectsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  padding: 2rem 10px 2rem 10px;
  background: ${({ theme }) => theme['secondary']};
  display: flex;
  justify-content: center;
`;
const ProjectsWrapper = styled.div`
  width: 1440px;
  padding: 0px 15px;
  position: relative;
`;

const TitleWrapper = styled.div`
  /* display: flex;
  justify-content: start;
  align-items: center; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem 3rem;
  margin-bottom: 2rem;

  & h1 {
    margin: 0;
    color: ${({ theme }) => theme['onSecondary']};
    ${({ theme }) => theme['headline3']}

    span {
      background: ${({ theme }) => theme['gradient']};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    color: ${({ theme }) => theme['onSecondary']};
    ${({ theme }) => theme['paragraph2']}
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem 3rem;
`;

export default Projects;
