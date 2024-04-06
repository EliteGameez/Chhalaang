import React from 'react';

const Game = ({ title, image }) => {
    return (
        <div className="card" style={{
            background: 'url(' + image + ')', backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <h3 style={{ color: "white" }}>{title}</h3>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Game;