import React from "react";

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  return (
    <div>
      <b style={{
        color : active ? 'green' : 'black',
        cursor : 'pointer'
      }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b> 
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
      {/* 이 버튼이 눌렸을때 이러한 함수 호출, id가 특정 값인것을 삭제하겠다. 함수를 넣어주지 않으면 랜더링 되는 시점에서 모두 삭제됨 */}
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(
        user => (
        <User 
          user={user} 
          key={user.id} 
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}


export default UserList;