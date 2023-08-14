import styled from "styled-components";

export const Containers = styled.div`
  display: flex;
`;

export const Profile = styled.div<{type: 'left' | 'right'}>`
  margin-left: ${(props) => props.type === 'left' ? '-0.5rem' : 'unset'};
  margin-right: ${(props) => props.type === 'right' ? '-0.5rem' : 'unset'};
  transform: ${(props) => props.type === 'left' ? 'translateX(0.5rem)' : 'translateX(-0.5rem)'};
  max-height: 24px;
`;

export const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F4D7DA;
  border: 1px solid white;
  border-radius: 50%;
  color: red;
  font-size: 15px;
  font-weight: medium;
  z-index: 40;
  margin-left: -0.6rem;
`;
