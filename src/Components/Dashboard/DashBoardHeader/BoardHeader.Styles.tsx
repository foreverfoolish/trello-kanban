import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
  align-self: flex-start;
`;

export const ProjectTitle = styled.div`
  font-size: 46px;
  font-weight: 600;
  line-height: 96%;
  letter-spacing: 0em;
  color: #0D062D;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  column-gap: 1rem;
`;

export const InviteLink = styled.span`
  font-size: 1rem;
  font-weight: medium;
  color: blue;
  margin-left: 2px;
  margin-right: 3px;
  margin-top: -1px;
`;