import React from 'react';
import './MyConnections.css'; // Import the CSS file for styles
import { NavLink, useNavigate } from 'react-router-dom'

const MyConnections = () => {
    const navigate = useNavigate();
    const users = [
        { name: 'Jane Doe', avatar: 'https://via.placeholder.com/150', description: 'Frontend ' },
        { name: 'John Smith', avatar: 'https://via.placeholder.com/150', description: 'UX Designer' },
        { name: 'John Smith', avatar: 'https://via.placeholder.com/150', description: 'UX Designer' },

        // Add more users as needed
    ];

    const navigateUserProfile = (userid) => {
        navigate("/userprofile");
    };

    return (
        <div className="myconnection">
        <div className="user-list">
            <br/>
            {users.map((user, index) => (
                <div key={index} className="user-item" onClick={()=>navigateUserProfile(user.userid)}>
                    <img src={user.avatar} alt={user.name} className="user-avatar"/>
                    <div className="user-info">
                        <h5 className="user-name">{user.name}</h5>
                        <p className="user-description">{user.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default MyConnections;