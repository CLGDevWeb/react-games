import React, {useEffect}  from 'react';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
// components
import Game from '../components/Game';
// Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Home = () => {
    // Fetch games
    const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
    }, [dispatch]);
    // Get that data back
    const { popular, upcoming, news } = useSelector((state) => state.games);

    return(
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map((game) => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </Games>

            <h2>Popular Games</h2>
            <Games>
                {popular.map((game) => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </Games>

            <h2>New Games</h2>
            <Games>
                {news.map((game) => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </Games>
        </GameList>
    )
};


const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 5rem 3rem;
`;

export default Home;