// src/chatbot/config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "BlueprintBot",
  initialMessages: [createChatBotMessage(`Hi! I'm Coach Blue. How can I assist you today?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#333",
    },
    chatButton: {
      backgroundColor: "#333",
    },
  },
};

export default config;
