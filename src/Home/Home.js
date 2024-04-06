import React, { useState } from 'react';
import './Home.css'; // Your custom CSS file for styling
import game1 from '../assets/img/game1.png';
import game2 from '../assets/img/game2.png';
import game3 from '../assets/img/game3.png';
import game4 from '../assets/img/game4.png';
import game5 from '../assets/img/game5.png';
import game6 from '../assets/img/game6.png';
import game7 from '../assets/img/game7.png';
import game8 from '../assets/img/game8.png';
import game9 from '../assets/img/game9.png';
import game10 from '../assets/img/game10.png';
import GameCarousel from './GameCarousel';
import HorizontalCardList from './HorizontalCardList';

import CollapsibleMenu from '../components/CollapsibleChat/CollapsibleChat';
import DetailsWindow from '../components/DetailWindow/DetailWindow';
import HorizontalGameList from './HorizontalCardList';


const Home = () => {
    const [home, setHome] = React.useState({});
    const [games, setGames] = useState([
        {
            id: 1,
            title: 'Tic Tac Toe',
            image: game1,
        },
        {
            id: 2,
            title: 'Wordle',
            image: game2,
        },
        {
            id: 3,
            title: 'MineCraft',
            image: game3,
        },
        {
            id: 4,
            title: 'CounterStrike',
            image: game4,
        },
        {
            id: 5,
            title: 'Dota',
            image: game5,
        },
        {
            id: 6,
            title: 'Chess',
            image: game6,
        },
        {
            id: 7,
            title: 'Ludo',
            image: game7,
        },
        {
            id: 8,
            title: 'Rummy',
            image: game8,
        },
        {
            id: 9,
            title: 'Poker',
            image: game9,
        },
        {
            id: 10,
            title: 'Call of Duty',
            image: game10,
        },

        // Add more games as needed
    ]);

    const cards = [
        { username: 'Areesha500', location: 'Bangalore', interests: 'Action, Arcade' },
        { username: 'Shalini15', location: 'Bangalore', interests: 'Action, Arcade' },
        { username: 'RamyaNNNY', location: 'Bangalore', interests: 'Action, Arcade' },
        { username: 'SnigdhaSS', location: 'Bangalore', interests: 'Action, Arcade' },
        { username: 'Areesha500', location: 'Bangalore', interests: 'Action, Arcade' },
        { username: 'Shalini15', location: 'Bangalore', interests: 'Action, Arcade' },
        { username: 'RamyaNNNY', location: 'Bangalore', interests: 'Action, Arcade' },
        { username: 'SnigdhaSS', location: 'Bangalore', interests: 'Action, Arcade' },
        { username: 'Areesha500', location: 'Bangalore', interests: 'Action, Arcade' },
        { username: 'Shalini15', location: 'Bangalore', interests: 'Action, Arcade' },
        { username: 'RamyaNNNY', location: 'Bangalore', interests: 'Action, Arcade' },
        { username: 'SnigdhaSS', location: 'Bangalore', interests: 'Action, Arcade' },
        // Add more cards as needed
    ];
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <>
            <div>
                <GameCarousel games={games} className="gamezone" />
            </div>
            <br />
            <div className='users'>
                <h4 style={{ textAlign: "left", paddingLeft: "20px" }}>Active Users</h4>
                <HorizontalCardList cards={cards} />
            </div>
            <CollapsibleMenu onOptionSelect={(option) => setSelectedOption(option)} />
            <DetailsWindow option={selectedOption} onClose={() => setSelectedOption(null)} />

            {/* <div className='users'>
                <h4 style={{ textAlign: "left", paddingLeft: "20px" }}>Action Games</h4>
                <HorizontalGameList games={games} />
            </div>
            <div className='users'>
                <h4 style={{ textAlign: "left", paddingLeft: "20px" }}>Arcade Games</h4>
                <HorizontalGameList games={games} />
            </div> */}

            <CollapsibleMenu onOptionSelect={(option) => setSelectedOption(option)} />
            <DetailsWindow option={selectedOption} onClose={() => setSelectedOption(null)} />

        </>
    );
};
export default Home;
