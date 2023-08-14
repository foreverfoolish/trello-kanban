export interface BoardProps {
  board: dummyProjectsType[0];
  status: 'todo' | 'wip' | 'completed';
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
}
export interface CardProps {
  card: dummyProjectsType[0]['cards'][0];
  boardId: number;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
}

export type dummyProjectsType = {
  id: number;
  title: string;
  status: 'todo' | 'wip' | 'completed';
  cards: {
    id: number;
    title: string;
    image: string[];
    description: string;
    priority: string;
    comments: number;
    files: number;
    users: string[];
    status: 'low' | 'high' | 'completed';
  }[];
  favColor: string;
}[]

export enum CardStatesEnum{
  dragStart = 'dragStart',
  dragOn = 'dragOn',
  dragOff = 'dragOff'
}