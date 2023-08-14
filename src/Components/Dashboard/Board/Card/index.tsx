import * as Styles from './Card.Styles';
import { Menu1 } from "../../../Common/icons/Menu1";
import { Message16 } from "../../../Common/icons/Message1";
import { Folder } from "../../../Common/icons/Folder";
import UsersPicList from "../../../Common/UserPicList";
import { CardsPriorityData } from "../BoardConstants";
import { useCallback, useEffect, useRef, useState } from "react";
import { CardProps, CardStatesEnum } from '../../../../Interfaces/Kanban';

const DraggedCardStyles ={
    ['dragStart']: {
      rotate: '5deg',
    },
    ['dragOn']: {
      position: 'absolute',
      opacity: 0
    },
    ['dragOff']: {
      rotate: '0deg',
    }
  }

  const HiddenCardStyles = {
    ['dragStart']: {
      position: 'absolute',
      opacity: 0
    },
    ['dragOn']: {
    },
    ['dragOff']:{
      position: 'absolute',
      opacity: 0
    }
  }
const Card = (props: CardProps) => {
  const { card, boardId, onDragEnd, onDragEnter } = props;
  const { id, status,  description, title, image} = card;

  const [dragStyles, setDragStyles] = useState<CardStatesEnum>(CardStatesEnum.dragOff)

  const cardRef = useRef<HTMLDivElement>(null)


  const dragStartHandler = useCallback(() =>{
    setDragStyles(CardStatesEnum.dragStart)
    
    setTimeout(()=> {
      setDragStyles(CardStatesEnum.dragOn)
    }, 5)
  },[])

  const dragEndHandler = useCallback(() => {
    setDragStyles(CardStatesEnum.dragOff)
    onDragEnd(boardId, id)
  },[])

  useEffect(()=>{
    console.log({width: cardRef.current?.offsetWidth, height: cardRef.current?.offsetHeight})
  },[dragStyles])

  return (
    <Styles.Todo
      draggable
      onDragStart ={() => dragStartHandler()}
      onDragEnd={() => dragEndHandler()}
      onDragEnter={() => onDragEnter(boardId, id)}
      >
        <Styles.HiddenCard width={cardRef.current?.offsetWidth ?? 0} height={cardRef.current?.offsetHeight ?? 0} style={HiddenCardStyles[dragStyles] as React.CSSProperties}/>
        <Styles.InnerTodoContainer ref = {cardRef} style={DraggedCardStyles[dragStyles] as React.CSSProperties}>
          <Styles.TodoInfoContainer>
            <Styles.TodoHeader>
              <Styles.Priority status={status}>
                {CardsPriorityData[status].text}
              </Styles.Priority>
              <Menu1 />
            </Styles.TodoHeader>
            <Styles.TodoInfo>
              <Styles.TodoName>{title}</Styles.TodoName>
              {description && (
                <Styles.TodoDescription>{description}</Styles.TodoDescription>
              )}
              {image.length !== 0 && (
                <Styles.Images>
                  {image.map((picture) => (
                    <img src={picture} alt={picture} key={picture} style={{pointerEvents: 'none'}}/>
                  ))}
                </Styles.Images>
              )}
            </Styles.TodoInfo>
          </Styles.TodoInfoContainer>
          <Styles.Footer>
            <UsersPicList
              users={card.users}
              width="24px"
              height="24px"
              type='right'
            />
            <Styles.TagsContainer>
              <Styles.Tag>
                <Message16 />
                {card.comments} comments
              </Styles.Tag>
              <Styles.Tag>
                <Folder />
                {card.files} files
              </Styles.Tag>
            </Styles.TagsContainer>
          </Styles.Footer>
          </Styles.InnerTodoContainer>
      </Styles.Todo>
  );
}

export default Card;