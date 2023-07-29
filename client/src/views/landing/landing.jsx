import style from './landing.module.css';
import { Link } from 'react-router-dom';

function landing() {

    return (
        <>
            <p>landing page</p>
            <Link to={'/home'}>
            
                <button> Home </button>

            </Link> 
        </>
    );
};

export default landing;