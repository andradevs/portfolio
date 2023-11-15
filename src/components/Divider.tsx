import styled from 'styled-components';
import Sparkle from '../assets/sparkle.svg?react';
import { useTranslation } from 'react-i18next';

const Divider = () => {
  const { t } = useTranslation();
  // const buildContent = (content: [], i: number) => {
  //   if (i % 3 === 0) {
  //     content.push(<p>{t('Develop')}</p>);
  //     content.push(<Sparkle />);
  //   } else if (i % 3 === 1) {
  //     content.push(<p>{t('Discover')}</p>);
  //     content.push(<Sparkle />);
  //   } else {
  //     content.push(<p>{t('Develop')}</p>);
  //     content.push(<Sparkle />);
  //   }
  // };
  // const content = [];
  // for (let i = 0; i < 12; i++) {
  //   // content.push(<p>Desenvolver</p>);
  //   // content.push(<Sparkle />);
  //   buildContent(content, i);
  // }
  return (
    <Wrapper>
      <Content>
        <p>{t('Develop')}</p>
        <Sparkle />
        <p>{t('Discover')}</p>
        <Sparkle />
        <p>{t('Create')}</p>
        <Sparkle />
        <p>{t('Develop')}</p>
        <Sparkle />
        <p>{t('Discover')}</p>
        <Sparkle />
        <p>{t('Create')}</p>
        <Sparkle />
        <p>{t('About')}</p>
        <Sparkle />
        <p>{t('Discover')}</p>
        <Sparkle />
        <p>{t('Create')}</p>
        <Sparkle />
        <p>{t('Develop')}</p>
        <Sparkle />
        <p>{t('Discover')}</p>
        <Sparkle />
        <p>{t('Create')}</p>
        <Sparkle />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme['gradient']};
  width: 100vw;
  position: relative;
  overflow-y: visible;
  align-self: flex-end;
`;
const Content = styled.div`
  width: calc(100% + 30px);
  background: ${({ theme }) => theme['onPrimary']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: rotate(-2deg);
  p {
    margin: 0px;
  }
  ${({ theme }) => theme['headline6']}
  svg {
    /* height: 1rem;
    width: 1rem; */
  }
`;

export default Divider;
