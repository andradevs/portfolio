import styled from 'styled-components';
import Avatar from './Avatar';
import { Button, GradientButton } from './ui/StyledButton';
import { useTranslation } from 'react-i18next';

const Bio = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Avatar />
      <BioWrapper>
        <Headline>
          {t('Hi, I am')} <span>Guilherme Andrade.</span>
        </Headline>
        <SubHeadline>{t('bio')}</SubHeadline>
      </BioWrapper>
      <ButtonWrappers>
        <GradientButton className="gradient">{t('GET IN TOUCH')}</GradientButton>
        <Button>{t('VIEW ALL WORKS')}</Button>
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
  ${({ theme }) => theme['headline2']}
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
