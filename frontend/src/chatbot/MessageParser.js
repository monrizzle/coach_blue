// src/chatbot/MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.handleHello();
      }
  
      // Add more conditions as needed
    }
  }
  
  export default MessageParser;
  