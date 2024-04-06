// UserProfile.js
import React from 'react';
import ChatWindow from '../ChatWindow/ChatWindow';
import './UserProfile.css'; // Make sure to create a corresponding CSS file
import { BiBlock } from "react-icons/bi";

const UserProfile = () => {
    const user = { name: 'Jane Doe',interest: "Action", avatar: 'https://via.placeholder.com/150', description: 'Frontend ' }
    return (
        <div className="user-profile">
            <img src={user.avatar} alt="avatar" className="avatar" />
            <button className="blockbtn"> <BiBlock />Block User </button>
            <h2 className="name">{user.name}</h2>
            <p className="title">{user.interest}</p>
            <p className="description">{user.description}</p>
            <ChatWindow/>
            
        </div>
       
    );
};

export default UserProfile;
