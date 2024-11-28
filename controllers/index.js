import Message from "../models/message.js";

const postAddMessage = (req, res, next) => {
  const { text, user } = req.body;
  Message.addMessage(text, user);
  res.redirect("/");
};

const getAddMessage = (req, res, next) => {
  res.render("add-message");
};

const getIndex = (req, res, next) => {
  const messages = Message.getAll();
  res.render("index", { messages: messages });
};

const getMessageDetails = (req, res, next) => {
  const messageId = req.params.id;
  const message = Message.getById(messageId);
  console.log(message);

  if (!message) {
    return res.status(404).send("Message not found.");
  }
  res.render("message-details", { message: message });
};

export default { postAddMessage, getAddMessage, getIndex, getMessageDetails };
