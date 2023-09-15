import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <div>Navbar</div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  min-width: 1440px;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme['primary']};
`;
