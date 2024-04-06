// ChatWindow.js
import React, { useState } from 'react';
import './ChatWindow.css'; // Make sure to create a corresponding CSS file

const ChatWindow = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello, how are you?", sender: "user" },
        { id: 2, text: "I'm good, thanks! And you?", sender: "friend" }
        // Add more initial messages if desired
    ]);

    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;
        const nextId = messages.length + 1;
        setMessages([...messages, { id: nextId, text: newMessage, sender: "user" }]);
        setNewMessage("");
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form className="send-message-form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="message-input"
                />
                <button type="submit" className="send-button">Send</button>
            </form>
        </div>
    );
};

export default ChatWindow;
