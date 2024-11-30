import pool from "./pool.js";

const getAllMessages = async () => {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (e) {
    console.log(e);
  }
};

const getMessageById = async (id) => {
  try {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
      id,
    ]);
    return rows[0];
  } catch (e) {
    console.log(e);
  }
};

const postAddMessage = async (username, message) => {
  try {
    const { rows } = await pool.query(
      "INSERT INTO messages (username, message) VALUES ($1, $2)",
      [username, message]
    );
  } catch {}
};

export default {
  getAllMessages,
  getMessageById,
  postAddMessage,
};
