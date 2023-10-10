import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <h2>{t('What I do.')}</h2>
      <SkillGroup></SkillGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  & h2 {
    ${({ theme }) => theme['headline3']}
    color:${({ theme }) => theme['onPrimary']}
  }
`;

const SkillGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Skills;
