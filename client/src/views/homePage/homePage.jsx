import Card from '../../components/card/card.jsx';
import Pagination from '../../components/pagination/pagination.jsx';
import style from './homePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCountries } from '../../redux/actions.js';

function homePage(props) {

    // getting the countries
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.allCountries);
    const error = useSelector(state => state.error);
    const errorMessage = useSelector(state => state.errorMessage);

    useEffect(() => {
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
















    // with pagination
    // with error handler
    return (
        <div className={style.cards}>
            {error ? (
                <h2>{errorMessage}</h2>
            ) : currentCountries.length === 0 ? (
                <h2>Loading...</h2>
            ) : (
                currentCountries.map(({ id, name, flag, continent }) => (
                    <Card key={id} id={id} name={name} flag={flag} continent={continent} />
                ))
            )}

            <div>
                <Pagination 
                countryPage={countryPage} 
                countries={allCountries.length} 
                pagination={pagination} 
                page={currentPage} />
            </div>

        </div> 
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