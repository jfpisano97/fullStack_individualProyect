import Search from './search/search.jsx';
import style from './navBar.module.css';
import {Link} from 'react-router-dom';



function navBar() {

    

    return (
        <>
            <div className={style.nav}>

                <Link to='/home'>
                    <button className={style.btns}>Home</button>
                </Link>

                <Link to='/form'>
                    <button className={style.btns}>Create activity</button>
                </Link>

                <Search />

            </div>

        </>
    );
};

export default navBar;