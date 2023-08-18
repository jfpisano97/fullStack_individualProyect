import { GET_COUNTRIES, 
    GET_COUNTRIES_BY_ID, 
    GET_COUNTRIES_BY_NAME,
    GET_ACTIVITIES,
    POST_ACTIVITY,
    ADD_COUNTRY,
    ORDER_BY_NAME, 
    ORDER_BY_POPULATION, 
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
} from './actions';

// states
const initialState = {
    allCountries: [],
    countryById: [],
    countryByName: undefined,
    activities: [],
    noActivities: undefined,
    addCountry: [],
    filteredCountries: [],
    error: false,
    errorMessage: "",
};

// reducer
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

        case GET_COUNTRIES_BY_ID:
            if (action.payload.error) {
                return {
                    ...state,
                    error: true,
                    errorMessage: action.payload.errorMessage,
                };
            }
        return { ...state, countryById: action.payload, error: false, errorMessage: "" };

        case GET_COUNTRIES_BY_NAME:
            if (action.payload.error) {
                return {
                    ...state,
                    error: true,
                    errorMessage: action.payload.errorMessage,
                };
            }
        return { ...state, countryByName: action.payload, error: false, errorMessage: "" };

        case GET_ACTIVITIES:
            if (action.payload.error) {
                return {
                    ...state,
                    error: true,
                    errorMessage: action.payload.errorMessage,
                    noActivities: 'There are no activities created',
                };
            }
            return { ...state, activities: action.payload, error: false, errorMessage: "", noActivities: undefined};

        case POST_ACTIVITY:
            return {...state};

        case ADD_COUNTRY:
            if (action.payload.error) {
                return {
                    ...state,
                    error: true,
                    errorMessage: action.payload.errorMessage,
                };
            };
        return { ...state, addCountry: [...state.addCountry, action.payload], error: false, errorMessage: "" };    

        case ORDER_BY_NAME: 
            let orderByName = null;
            if (!state.filteredCountries.length){
                if (action.payload === 'A') {
                    orderByName = state.allCountries.sort((a, b) => a.name.localeCompare(b.name));
                } else {
                    orderByName = state.allCountries.sort((a, b) => b.name.localeCompare(a.name));
                };
                return {
                    ...state,
                    allCountries: orderByName,
                };
            } else {
                if (action.payload === 'A') {
                    orderByName = state.filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
                } else {
                    orderByName = state.filteredCountries.sort((a, b) => b.name.localeCompare(a.name));
                };
                return {
                    ...state,
                    filteredCountries: orderByName,
                };
            };

        case ORDER_BY_POPULATION:
            let orderByPopulation = null;

            if (!state.filteredCountries.length) {
                if (action.payload === 'D') {
                    orderByPopulation = state.allCountries.sort((a, b) => a.population - b.population);
                } else {
                    orderByPopulation = state.allCountries.sort((a, b) => b.population - a.population);
                };
                return {
                    ...state,
                    allCountries: orderByPopulation,
                };
            } else {
                if (action.payload === 'D') {
                    orderByPopulation = state.filteredCountries.sort((a, b) => a.population - b.population);
                } else {
                    orderByPopulation = state.filteredCountries.sort((a, b) => b.population - a.population);
                };
                return {
                    ...state,
                    filteredCountries: orderByPopulation,
                };
            };        

        case FILTER_BY_CONTINENT:
            const totalCountries = state.allCountries;
            const filteredCountries = action.payload === 'All' ? totalCountries : totalCountries.filter(country => country.continent === action.payload);    
            return {
                ...state,
                filteredCountries: filteredCountries,
            };

        case FILTER_BY_ACTIVITY:
            const totalCountries2 = state.allCountries;
            const filteredCountries2 = totalCountries2.filter((country) => {
                return country.Activities?.find(activity => activity.name === action.payload);  
            });
            return {
                ...state,
                filteredCountries: filteredCountries2,
            };
        default:
        return state;
    };
};

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