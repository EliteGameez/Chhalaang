// src/CollapsibleMenu.js
import React, { useState } from 'react';
import './CollapsibleChat.css';
import MyConnections from '../MyConnections/MyConnections';

const CollapsibleMenu = ({onOptionSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Option 1', 'Option 2', 'Option 3']; // Example options

  return (
    <div className="collapsible-menu">
      <button onClick={() => setIsOpen(!isOpen)} className="toggle-button">
        {isOpen ? 'My Connections' : 'My Connections'}
      </button>
      {isOpen && (
        <ul className="menu-list">
          {options.map((option, index) => (
            <li key={index} onClick={() => onOptionSelect(option)} className="menu-item">{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollapsibleMenu;
