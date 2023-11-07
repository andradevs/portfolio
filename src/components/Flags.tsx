import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';

const Flags = () => {
  const { i18n } = useTranslation();

  const handleChageLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const selectedLanguage = i18n.language;
  return (
    <Wrapper>
      <Option selected={selectedLanguage == 'pt-BR'} onClick={() => handleChageLanguage('pt-BR')}>
        PT
      </Option>
      <Divider />
      <Option selected={selectedLanguage == 'en-US'} onClick={() => handleChageLanguage('en-US')}>
        EN
      </Option>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Option = styled.button<{ selected: boolean }>`
  border: 0;
  cursor: pointer;
  opacity: 0.5;

  background-color: ${({ theme }) => theme['primary']};
  color: ${({ theme }) => theme['onPrimary']};
  ${({ theme }) => theme['menu']};
  ${({ selected }) =>
    selected &&
    css`
      text-decoration: underline;
      opacity: 1;
    `}
`;
const Divider = styled.div`
  height: 1.5rem;
  border: 1px solid ${({ theme }) => theme['onSecondary']};
`;

export default Flags;
