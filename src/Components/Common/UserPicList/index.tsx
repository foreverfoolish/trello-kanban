import * as Styles from './Users.Styles'

const UsersPicList = ({ users, width, height, type, showCount }: {users: string[],width: string, height: string, type?: 'left' | 'right', showCount?: boolean}) => {
  const userList = users.length > 4 ? users.slice(0, 4) : users;
  const userCount = users.length > 4 ? users.length - 4 : 0;

  return (
    <Styles.Containers>
      {userList.map((user) => {
        return (
          <Styles.Profile type={type ?? 'left'}>
            <img 
              src={`/${user}.png`}
              alt={user}
              width={width}
              height={height}
              key={user}/>
          </Styles.Profile>
        );
      })}
      {showCount && userCount > 0 && (
        <Styles.Count style={{height: height, width: width}}>
          +{userCount}
        </Styles.Count>
      )}
    </Styles.Containers>
  );
}

export default UsersPicList