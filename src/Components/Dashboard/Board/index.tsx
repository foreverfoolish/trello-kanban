import Card from "./Card";
import * as Styles from './Board.Styled';
import { AddSquare } from "../../Common/icons/AddSquare";
import { statusData } from "./BoardConstants";
import { BoardProps } from "../../../Interfaces/Kanban";



const Board = (props: BoardProps) => {
  const {
    board,
    status,
    onDragEnd,
    onDragEnter,
  } = props;

  return (
    <Styles.TodosContainer>
      <Styles.TodosHeader status={status}>
        <Styles.HeaderInfoSection>
          <Styles.Bullet status={status}/>
          <span>
            {statusData[status].text}
          </span>
          <Styles.Count>{board?.cards?.length}</Styles.Count>
        </Styles.HeaderInfoSection>
        
        {status === 'todo' && (
            <AddSquare />
        )}

      </Styles.TodosHeader>
      {board?.cards?.map((item) => (
        <Card
          key={item.id}
          card={item}
          boardId={board.id}
          onDragEnter={onDragEnter}
          onDragEnd={onDragEnd}
        />
      ))}
    </Styles.TodosContainer>
  );
}

export default Board;

