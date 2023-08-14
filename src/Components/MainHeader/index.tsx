import IconMenu from "./IconMenu";
import * as Styles from './MainHeader.Styles'
import SearchBar from "./SearchBar";
import UserProfileSection from "./UserProfileSection";

const MainHeader = () =>{
  return (
    <Styles.Header>
      <SearchBar/>
      <Styles.ProfileSection>
        <IconMenu />
        <UserProfileSection/>
      </Styles.ProfileSection>
    </Styles.Header>
  );
}

export default MainHeader;