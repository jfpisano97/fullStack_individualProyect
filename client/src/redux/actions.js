import axios from "axios";

export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';


export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';


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
                payload: { error: true, errorMessage: error },
            });
        };
    };
};

export const getCountriesById = (id) => {
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
                payload: { error: true, errorMessage: error },
            });
        };
    };
};

export const getCountriesByName = (name) => {
    return async (dispatch) => {
        try {
            const countryByName = await axios.get(`http://localhost:3001/countries/?name=${name}`)
            dispatch({
                type: GET_COUNTRIES_BY_NAME,
                payload: countryByName.data,
            })
        } catch (error) {
            // dispatch({
            //     type: GET_COUNTRIES_BY_NAME,
            //     payload: { error: true, errorMessage: error },
            // });
            throw new Error(error.errorMessage)
        };
    };
};




export const orderByName = (order) => {
    return {
        type: ORDER_BY_NAME,
        payload: order,
    };
};

export const orderByPopulation = (order) => {
    return {
        type: ORDER_BY_POPULATION,
        payload: order,
    };
};







///////////// PROYECTO RICY Y MORTY ////////////
////////////////////////////////////////////////







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