import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const handleUserList = (user) => {
    setUsers((previousData) => {
      return [...previousData, user];
    });
  };
  return (
    <div>
      <AddUser userData={handleUserList}></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
};

export default App;
