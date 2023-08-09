import axios from "axios";


export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';

export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';


export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';

export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const POST_ACTIVITY = 'POST_ACTIVITY';

export const ADD_COUNTRY = 'ADD_COUNTRY';


// getting countries actions
export const getCountries = () => {
    return async (dispatch) => {
        try {
            const countries = await axios.get('http://localhost:3001/countries');
            dispatch({
                type: GET_COUNTRIES,
                payload: countries.data,
            });
        } catch (error) {
            throw new Error(error.errorMessage)

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
            throw new Error(error.errorMessage)

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
            const countryByName = await axios.get(`http://localhost:3001/countries/?name=${name}`);
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

// getting activities
export const getActivities = () => {
    return async (dispatch) => {
        try {
            const activities = await axios.get('http://localhost:3001/activities');
            dispatch({
                type: GET_ACTIVITIES,
                payload: activities.data,
            });
        } catch (error) {
            throw new Error(error.errorMessage)
        };
    };
};

// post activity
export const postActivity = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`http://localhost:3001/activities`, payload);
            return dispatch({
                type: POST_ACTIVITY,
            })
        } catch (error) {
            throw new Error(error.errorMessage)
        };
    };
};

// for adding countries to the 'post activity form'
export const addCountryList = (name) => {
    return async (dispatch) => {
        try {
            const addCountry = await axios.get(`http://localhost:3001/countries/?name=${name}`)

            dispatch({
                type: ADD_COUNTRY,
                payload: addCountry.data[0].id,
            })
        } catch (error) {
            throw new Error(error.errorMessage)
        };
    };
};


// order actions
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

// filter actions
export const filterByContinent = (continent) => {
    
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent,
    };
};

export const filterByActivity = (activity) => {
    return {
        type: FILTER_BY_ACTIVITY,
        payload: activity,
    };
};