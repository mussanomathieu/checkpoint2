import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GameCard from '../components/GameCard';

function GameList() {
    
    const [games, setGames] = useState([]);
    const [isOver, setIsOver] = useState(false);

    useEffect(() => {
      axios
        .get('https://apis.wilders.dev/wild-games/games/') 
        .then ((res) => res.data)
        .then ((data) => setGames(data))
    }, [])
    return (
        <div className="GameList">
               <button className="filter-btn" onClick={() => setIsOver(!isOver)}>
                {isOver? 'Show All games' : 'Show rating over 4.2  games'}
            </button>
                {!isOver
                ? 
                games
                .map((game) => (
                 <div key={game.id}> 
                        <GameCard game={game}/>
                 </div>
             ))
             :
             games
             .filter((game) =>game.rating > 4.2)
             .map((game) => (
                <div key={game.id}> 
                       <GameCard game={game}/>
                </div>
             ))}   
        </div>
    )
}
export default GameList
