import style from './countries.module.css';
import Card from '../../components/card/card.jsx';

function countries({error, errorMessage, currentCountries}){
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
        </div> 
    )
};

export default countries;