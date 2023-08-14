import styled from 'styled-components';
import { statusData } from './BoardConstants';

export const TodosContainer = styled.div`
  background-color: #F5F5F5;
  border-radius: 20px;
  height: fit-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  flex: 1;
`;

export const DroppableArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TodosHeader = styled.div<{status: 'todo' | 'wip' | 'completed'}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  font-size: base;
  font-weight: medium;
  color: black;
  margin-bottom: 2px;
  padding-bottom: 22px;
  border-bottom: 3px solid ${(props)=> statusData[props.status].color};
`


export const AddTodoButton = styled.button`
  background: transparent;
`;

export const Count = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #E0E0E0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 500;
  color: dusky-black;
  margin: 0 1px;
`;

export const HeaderInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;
`
export const Bullet = styled.div<{status: 'todo' | 'wip' | 'completed'}>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.25rem;
  background-color: ${(props)=> statusData[props.status].color};
`
