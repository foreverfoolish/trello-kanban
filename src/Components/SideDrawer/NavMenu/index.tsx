import styled from 'styled-components';
import { Home } from '../../Common/icons/Home';
import { Message } from '../../Common/icons/Message';
import { Task } from '../../Common/icons/Task';
import { Setting } from '../../Common/icons/Setting';
import { SidebarProfile } from '../../Common/icons/SidebarProfile';

const NavMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const MenuItem = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  color: grey;
  gap: 14px;
`;

const MenuItemSpan = styled.span`
  display: none;

  @media (min-width: 640px) {
    display: block;
  }
`;

const NavMenu = () => {
  return (
    <NavMenuContainer>
      <MenuItem>
        <Home />
        <MenuItemSpan>Home</MenuItemSpan>
      </MenuItem>
      <MenuItem>
        <Message />
        <MenuItemSpan>Messages</MenuItemSpan>
      </MenuItem>
      <MenuItem>
        <Task />
        <MenuItemSpan>Tasks</MenuItemSpan>
      </MenuItem>
      <MenuItem>
        <SidebarProfile />
        <MenuItemSpan>Members</MenuItemSpan>
      </MenuItem>
      <MenuItem>
        <Setting />
        <MenuItemSpan>Settings</MenuItemSpan>
      </MenuItem>
    </NavMenuContainer>
  );
}

export default NavMenu