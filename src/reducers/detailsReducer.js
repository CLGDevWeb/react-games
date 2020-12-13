const initState = {
    game : {platforms: []},
    screens: {results: []},
}

const detailsReducer = (state = initState, action) => {
    switch(action.type) {
        case "GET_DETAILS":
            return{
                ...state, 
                game: action.payload.game,
                screens: action.payload.screens,
            }
        default:
            return {
                ...state
            }
    }
};

export default detailsReducer;