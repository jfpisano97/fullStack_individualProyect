import { getCuntriesById } from '../../redux/actions.js';
import style from './detailPage.module.css'
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function detailPage() {
    
    const {id} = useParams();
    
    const dispatch = useDispatch();
    const countryById = useSelector(state => state.countryById);
    const error = useSelector(state => state.error);
    const errorMessage = useSelector(state => state.errorMessage);

    useEffect(() => {
        dispatch(getCuntriesById(id));
    }, [id]);
    
    
    console.log('id', id)
    console.log('country', countryById)
    
    return (
        <div>
            <div className={style.detail}>
                <h1>{countryById.name}</h1> 
                <h2>{countryById.continent}</h2>
                <h2>{countryById.capital}</h2>
                <h2>{countryById.subregion}</h2>
                <h2>{countryById.area}</h2>
                <h2>{countryById.population}</h2>
                <h2>{countryById.Activities}</h2>
                {/* {character.origin.name !== undefined && <h2>{character.origin.name}</h2>} */}
                {/* <h2>{character.origin.name}</h2> */}
            </div>
            <div className={style.detail}>
                <img src={countryById.flag} alt='' />
            </div>
        </div>
    );
};

export default detailPage;















// getting countryById using promises and local state


// import axios from 'axios';
// import {useState, useEffect} from 'react';

// const [country, setCountry] = useState({});

// useEffect(() => {
    //     axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
        //        if (data.name) {
            //             setCountry(data);
            //         };
            //     });
            //     return setCountry({});
            // }, [id]);