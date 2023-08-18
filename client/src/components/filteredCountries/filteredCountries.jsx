import style from './filteredCountries.module.css';
import Card from '../../components/card/card.jsx';

function filteredCountries({error, errorMessage, currentFilteredCountries}){
    return (
        <div className={style.cards}>
            {error ? (
                <h2>{errorMessage}</h2>
            ) : currentFilteredCountries.length === 0 ? (
                <h2>Loading...</h2>
            ) : (
                currentFilteredCountries.map(({ id, name, flag, continent }) => (
                    <Card key={id} id={id} name={name} flag={flag} continent={continent} />
                ))
            )}
        </div> 
    )
};

export default filteredCountries;