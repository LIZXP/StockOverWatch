import React, { useEffect, useState } from "react";

import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine";

import "../index.scss";

const ChatEngine = (props) => {
  // const [showChat, setShowChat] = useState(false);

  // useEffect(() => {
  //   if (props.visible) {
  //     setTimeout(() => {
  //       setShowChat(true);
  //     }, 500);
  //   }
  // });

  return (
    <div
      style={{
        ...styles.chatEngineWindow,
        ...{
          height: props.visible ? "100%" : "0px",
          zIndex: props.visible ? "100" : "0",
        },
      }}
    >
      {/* {showChat && (
        <ChatEngineWrapper>
          <Socket
            projectID={`bf4316d6-924d-4a0c-80d8-f394e5f86ae7`}
            userName={props.user.email}
            userSecret={props.user.email}
          />
          <ChatFeed activeChat={props.chat.id} />
        </ChatEngineWrapper>
      )} */}
      { props.visible && 
        <ChatEngineWrapper>
          <Socket
            projectID={'bf4316d6-924d-4a0c-80d8-f394e5f86ae7'}
            userName={props.user.email}
            userSecret={props.user.email}
          />
          <ChatFeed activeChat={props.chat.id} />
        </ChatEngineWrapper>
      }
    </div>
  );
};

export default ChatEngine;

const styles = {
  chatEngineWindow: {
    width: "100%",
    backgroundColor: "#fff",
  },
};
