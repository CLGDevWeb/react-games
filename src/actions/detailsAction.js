import axios from 'axios';
import {gameDetailsURL, gameScreensURL} from '../data/api';

export const loadDetails = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAILS"
    });

    const detailsData = await axios.get(gameDetailsURL(id));
    const screensData = await axios.get(gameScreensURL(id));

    dispatch({
        type: "GET_DETAILS",
        payload: {
            game: detailsData.data,
            screens: screensData.data,
        }
    })
}