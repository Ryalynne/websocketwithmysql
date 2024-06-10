"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const server = (0, http_1.createServer)();
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
        methods: ["POST", "GET"],
    }
});
io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    // Join the user to the room "some_room"
    socket.join("room1");
    // Emit messages to the specific socket
    socket.emit("messages", "hello User: ", socket.id);
    socket.emit("sender", "hello User: ", socket.id);
    // Emit event to the room "some_room"
    socket.to("room1").emit("some_event", "You are in room1");
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});
server.listen(4000, () => {
    console.log("Server started on Port", 4000);
});
