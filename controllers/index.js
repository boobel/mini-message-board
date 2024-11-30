import db from "../db/queries.js";
import { body, validationResult } from "express-validator";

const validateMessage = [
  body("message")
    .trim()
    .isAlpha()
    .withMessage("Only Letters Please")
    .isLength({ min: 1, max: 100 })
    .withMessage("Must be between 1 and 100 letters long"),
  body("username")
    .trim()
    .isAlpha()
    .withMessage("Only Letters Please")
    .isLength({ min: 1, max: 15 })
    .withMessage("Must be between 1 and 15 letters long"),
];

const postAddMessage = [
  validateMessage,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .render("add-message", { errors: errors.array() });
      }
      const { message, username } = req.body;
      const newMessage = await db.postAddMessage(username, message);
      res.redirect("/");
      res.status(201).json(newMessage);
    } catch (error) {
      console.error("Error in addMessageHandler:", error);
      res.status(500).send("An error occurred while adding the message.");
    }
  },
];

const getAddMessage = (req, res, next) => {
  res.render("add-message");
};

const getIndex = async (req, res, next) => {
  try {
    const messages = await db.getAllMessages();

    res.render("index", { messages: messages });
  } catch (e) {
    console.log(e);
  }
};

const getMessageDetails = async (req, res, next) => {
  try {
    const messageId = req.params.id;
    const message = await db.getMessageById(messageId);

    if (!message) {
      return res.status(404).send("Message not found.");
    }

    res.render("message-details", { message });
  } catch (error) {
    console.error("Error fetching message details:", error);
    res
      .status(500)
      .send("An error occurred while retrieving the message details.");
  }
};

export default { postAddMessage, getAddMessage, getIndex, getMessageDetails };
