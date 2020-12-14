import React, {useState} from 'react';
// Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';
// Redux and Routes
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';
// Animations
import {fadeIn} from '../data/animations';

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("");
    }

    const clearSearched = () => {
        dispatch({type: "CLEAR_SEARCHED"});
    }

    return(
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearched} >
                <img src={logo} alt="logo"/>
                <h1>React Games</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 0rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
        border-bottom-left-radius: 0.3rem;
        border-top-left-radius: 0.3rem;
        &:focus {
            box-shadow: 0px 0px 10px #ff767661;
        }
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
        border-bottom-right-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
        &:hover {
            background: #da4d4d;
        }
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
    }
`;

export default Nav;