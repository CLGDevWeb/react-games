const initState = {
    popular : [],
    upcoming : [],
    news : [],
}


const gamesReducer = (state=initState, action) => {
    switch(action.type) {
        case 'FETCH_GAMES':
            return {...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                news: action.payload.news,
            };
        default:
            return {...state};
    }
}

export default gamesReducer;