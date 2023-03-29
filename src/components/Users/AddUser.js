import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enterdName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enterdName.trim().length === 0 || enteredUserAge === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Correct Your input",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age ",
        message: "Invalid Age (Age >0)",
      });
      return;
    }
    const user = { name: enterdName, age: enteredUserAge };
    props.userData(user);
    // setEnteredUsername("");
    // setEnteredAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  // const usernameHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const ageHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const handleError = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            // value={enteredUsername}
            type={`text`}
            id={`username`}
            // onChange={usernameHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            // value={enteredAge}
            type={`number`}
            id={`age`}
            // onChange={ageHandler}
            ref={ageInputRef}
          />
          <Button type={`submit`}>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
