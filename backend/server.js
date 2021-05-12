import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
//app config
const app = express();
const port = process.env.PORT || 4000;

const pusher = new Pusher({
  appId: "1202673",
  key: "100408359a0eb05c9774",
  secret: "dc354ad0baa22a8e5f7d",
  cluster: "ap2",
  useTLS: true,
});

//middleware
app.use(express.json());
//DB config
const connection_url = `mongodb+srv://blackjack:d7fhpzkhBzbFO8gc@cluster0.aor3g.mongodb.net/mern-chat-app?retryWrites=true&w=majority`;
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//   .then(() => console.log("db connected"))
//   .catch((err) => console.log(err));

const db = mongoose.connection;

//Once the db conn is open
db.once("open", () => {
  console.log("DB Connected");
  const msgCollection = db.collection("messagecontents");
  //watchout for changes in the messages collection
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    // console.log(change);

    // if (change.operationType === "insert") {
    //   const messageDetails = change.fullDocument;
    //   pusher.trigger("messages", "inserted", {
    //     name: messageDetails.user,
    //     message: messageDetails.message,
    //   });
    // } else {
    //   console.log("error triggering pusher");
    // }
    if (change.operationType == "insert") {
      const messageDetails = change.fullDocument;
      pusher
        .trigger("messages", "inserted", {
          name: messageDetails.name,
          message: messageDetails.message,
        })
        .catch((err) => console.log(err));
    }
  });
});

//api routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

//fetch all messages from the database

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
