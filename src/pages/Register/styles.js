import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: rgba(77, 86, 86, 0.8);

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkRegister = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  color: #aaa;
  font-weight: 700;

  &:hover{
    color: #aaa;
  }
`;