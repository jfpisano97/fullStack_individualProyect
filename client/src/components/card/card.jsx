import { Link } from 'react-router-dom';
import style from './card.module.css';

function card (props) {
    return (
        <div className={style.card}>
            <Link to={`/countries/${props.id}`} >
                <img src={props.flag} alt='' />
            </Link>
            <h3>{props.name}</h3> 
            <h5>{props.continent}</h5>
        </div>            
    );
};

export default card;



//////// REDUX WITH connect ///////
///////////////////////////////////
// const mapStateToProps = (state) => {
//     return {
//        myFavorites: state.myFavorites,
//     };
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//        addFav: (props) => {
//           dispatch(addFav(props));
//        },
//        removeFav: (id) => {
//           dispatch(removeFav(id));   
//        },
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Card);