import styled from 'styled-components';
import { CardsPriorityData } from '../BoardConstants';

export const Todo = styled.div`
  cursor: pointer;
  /* :active{
    display: inline-block;
    rotate: 5deg;
  } */
`;

export const InnerTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border-radius: 1rem;
  background-color: white;
  row-gap: 1.75rem;
` 

export const TodoInfoContainer = styled.div`
`

export const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px;
`;

export const Priority = styled.span<{status: 'low' | 'high' | 'completed'}>`
  font-size: small;
  font-weight: medium;
  text-transform: capitalize;
  color: ${(props) => CardsPriorityData[props.status].color};
  padding: 1px 6px;
  border-radius: 4px;
  background-color: ${(props) => CardsPriorityData[props.status].backgroundColor};
`;

export const TodoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.44rem;
`;

export const TodoName = styled.span`
  font-size: large;
  font-weight: bold;
  color: black;
`;

export const TodoDescription = styled.span`
  font-size: small;
  font-weight: normal;
  color: grey;
`;

export const Images = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  column-gap: 0.7rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1.5rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: row;
  align-items: center;
`;

export const Tag = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: small;
  font-weight: medium;
  white-space: nowrap;
  color: grey;
`;

export const HiddenCard = styled.div<{width: number, height: number}>`
  border-radius: 1rem;
  background-color: rgba(80, 48, 229, 0.06);
  border: 1px dashed rgba(80, 48, 229, 0.59);
  height: ${(props)=> `${props.height}px`};
`