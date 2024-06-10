"use client";
import { useMemo } from "react";
import { io } from "socket.io-client";
export default function Home() {
  const socket = useMemo(() => io("http://localhost:4000"), []);

//   socket.on("connect", () => {
//     console.log("Connected");
//   });
  socket.on("message", (data, id) =>{
    console.log(data + "" + id)
  });
  console.log("hello world")
  return <div> page</div>;
}
