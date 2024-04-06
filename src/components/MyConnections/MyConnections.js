import React from 'react';
import './MyConnections.css'; // Import the CSS file for styles

const UserList = () => {
    const users = [
        { name: 'Jane Doe', avatar: 'https://via.placeholder.com/150', description: 'Frontend Developer' },
        { name: 'John Smith', avatar: 'https://via.placeholder.com/150', description: 'UX Designer' },
        // Add more users as needed
    ];
    return (
        <div className="user-list">
            <h3>My Contacts</h3>
            <br/>
            {users.map((user, index) => (
                <div key={index} className="user-item">
                    <img src={user.avatar} alt={user.name} className="user-avatar"/>
                    <div className="user-info">
                        <h5 className="user-name">{user.name}</h5>
                        <p className="user-description">{user.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;