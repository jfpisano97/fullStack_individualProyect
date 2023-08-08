import style from './filteredCountries.module.css';
import Card from '../../components/card/card.jsx';
import Pagination from '../../components/pagination/pagination.jsx';

function filteredCountries({error, errorMessage, filteredCountries}){
    return (
        <div className={style.cards}>
            {error ? (
                <h2>{errorMessage}</h2>
            ) : filteredCountries.length === 0 ? (
                <h2>Loading...</h2>
            ) : (
                filteredCountries.map(({ id, name, flag, continent }) => (
                    <Card key={id} id={id} name={name} flag={flag} continent={continent} />
                ))
            )}
        </div> 
    )
};

export default filteredCountries;