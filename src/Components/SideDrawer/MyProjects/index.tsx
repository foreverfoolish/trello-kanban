import React from 'react';
import { Bullet } from '../../Common/icons/Bullet';
import { Menu1 } from '../../Common/icons/Menu1';
import { AddSquare1 } from '../../Common/icons/AddSquare1';
import * as Styles from './MyProjects.Styles'
import { ApiMockResponse } from '../../../ApiMockData/dummyData';


const MyProjects = () => {
  const projects = ApiMockResponse;
  const currentProject = ApiMockResponse[0];

  return (
    <Styles.ProjectContainer>
      <Styles.Header>
        <Styles.HeaderText>MY PROJECTS</Styles.HeaderText>
        <AddSquare1 />
      </Styles.Header>
      <Styles.ProjectsList>
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            {project.id === currentProject.id ? (
              <Styles.Active>
                <Styles.ProjectInfo>
                  <Bullet color={project.favColor} />
                  <Styles.ProjectName style={{color: '#0D062D', fontWeight: '600'}}>{project.title}</Styles.ProjectName>
                </Styles.ProjectInfo>
                <Styles.ActiveIcon>
                  <Menu1 />
                </Styles.ActiveIcon>
              </Styles.Active>
            ) : (
              <Styles.ProjectItem>
                < Styles.ProjectInfo>
                  <Bullet color={project.favColor} />
                  <Styles.ProjectName>{project.title}</Styles.ProjectName>
                </Styles.ProjectInfo>
              </Styles.ProjectItem>
            )}
          </React.Fragment>
        ))}
      </Styles.ProjectsList>
    </Styles.ProjectContainer>
  );
}

export default MyProjects