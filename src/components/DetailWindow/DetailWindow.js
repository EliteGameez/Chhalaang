// src/DetailsWindow.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChatWindow from '../ChatWindow/ChatWindow';
import './DetailWindow.css';

const DetailsWindow = ({ option, onClose }) => {
    const navigate = useNavigate();
  if (!option) return null;

  const openUserProfile = ()=> {
      navigate('./userProfile');
  }

  return (
    <div className="details-window">
        <p>Snigdha</p>
        <p className="showProfileBtn" onClick={openUserProfile}>Show user profile</p>
      <button onClick={onClose} className="close-button">Close</button>
      <h2>{option.label}</h2>
      <p>{option.details}</p>
      <ChatWindow/>
    </div>
  );
};

export default DetailsWindow;
