import Card from '../../components/card/card.jsx';
import Countries from '../../components/countries/countries.jsx';
import FilteredCountries from '../../components/filteredCountries/filteredCountries.jsx';

import Pagination from '../../components/pagination/pagination.jsx';

import style from './homePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCountries, 
    orderByName, 
    orderByPopulation ,
    filterByContinent,
} from '../../redux/actions.js';

function homePage(props) {
    const dispatch = useDispatch();
    
    // getting the countries
    const allCountries = useSelector(state => state.allCountries);
    const error = useSelector(state => state.error);
    const errorMessage = useSelector(state => state.errorMessage);

    useEffect(() => {
        setFilter(false);
        dispatch(getCountries());
    }, []);

    // for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [countryPage, setcountryPage] = useState(10);
    const indexLast = currentPage * countryPage;
    const indexFirst = indexLast - countryPage;
    const currentCountries = allCountries.slice(indexFirst, indexLast);
    
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect(() =>{
        setCurrentPage(1);
    }, [allCountries.length, setCurrentPage]);

    // order items
    const [orderNameValue, setOrderNameValue] = useState('Default');
    const [orderPopulationValue, setOrderPopulationValue] = useState('Default');

    const handleOrderByName = (event) => {
        event.preventDefault()
        dispatch(orderByName(event.target.value));
        setOrderNameValue(event.target.value);
    };

    const handleOrderByPopulation = (event) => {
        event.preventDefault()
        dispatch(orderByPopulation(event.target.value));
        setOrderPopulationValue(event.target.value);
    };

    // filter items
    const filteredCountries = useSelector(state => state.filteredCountries);
    const [filter, setFilter] = useState(false);

    const handleFilterByContinent = (event) => {
        event.preventDefault();
        dispatch(filterByContinent(event.target.value))
        if (event.target.value === 'All') setFilter(false);
        else setFilter(true);
    };    



    // with pagination
    // with error handler
    return (
        <>
            


            <div>

                <select value={orderNameValue} onChange={handleOrderByName}>
                    <option disabled value='Default'>Order by Name</option>
                    <option value='A'>Ascendent order</option>
                    <option value='D'>Descendent order</option>
                </select>

                <select value={orderPopulationValue} onChange={handleOrderByPopulation}>
                    <option disabled value='Default'>Order by population</option>
                    <option value='A'>Ascendent order</option>
                    <option value='D'>Descendent order</option>
                </select>

                <select onChange={handleFilterByContinent}>
                    <option value='All'>All</option>
                    <option value='Africa'>Africa</option>
                    <option value='Antarctica'>Antarctica</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='North America'>North America</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='South America'>South America</option>
                </select>


            </div>

            {filter ? (
                <FilteredCountries error={error} errorMessage={errorMessage} filteredCountries={filteredCountries} />
            ) : (
                <Countries error={error} errorMessage={errorMessage} currentCountries={currentCountries} />
            )}


            {/* <Countries error={error} errorMessage={errorMessage} currentCountries={currentCountries} />      */}
            




            <div>
                <Pagination 
                countryPage={countryPage} 
                countries={allCountries.length} 
                pagination={pagination} 
                page={currentPage} />
            </div>
        </>
    );
};

export default homePage;















    // without pagination

    // with error handler
    // return (
    //     <div className={style.cards}>
    //         {error ? (
    //             <h2>{errorMessage}</h2>
    //         ) : allCountries.length === 0 ? (
    //             <h2>Loading...</h2>
    //         ) : (
    //             allCountries.map(({ id, name, flag, continent }) => (
    //                 <Card key={id} id={id} name={name} flag={flag} continent={continent} />
    //             ))
    //         )}
    //     </div>

        
    // );


















// without error handler

// console.log(allCountries)

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






    // without pagination

    // with error handler
    // return (
    //     <div className={style.cards}>
    //         {error ? (
    //             <h2>{errorMessage}</h2>
    //         ) : allCountries.length === 0 ? (
    //             <h2>Loading...</h2>
    //         ) : (
    //             allCountries.map(({ id, name, flag, continent }) => (
    //                 <Card key={id} id={id} name={name} flag={flag} continent={continent} />
    //             ))
    //         )}
    //     </div>

        
    // );