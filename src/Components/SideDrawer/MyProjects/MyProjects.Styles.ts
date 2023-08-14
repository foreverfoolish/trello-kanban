import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.94rem;
`
export const  Header = styled.header`
  display: none;
  @media (min-width: 640px) {
    display: flex;
  }
  justify-content: space-between;
  align-items: center;
`;

export const  HeaderText = styled.span`
  color: #787486;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const  ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.87rem;
`;

export const  ProjectItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3px;
  /* padding: 0.63rem 0.75rem; */
`;

export const  ProjectInfo = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const  ProjectName = styled.span`
  color: #787486;
  font-size: 1rem;
  font-family: Inter;
  font-weight: 600;
`;

export const  Active = styled(ProjectItem)`
  background: rgba(80, 48, 229, 0.08);
  border-radius: 6px;
  padding: 0.63rem 0.75rem;
  align-self: center;
  width: 100%;
  margin-bottom: -0.63rem;
`;

export const  ActiveIcon = styled.span`
  margin-right: 3px;
`;