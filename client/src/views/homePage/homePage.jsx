import Card from '../../components/card/card.jsx';
import Countries from '../../components/countries/countries.jsx';
import FilteredCountries from '../../components/filteredCountries/filteredCountries.jsx';

import Pagination from '../../components/pagination/pagination.jsx';

import style from './homePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCountries, 
    getActivities,
    orderByName, 
    orderByPopulation ,
    filterByContinent,
    filterByActivity,
} from '../../redux/actions.js';

function homePage(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        setFilter(false);
        dispatch(getCountries());
        dispatch(getActivities());
    }, []);
    
    // getting the countries
    const allCountries = useSelector(state => state.allCountries);
    const error = useSelector(state => state.error);
    const errorMessage = useSelector(state => state.errorMessage);

    // getting the activities
    const activities = useSelector(state => state.activities);
    // console.log(activities)

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
    const [filterContinentValue, setFilteContinentrValue] = useState('Default');
    const [filterActivitiesValue, setFilterActivitiesValue] = useState('Default');

    const handleFilterByContinent = (event) => {
        event.preventDefault();
        dispatch(filterByContinent(event.target.value));
        setCurrentPage(1);
        setFilteContinentrValue(event.target.value);
        if (event.target.value === 'All') setFilter(false);
        else setFilter(true);
    };
    
    const handleFilterByActivity = (event) => {
        event.preventDefault();
        dispatch(filterByActivity(event.target.value));
        setCurrentPage(1);
        setFilterActivitiesValue(event.target.value);
        if (event.target.value === 'All') setFilter(false);
        else setFilter(true);
    };


    // for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [countryPage, setcountryPage] = useState(12);
    const indexLast = currentPage * countryPage;
    const indexFirst = indexLast - countryPage;
    const currentCountries = allCountries.slice(indexFirst, indexLast);
    const currentFilteredCountries = filteredCountries.slice(indexFirst, indexLast);
        
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    useEffect(() =>{
        setCurrentPage(1);
    }, [allCountries.length, setCurrentPage]);


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

                <select value={filterContinentValue} onChange={handleFilterByContinent}>
                    <option disabled value='Default'>Filter by continent</option>
                    <option value='All'>All</option>
                    <option value='Africa'>Africa</option>
                    <option value='Antarctica'>Antarctica</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='North America'>North America</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='South America'>South America</option>
                </select>

                <select value={filterActivitiesValue} onChange={handleFilterByActivity}>
                    <option disabled value='Default'>Filter by created activities</option>
                    <option value='All'>All</option>
                    {activities?.map((activity) => (
                        <option value={activity.name} key={activity.name}>{activity.name}</option>
                    ))}
                </select>
            </div>

            {filter ? (
                <FilteredCountries error={error} errorMessage={errorMessage} currentFilteredCountries={currentFilteredCountries} />
            ) : (
                <Countries error={error} errorMessage={errorMessage} currentCountries={currentCountries} />
            )}

            <div>
                <Pagination 
                countryPage={countryPage} 
                countries={filter ? filteredCountries.length : allCountries.length } 
                pagination={pagination} 
                page={currentPage} 
                currentCountries={currentCountries} />
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