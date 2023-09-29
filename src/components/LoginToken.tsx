import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import { logOut } from '../services/firebase';

const LoginToken = () => {
  const { currentUser } = useContext(AuthContext);
  const [icon, setIcon] = useState(faFaceSmile);

  useEffect(() => {
    if (currentUser) {
      setIcon(faFaceSmile);
    } else {
      setIcon(faFaceSadTear);
    }
  }, [currentUser]);
  return (
    <Wrapper onClick={logOut}>
      <FontAwesomeIcon icon={icon} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: ${({ theme }) => theme['onPrimary']};
  color: ${({ theme }) => theme['primary']};

  top: 20px;
  right: 20px;
  padding: 10px 10px;
  border-radius: 50%;
  font-size: 1.5rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export default React.memo(LoginToken);
