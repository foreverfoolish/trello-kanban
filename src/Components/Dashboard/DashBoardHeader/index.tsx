import * as Styles from "./BoardHeader.Styles"
import UsersPicList from "../../Common/UserPicList";
import { EditPen } from "../../Common/icons/EditPen";
import { Link } from "../../Common/icons/Link";
import { AddSquare } from "../../Common/icons/AddSquare";
import { activeUsers } from "../../../ApiMockData/dummyData";



const DashBoardHeader = () => {
  return (
    <Styles.Container>
      <Styles.Left>
        <Styles.ProjectTitle>Mobile App</Styles.ProjectTitle>
        <EditPen />
        <Link />
      </Styles.Left>
      <Styles.Right>
        <AddSquare />
        <Styles.InviteLink>Invite</Styles.InviteLink>
        <UsersPicList users={activeUsers} width="38px" height="38px" type="left" showCount/>
      </Styles.Right>
    </Styles.Container>
  );
}

export default DashBoardHeader