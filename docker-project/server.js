//requiering express and initializing the app:
const app = require("express")();
//requiering the cors middleware:
const cors = require("cors");
require("dotenv").config();
const { Client } = require("pg");

// I kept getting an error that port 5001 was already in use, so I changed it to 5002
const PORT = 5002;

app.use(cors()); //telling express to use the cors middleware

app.get("/", async (req, res) => {
  //listen to a get request
  console.log("connecting...");
  const client = new Client();
  await client.connect();
  const data = await client.query("SELECT * from devices;");
  res.send(data.rows);
  console.log("connected");
  await client.end();
});

app.listen(PORT, () => {
  //listen to the port we chose above
  //print to the console that the server is listening
  console.log("listening to port: " + PORT);
});
