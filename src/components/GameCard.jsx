import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css'
function GameCard(props) {
    const {game}= props;
    return (
        <div className ="GameCard">
            <Link to={{pathname:`/${game.id}`}}>
            <h2 className ="title">{game.name}</h2>
            </Link>
            <span>{game.rating}</span>
            <Link to={{pathname:`/${game.id}`}}>
            <img className="game-picture" src={game.background_image} alt={game.name} />
            </Link>
       
        </div>
    )
}

export default GameCard
