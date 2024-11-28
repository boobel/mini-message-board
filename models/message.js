class Message {
  static messages = [
    {
      id: Math.random().toString(),
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
    },
    {
      id: Math.random().toString(),
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
    },
  ];

  static getAll() {
    return this.messages;
  }

  static addMessage(text, user) {
    const newMessage = {
      id: Math.random().toString(),
      text,
      user,
      added: new Date(),
    };
    this.messages.push(newMessage);
  }

  static getById(id) {
    return this.messages.find((msg) => msg.id === id);
  }
}

export default Message;
