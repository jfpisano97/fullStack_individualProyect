import { GET_COUNTRIES } from './actions';

/// PROYECTO countries - copiar lo de rick y morty ////////////
/////////////////////////////////////////////////////////


const initialState = {
    allCountries: [],
    error: false,
    errorMessage: "",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            if (action.payload.error) {
                return {
                    ...state,
                    error: true,
                    errorMessage: action.payload.errorMessage,
                };
            }
            return { ...state, allCountries: action.payload, error: false, errorMessage: "" };

        default:
            return state;
    }
};


// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_COUNTRIES:
//             return {...state, allCountries: action.payload};
//         default: return {...state};
//     };
// };


export default rootReducer;












///////////// PROYECTO RICY Y MORTY ////////////
////////////////////////////////////////////////


// const initialState = {
//     myFavorites: [],
//     allCharacters: [],
// };

// const rootReducer = (state = initialState, action) => {
//     switch (action.type){

//         case ADD_FAV:
//             return { ...state, myFavorites: action.payload, allCharacters: action.payload };
//         case REMOVE_FAV:
//             return {
//                 ...state, 
//                 myFavorites: state.myFavorites.filter(
//                     (char) => char.id !== parseInt(action.payload)
//                 ),
//                 allCharacters: state.allCharacters.filter(
//                     (char) => char.id !== parseInt(action.payload)
//                 ),
//             };
//         case REMOVE_FAV:
//             return { ...state, myFavorites: action.payload , allCharacters: action.payload};
//         case FILTER:
//             const totalCharacters = state.allCharacters;
//             const charGender = action.payload === 'All' ? totalCharacters : totalCharacters.filter(char => char.gender === action.payload);
            
//             return {
//                 ...state,
//                 allCharacters: totalCharacters,
//                 myFavorites: charGender,
//             }
//         case ORDER: 

//             let order = null;

//             if (action.payload === 'A') {
//                 order = state.myFavorites.sort((a, b) => a.id - b.id);
//             }
//             if (action.payload === 'D') {
//                 order = state.myFavorites.sort((a, b) => b.id - a.id);
//             }

//             return {
//                 ...state,
//                 myFavorites: order,
//             } 
//         default: return {...state};
//     }
// };

// export default rootReducer;