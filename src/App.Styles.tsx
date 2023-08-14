import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  @media (max-width: 1150px) {
    width: fit-content; 
  }
`;

export const MainContentSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  border-left: 1px solid lightgrey;
  @media (max-width: 1150px){
    width: unset;
  }
`;

export const SideDrawerSection = styled.div`
  width: 50px;
  min-width: 250px; /* Adjust the values for different breakpoints */
`;