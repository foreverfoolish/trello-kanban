import styled from 'styled-components';
import { ArrowLeft } from '../Common/icons/ArrowLeft';
import NavMenu from './NavMenu';
import MyProjects from './MyProjects';
import ThoughtsSection from './ThoughtsSection';
import { HeaderHeight } from '../Constants';

const SideDrawerContainer = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 0;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${`${HeaderHeight}rem`};
  padding: 0 1.97rem 0 1.38rem;
  border-bottom: 1px solid lightgrey;
`;

const HeaderText = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--black);
  gap: 0.5rem;
`;

const HeaderTextImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const HeaderTextH2 = styled.span`
  color: #0D062D;
  font-size: 1.25rem;
  font-family: Inter;
  font-weight: 600;
  /* @media (min-width: 640px) {
    display: block;
  } */
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.59rem 2rem 1.38rem;
  row-gap: 2.06rem;
`
const Line = styled.div`
  height: 1px;
  background: lightgrey;
  width: 110%;
  align-self: center;
`

const Arrow = styled.span`
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`;

const SideDrawer = () => {
  return (
    <SideDrawerContainer>
      <Header>
        <HeaderText>
          <HeaderTextImage src={'/colorfilter.png'} alt="color-filter" />
          <HeaderTextH2>Project M.</HeaderTextH2>
        </HeaderText>
        <Arrow>
          <ArrowLeft />
        </Arrow>
      </Header>
      <MenuSection>
        <NavMenu />
        <Line/>
        <MyProjects />
        <ThoughtsSection />
      </MenuSection>
    </SideDrawerContainer>
  );
}

export default SideDrawer; 