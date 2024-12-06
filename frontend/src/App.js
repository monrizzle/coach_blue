// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlueprintChatbot from './chatbot/Chatbot';
import './styles/App.css';
import './components/Navbar.css';
import './components/Footer.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <BlueprintChatbot />
      </div>
    </Router>
  );
};

export default App;
