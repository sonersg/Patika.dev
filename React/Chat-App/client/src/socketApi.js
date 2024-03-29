import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Connecting...");

  socket = io("http://localhost:3000", {
    transport: ["websocket"],
  });

  socket.on("connect", () => console.log("Connected"));
};

export const sendMessage = message => {
  if (socket) socket.emit("new message", message);
};

export const subscribeChat = cb => {
  if (!socket) return;

  socket.on("receive-message", message => {
    console.log("Yeni mesaj", message);
    cb(message);
  });
};
export const subscribeInitialMessages = cb => {
  if (!socket) return;

  socket.on("message-list", messages => {
    console.log("initial", messages);
    cb(messages);
  });
};
