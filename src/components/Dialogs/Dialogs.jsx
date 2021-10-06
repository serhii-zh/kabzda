import React from "react";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogElements = props.state.dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} avatar={d.avatar} />
  ));
  const messageElements = props.state.messages.map((m) => (
    <Message text={m.text} />
  ));

  const textField = React.createRef();

  const addMessage = () => {
    const textValue = textField.current.value;
    props.addMessageEntry(textValue);
    textField.current.value = "";
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        {messageElements}
        <div className={s.addMessage}>
          <div>
            <textarea ref={textField}></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
