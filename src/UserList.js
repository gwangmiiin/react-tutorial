import React from "react";

function User({ user, onRemove }) {
  const { username, email, id } = user;
  return (
    <div>
      <b>{username}</b> <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
      {/* 이 버튼이 눌렸을때 이러한 함수 호출, id가 특정 값인것을 삭제하겠다. 함수를 넣어주지 않으면 랜더링 되는 시점에서 모두 삭제됨 */}
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}


export default UserList;