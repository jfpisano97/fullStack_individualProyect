import style from './search.module.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountriesByName } from '../../../redux/actions.js';

function search(props) {

    const [name, setName] = useState('');
    
    function handleChange(event){
        event.preventDefault();
        return setName(event.target.value)
    };

    const dispatch = useDispatch();
    const countryByName = useSelector(state => state.countryByName);

    async function onSearch(event, name){
        event.preventDefault();
        if (!name) throw alert('Please type a country name');
        try {
            await dispatch(getCountriesByName(name))
        } catch (error) {
            console.log(error.errorMessage)
            alert('There is no contry with that name, try again!')
        }
        setName('');
    };



    // console.log('input', name)

    // console.log('country', countryByName)

    return (
        <>
            <div className={style.search}>
                <input className ={style.input} type='search' placeholder='Search a country' value={name} onChange={handleChange} /> 
                <button className={style.addButton} onClick={(event)=>{onSearch(event, name)}}>Search</button>
            </div>

            {countryByName && (

                <div>
                    <Link to={`/countries/${countryByName[0].id}`} >
                        <h2>{countryByName[0].name}</h2>
                    </Link>
                </div>

            )}


        </>
    );

};

export default search;