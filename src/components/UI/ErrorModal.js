import React from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}
function ModalOverlay(props) {
  return (
    <>
      <Card className={classes.modal}>
        <header className={classes.header}>{props.title}</header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
}

const ErrorModal = (props) => {
  return (
    // <div className={classes.backdrop} onClick={props.onConfirm}>
    //   <Card className={classes.modal}>
    //     <header className={classes.header}>{props.title}</header>
    //     <div className={classes.content}>
    //       <p>{props.message}</p>
    //     </div>
    //     <footer className={classes.actions}>
    //       <Button onClick={props.onConfirm}>Okay</Button>
    //     </footer>
    //   </Card>
    // </div>
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
