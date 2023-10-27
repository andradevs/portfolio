import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import skills from '../data/skills';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <h2>{t('What I do.')}</h2>
      <SkillGroup>
        {skills.map((skill, idx) => (
          <Skill key={idx}>
            <img src={skill.path} alt={skill.name} />
            <span>{skill.name}</span>
          </Skill>
        ))}
      </SkillGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  & h2 {
    ${({ theme }) => theme['headline3']}
    color:${({ theme }) => theme['onPrimary']}
  }
`;

const SkillGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  /* gap: rem; */
`;

const Skill = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 8.5rem;
  height: 8.5rem;
  gap: 1.5rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme['secondary']};
  color: ${({ theme }) => theme['onSecondary']};
  ${({ theme }) => theme['paragraph1']}

  & img {
    height: 3.5rem;
  }
`;
export default Skills;
