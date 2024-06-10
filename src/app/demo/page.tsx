"use client";
import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
export default function Home() {
  const socket = useMemo(() => io("http://localhost:4000"), []);
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [room, setRoom] = useState("");
  socket.on("connect", () => {
    console.log("Connected");
  });
  //   socket.on("testing", (data) => {
  //     console.log(`Received testing data: ${data}`);
  //   });
  useEffect(() => {
    socket.on("messages", (data, id) => {
      setMessage(data + " " + id);
    });
    socket.on("sender", (data, id) => {
      setSender(data + " " + id);
    });
    socket.on("some_event", (data) => {
      setRoom(data);
    });
  });
  return (
    <div>
      <h1>Room ID: {room}</h1>
      <div>
        <h1>message: {message}</h1>
      </div>
      <div>
        <h1>sender: {sender}</h1>
      </div>
    </div>
  );
}
