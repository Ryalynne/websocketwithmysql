const express = require('express');
import {Server} from 'socket.io';
import { createServer } from 'http';

const server =  createServer();

const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        credentials:true,
        methods:["POST", "GET"],
    }
})

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    // Join the user to the room "some_room"
    socket.join("room1");
    socket.to("room1").emit("some_event", "You are in room1");
    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
    });
    // Emit messages to the specific socket
    socket.emit("messages", "hello User: ", socket.id);
    socket.emit("sender", "hello User: ", socket.id);
  });
  server.listen(4000, () => {
    console.log("Server started on Port", 4000);
  });