import { useEffect, useState } from "react";
import Board from "./Board";
import { dummyProjectsType } from "../../Interfaces/Kanban";
import { fetchBoardList, updateLocalStorageBoards } from "../../Helpers/APILayers";
import * as Styles from './Dashboard.Styles';
import BoardHeader from "./DashBoardHeader";
import DashBoardSubHeader from "./DashboardSubHeader";

const Dashboard = () => {
  const [boards, setBoards] = useState<dummyProjectsType>();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const boards = await fetchBoardList();
    setBoards(boards);
  }
  const [targetCard, setTargetCard] = useState({
    boardId: 0,
    cardId: 0,
  });

  const onDragEnd = (boardId: number, cardId: number) => {
    //this condition checks for both null and undefined. Just a little quirk of JS/TS
    if(boards == null)
      return;
    const sourceBoardIndex = boards.findIndex(
      (item) => item.id === boardId
    );
    if (sourceBoardIndex < 0) return;

    const sourceCardIndex = boards[sourceBoardIndex]?.cards?.findIndex(
      (item) => item.id === cardId
    );
    if (sourceCardIndex < 0) return;

    const targetBoardIndex = boards.findIndex(
      (item) => item.id === targetCard.boardId
    );
    if (targetBoardIndex < 0) return;

    const targetCardIndex = boards[targetBoardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cardId
    );
    if (targetCardIndex < 0) return;

    const tempBoardsList = [...boards];
    const sourceCard = tempBoardsList[sourceBoardIndex].cards[sourceCardIndex];
    tempBoardsList[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
    tempBoardsList[targetBoardIndex].cards.splice(targetCardIndex, 0, sourceCard);
    setBoards(tempBoardsList);

    setTargetCard({
      boardId: 0,
      cardId: 0,
    });
  };
  const onDragEnter = (boardId: number, cardId: number) => {
    if (targetCard.cardId === cardId) return;
    setTargetCard({
      boardId: boardId,
      cardId: cardId,
    });
  };

  useEffect(() => {
    if(boards == null)
      return;
    updateLocalStorageBoards(boards);
  }, [boards]);

  return (
    <Styles.AppContainer>
      <Styles.AppNav>
        <BoardHeader/>
        <DashBoardSubHeader/>
      </Styles.AppNav>
      <Styles.AppBoardsContainer>
        <Styles.AppBoards>
          {boards?.map((item) => (
            <Board
              key={item.id}
              board={item}
              status={item.status}
              onDragEnd={onDragEnd}
              onDragEnter={onDragEnter}
            />
          ))}
        </Styles.AppBoards>
      </Styles.AppBoardsContainer>
    </Styles.AppContainer>
  );
}

export default Dashboard;

