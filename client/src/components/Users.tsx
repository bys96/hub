import React, { useEffect, useState } from "react";
import axios from "axios";

// 사용자 데이터 타입 정의
interface User {
  id: number;
  nickname: string;
  email: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // 백엔드 API를 호출하여 사용자 데이터를 가져옵니다
    axios
      .get<User[]>("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response.data); // 가져온 사용자 데이터를 state에 저장합니다
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nickname} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
