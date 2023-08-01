import axios from "axios";
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';





export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID'



/// PROYECTO countries - copiar lo de rick y morty ////////////
/////////////////////////////////////////////////////////



// export const getCountries = () => {
//     return async (dispatch) => {
//         const countries = await axios.get('http://localhost:3001/countries');
//         return dispatch({
//             type: GET_COUNTRIES,
//             payload: countries.data,
//         });
//     };
// };

export const getCountries = () => {
    return async (dispatch) => {
        try {
            const countries = await axios.get('http://localhost:3001/countries');
            dispatch({
                type: GET_COUNTRIES,
                payload: countries.data,
            });
        } catch (error) {
            dispatch({
                type: GET_COUNTRIES,
                payload: { error: true, errorMessage: "Error al cargar los países" },
            });
        };
    };
};

export const getCuntriesById = (id) => {
    const newID = id.toUpperCase();
    return async (dispatch) => {
        try {
            const country = await axios.get(`http://localhost:3001/countries/${newID}`);
            dispatch({
                type: GET_COUNTRIES_BY_ID,
                payload: country.data,
            });
        } catch (error) {
            dispatch({
                type: GET_COUNTRIES_BY_ID,
                payload: { error: true, errorMessage: "Error al cargar los países" },
            });
        };
    };
};















///////////// PROYECTO RICY Y MORTY ////////////
////////////////////////////////////////////////





// solo FRONT
// export const addFav = (character) => {
//     return {
//         type: ADD_FAV,
//         payload: character,
//     };
// };

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
//     };
// };




// solo para FRONT
// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id,
//     };
// };

// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//        });
//        });
//     };
// };

// export const filterCards = (gender) => {
//     return {
//         type: FILTER,
//         payload: gender,
//     };
// };

// export const orderCards = (order) => {
//     return {
//         type: ORDER,
//         payload: order,
//     };
// };