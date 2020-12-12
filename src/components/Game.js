import React from 'react';
// Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
// redux
import {useDispatch} from 'react-redux';
import {loadDetails} from '../actions/detailsAction';


const Game = ({name, released, image, id}) => {

    // Load details
    const dispatch = useDispatch();
    const loadDetailsHandler = () => {
        dispatch(loadDetails(id));
    }

    return(
        <StyledGame onClick={loadDetailsHandler} >
            <h3>{name}</h3>
            <p>{ released }</p>
            <img src={image} alt={name}/>
        </StyledGame>
    )
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 0.6rem;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;


export default Game;