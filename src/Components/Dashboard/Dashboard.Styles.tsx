import styled from 'styled-components';
import { HeaderHeight } from '../Constants';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.6rem;
  padding: 2.5rem 3.03rem;
`;

export const AppNav = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: ${`${HeaderHeight + 2.5}rem`};
  row-gap: 2.5rem;
  background: white;
  z-index: 99;
`;

export const AppBoardsContainer = styled.div`
  flex: 1;
  height: 100%;
`;

export const AppBoards = styled.div`
  width: 100%;
  display: inline-flex;
  gap: 30px;
  height: 100%;
`;

export const App = styled.div`
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  box-shadow: 1px 1px 0 1px rgba(0, 0, 0, 0.12);
  text-align: center;
`;
