import { ApiMockResponse } from "../ApiMockData/dummyData";
import { dummyProjectsType } from "../Interfaces/Kanban";

const LocalStorageKeyName = "kanban-boards";
//Data Layer
export class BoardAPI {
  async fetchBoardList(): Promise<dummyProjectsType> {
    const apiData: dummyProjectsType = ApiMockResponse;

    return apiData;
  }
}

const fetchBoardList = async() : Promise<dummyProjectsType> => {
  const api = new BoardAPI();
  return api.fetchBoardList();
}
const updateLocalStorageBoards = (boards: dummyProjectsType) => {
  localStorage.setItem(LocalStorageKeyName, JSON.stringify(boards));
}

export {fetchBoardList, updateLocalStorageBoards}