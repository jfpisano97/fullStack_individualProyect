import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import style from './card.module.css';

function card (props) {

    return (

        <div className={style.card}>
            <Link to={`/cards/detail/${props.id}`} >
                <img src={props.flag} alt='' />
            </Link>
            <h3>{props.name}</h3> 
            <h2>{props.continent}</h2>
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