import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LinkedinLogo from '../assets/linkedin_logo.svg?react';
import GithubLogo from '../assets/github_logo.svg?react';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <SitemapWrapper>
        <Icon>
          <span>ANDRADEVS.</span>
        </Icon>
        <Sitemap>
          <li>
            <span>{t('Home')}</span>
          </li>
          <li>
            <span>{t('Projects')}</span>
          </li>
          <li>
            <span>{t('Blog')}</span>
          </li>
          <li>
            <span>{t('About')}</span>
          </li>
        </Sitemap>
      </SitemapWrapper>
      <CreditsWrapper>
        <p>© {t('Developed by')} Guilherme Andrade</p>
        <LinkWrapper>
          <LinkButton to={'https:/www.linkedin.com/in/andradevs'}>
            <button>
              <LinkedinLogo />
            </button>
          </LinkButton>
          <LinkButton to={'https://github.com/andradevs'}>
            <button>
              <GithubLogo />
            </button>
          </LinkButton>
        </LinkWrapper>
      </CreditsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin: 10px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 2px solid #4c4c4b;
  padding-top: 1rem;
`;

const SitemapWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Sitemap = styled.ul`
  display: flex;
  list-style-type: none;
  align-content: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  & li {
    display: flex;
    justify-content: center;
    padding: 0px 5px;
    align-items: center;
    /* height: 80px; */
    color: ${({ theme }) => theme['onPrimary']};
    ${({ theme }) => theme['paragraph3']};
  }
`;

const Icon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme['onPrimary']};

  & span {
    ${({ theme }) => theme['headline4']};
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
`;

const CreditsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme['onPrimary']};

  & p {
    ${({ theme }) => theme['paragraph3']}
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;
const LinkButton = styled(Link)`
  /* position: relative; */

  & button {
    cursor: pointer;
    background: transparent;
    border-radius: 50%;
    padding: 6px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px transparent;
    border-radius: 80px;
    background-image: linear-gradient(${({ theme }) => theme['primary']}, ${({ theme }) => theme['primary']}),
      ${({ theme }) => theme['gradient']};
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }
  & svg {
    height: 1rem;
    width: 1rem;
    fill: ${({ theme }) => theme['onPrimary']};
  }
`;

export default Footer;
