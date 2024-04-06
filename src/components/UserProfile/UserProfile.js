// UserProfile.js
import React from 'react';
import './UserProfile.css'; // Make sure to create a corresponding CSS file

const UserProfile = ({ user }) => {
    return (
        <div className="user-profile">
            <img src={user.avatar} alt="avatar" className="avatar" />
            <h2 className="name">{user.name}</h2>
            <p className="title">{user.title}</p>
            <p className="description">{user.description}</p>
        </div>
    );
};

export default UserProfile;
