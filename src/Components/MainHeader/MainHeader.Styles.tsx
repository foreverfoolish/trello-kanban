import styled from 'styled-components';
import { HeaderHeight } from '../Constants';

export const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 50;
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  padding: 1.38rem 3.03rem;
  max-height: ${HeaderHeight};
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3rem;
`;