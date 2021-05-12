import mongoose from "mongoose";

//Define the Schema
const chatSchema = mongoose.Schema({
  message: String,
  name: String,
  timeStamp: String,
  received: Boolean,
});

export default mongoose.model("messagecontents", chatSchema);
