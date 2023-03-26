import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Correct Your input",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Invalid Age (Age >0)",
      });
      return;
    }
    const user = { name: enteredUsername, age: enteredAge };
    props.userData(user);
    console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const handleError = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={handleError}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            type={`text`}
            id={`username`}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            value={enteredAge}
            type={`number`}
            id={`age`}
            onChange={ageHandler}
          />
          <Button type={`submit`}>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
