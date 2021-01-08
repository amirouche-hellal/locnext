
import React from 'react'
import Styles from './index.module.css'
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate'
        
function Pagination({countPage ,currentPage}) {
    // console.log(currentPage ,countPage)
  const router = useRouter()
  const paginationHandler = (page)=>{
    // recevoir le current route path 
    const currentRoutPath = router.pathname;
    //récupere tout les query s'ils existent sur l url ex : ?page = 1
    const currentQuery = {...router.query}
    // console.log(currentQuery)
    currentQuery.page = page.selected + 1
    //envoyer les donner vers la page 
    router.push({
      pathname: currentRoutPath,
      query:currentQuery
    }).then(window.scrollTo({
        top:0,
        behavior:"smooth"
    })) //scroll aussi en top 
    
  }

    return (
        <>
              <ReactPaginate
               onPageChange={paginationHandler}
               initialPage={currentPage -1}
               pageCount={countPage}
               marginPagesDisplayed={2}
               pageRangeDisplayed={5}
               previousLabel={"précédent"}
               nextLabel="suivant"
               activeClassName={Styles.activated}
               breakLabel="..."
               pageClassName ={Styles.paginate}
               containerClassName={Styles.customPaginate}
              />
            
        </>
    )
}

export default Pagination
