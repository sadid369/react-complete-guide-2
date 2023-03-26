import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";
const UserList = (props) => {
  console.log(props.users);
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, index) => {
          return (
            <li key={index}>
              {user.name} {user.age} year old
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
