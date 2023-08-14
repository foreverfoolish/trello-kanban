import { ArrowDown } from "../../Common/icons/ArrowDown";
import * as Styles from './UserProfile.Styles'

const UserProfileSection = () => {
  return (
    <Styles.UserProfileContainer>
      <Styles.UserInfoContainer>
        <Styles.UserName>Anima Agrawal</Styles.UserName>
        <Styles.UserAddress>U.P, India</Styles.UserAddress>
      </Styles.UserInfoContainer>
      <Styles.UserImage
        src={'/image1.png'}
        alt="Anima Agrawal"
        width="38px"
        height="38px"
      />
      <ArrowDown />
    </Styles.UserProfileContainer>
  );
}

export default UserProfileSection 