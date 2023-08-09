import style from './addCountryToForm.module.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCountryList } from '../../../redux/actions.js';

function addCountryToForm(props) {

    const [name, setName] = useState('');
    const dispatch = useDispatch();
    
    function handleChanges(event){
        event.preventDefault();
        return setName(event.target.value)
    };


    async function onSearch(event, name){
        event.preventDefault();
        if (!name) throw alert('Please type a country name');
        try {
            await dispatch(addCountryList(name));
        } catch (error) {
            alert('There is no contry with that name, try again!');
        }
        setName('');
    };
    
    // console.log('input', name)

    // console.log('country', addCountry)

    return (
        <>
            <div className={style.search}>
                <input className ={style.input} type='search' placeholder='Search a country' value={name} onChange={handleChanges} /> 
                <button className={style.addButton} onClick={(event)=>{onSearch(event, name)}}>Search</button>
            </div>
        </>
    );

};

export default addCountryToForm;