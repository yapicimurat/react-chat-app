const http = require("http");
const server = http.createServer();


const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: "*",
      credentials: false
    }
});

server.listen(provess.env.port || 5500, () => {
    console.log("Server is listening on port 5500...");
});

io.on("connection", (socket) => {

    console.log("New connection...");

    socket.on("server-new-message",(data) => {
        socket.broadcast.emit("client-new-message",data);
    });



    socket.on("disconnect", () => {

    });
});
