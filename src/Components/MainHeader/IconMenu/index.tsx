import { Calendar2 } from "../../Common/icons/Calendar2";
import { MessageQuestion } from "../../Common/icons/Message2";
import { Notification } from "../../Common/icons/Notification";
import * as Styles from './IconMenu.Styles'

const IconMenu = () => {
  return (
    <Styles.IconMenu>
      <Calendar2 />
      <MessageQuestion />
      <Notification />
    </Styles.IconMenu>
  );
}

export default IconMenu