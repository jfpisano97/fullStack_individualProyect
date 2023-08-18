import React from "react";
import style from "./pagination.module.css"
// import { useState, useEffect } from 'react';

function Pagination ({countryPage, countries, pagination, page, currentCountries}){

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries/countryPage); i++){
    pageNumbers.push(i);
  };

    return(
        <div className={style.pagination}>
            <div className={style.prevBtn}>
                <button className={style.pagesBtn} style={page <= 1 ? {display: 'none'} : {}} onClick={()=>pagination(page-1)}> Prev </button>
            </div>
            <div className={style.nextBtn}>
                <button className={style.pagesBtn} style={page >= pageNumbers.length ? {display: 'none'} : {}} onClick={()=>pagination(page + 1)}> Next </button>
            </div>
          
            {pageNumbers && pageNumbers.map((pageNumber) => (pageNumbers.length === 1 ? null :
                <div className={style.pages} key={pageNumber}>
                    <button className={style.pagesBtn} style={page === pageNumber ? {background:"transparent", color:"#273314"} : {}} onClick={() => pagination(pageNumber)}> {pageNumber} </button>
                    <br/>
                    <br/>
                </div>
            ))}
        </div>
    );
};

export default Pagination;