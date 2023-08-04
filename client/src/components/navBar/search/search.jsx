import style from './search.module.css'
import { useState } from 'react';

function search(props) {

    const [name, setName] = useState('');
    
    function handleChange(event){
        return setName(event.target.value)
    }

    return (
        <>
            <div className={style.search}>
                <input className ={style.input} type='search' onChange={handleChange} /> 
                {/* <button className={style.addButton} onClick={()=>{props.onSearch(id)}}>Search</button> */}
                <button className={style.addButton}>Search</button>  
            </div>
        </>
    );

};

export default search;