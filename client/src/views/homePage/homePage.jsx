import Card from '../../components/card/card.jsx';
import style from './homePage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCountries } from '../../redux/actions.js';

function homePage(props) {

    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.allCountries);
    const error = useSelector(state => state.error);
    const errorMessage = useSelector(state => state.errorMessage);

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    console.log(allCountries)

    // return (
    //     <div className={style.cards}>
    //         {allCountries.length === 0 ? (<h2>Loading...</h2>) : allCountries.map(({id, name, flag, continent}) => {
    //             return (<Card 
    //                 id = {id}
    //                 name = {name}
    //                 flag = {flag}
    //                 continent = {continent}
    //             />)
    //         })}
    //     </div>        
    // );

    
    return (
        <div className={style.cards}>
            {error ? (
                <h2>{errorMessage}</h2>
            ) : allCountries.length === 0 ? (
                <h2>Loading...</h2>
            ) : (
                allCountries.map(({ id, name, flag, continent }) => (
                    <Card key={id} name={name} flag={flag} continent={continent} />
                ))
            )}
        </div>
    );


};

export default homePage;