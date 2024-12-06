// src/chatbot/ActionProvider.js
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHello() {
      const message = this.createChatBotMessage("Hello! How can I help you with your blueprint today?");
      this.setChatbotState(message);
    }
  
    setChatbotState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  
    // Add more handler methods as needed
  }
  
  export default ActionProvider;
  