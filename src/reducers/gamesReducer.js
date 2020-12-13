const initState = {
    popular : [],
    upcoming : [],
    news : [],
    searched: [],
}


const gamesReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_GAMES":
            return {
                ...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                news: action.payload.news,
            };
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched,
            }
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searched: [],
            }
        default:
            return {...state};
    }
}

export default gamesReducer;