export const initialState = {
    films: []
};

const GET_FILMS = "GET_FILMS";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_FILMS" : 
            return {...state, films: [...state.films, ...action.payload]}
        default :
            return state
    }
}

export const getFilms = (payload) => ({type: GET_FILMS, payload})