import React, { useEffect } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";
import { useChat } from "../context/ChatContext";

function Container() {
  const { setmessages } = useChat();
  useEffect(() => {
    subscribeInitialMessages(messages => {
      setmessages(messages);
    });

    subscribeChat(message => {
      setmessages(prev => [...prev, message]);
    });

    init();
  }, []);
  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
