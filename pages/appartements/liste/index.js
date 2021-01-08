
import React ,{useEffect} from 'react'
import Styles from './index.module.css'
import api from '../../../auth/axios'
import Layout from '../../../components/layout'
import Spinner from '../../../components/spinner'
import { useRouter } from 'next/router'
import {SearchFilter} from '../../../components/searchFilter'
import ScrollComponent from '../../../components/scrollComponent'






function ListeBien(props) {

    const toutLesBiens = props.produits 
    const bienOnscroll = props.lesBiensonScroll
   


    const router = useRouter()

    // recevoir le current route path 
    const currentRoutPath = router.pathname;

   
  
    useEffect(() => {

      //si le query est vide  ou indefinie

      // console.log(router.query.limit)

      if(router.query.limit=='' || router.query.limit == undefined ){

          router.push({
          pathname: currentRoutPath,
          query:{limit :6 }
        })
   
      }
      //si le query est superieur au length des produits
      if(router.query.limit > toutLesBiens.length ){

        router.push({
         pathname: currentRoutPath,
         query:{limit : toutLesBiens.length }
       })
      }
      
     

    }, [router.query.limit])

    
//incrementer le nombre de bien à afficher
const addLimit = ()=>{
      
  //récupere tout les query s'ils existent sur l url 
   const currentQuery = {...router.query}
  // console.log(currentQuery)
  currentQuery.limit = Number(router.query.limit) + 3
  //envoyer les donner vers la page 
  router.push({
    pathname: currentRoutPath,
    query:currentQuery
  })
}



    return (
        <Layout namePage="appartements">
            <div className="container row mx-auto ">
              <div className="mt-2 col-12">
                <SearchFilter />
              </div>
              { bienOnscroll 
                ?
                 <>
                  <ScrollComponent listelScroll={bienOnscroll} addLimit={addLimit} limit={router.query.limit} toutLesBiens={toutLesBiens}/>
                 </>
                : 
                <>  
                 <Spinner/>
                </>   
              }  
            </div>
 
        </Layout>
    )

}




export const getServerSideProps = async (context)=>{
   
  // recup la query limit 
  const limit = context.query.limit 
  //recup les bien selon la limit qui change onscroll
  const {data}  = await api.get(`/api/biens/tous-biens?limit=${limit}`)
  const lesBiensonScroll = data;
  //recup tout  les biens pour utiiser length etc 
 const toutProduit = await api.get(`/api/biens/tous-biens`)
 const produits= toutProduit.data


  
  return {
    props:{
      lesBiensonScroll,
      produits
    }
  }
}
export default ListeBien

//meme code mais avec la pagination 

// import React ,{useEffect} from 'react'
// import Styles from './index.module.css'
// import api from '../../../auth/axios'
// import Layout from '../../../components/layout'
// import Product from '../../../components/product'
// import Spinner from '../../../components/spinner'
// import { useRouter } from 'next/router'
// import ReactPaginate from 'react-paginate'
// import {SearchFilter} from '../../../components/searchFilter'

// function ListeBien(props) {

//   const toutLesBiens = props.toutLesBiens 
//   const currentPage = props.currentPage 
//   const countPage = props.countPage

//     const router = useRouter()


    
//     const paginationHandler = (page)=>{
//       // recevoir le current route path 
//       const currentRoutPath = router.pathname;
//       //récupere tout les query s'ils existent sur l url ex : ?page = 1
//       const currentQuery = {...router.query}
//       // console.log(currentQuery)
//       currentQuery.page = page.selected + 1
//       //envoyer les donner vers la page 
//       router.push({
//         pathname: currentRoutPath,
//         query:currentQuery
//       }).then(window.scrollTo({
//           top:0,
//           behavior:"smooth"
//       })) //scroll aussi en top 
      
//     }

    
//     return (
//         <Layout namePage="appartements">
//             <div className="container row mx-auto ">
//               <div className="mt-2 col-12">
//                 <SearchFilter />
//               </div>
//               { toutLesBiens 
//                   ?
//                  <Product products={toutLesBiens}  className="col-12 "/>
//                  :
                   
//                  <Spinner/>
                 
                  
//               }
//               <div className="col-12 col-md-6  mx-auto d-flex justify-content-center">
//                  <ReactPaginate
//                   onPageChange={paginationHandler}
//                   initialPage={currentPage -1}
//                   pageCount={countPage}
//                   marginPagesDisplayed={2}
//                   pageRangeDisplayed={5}
//                   previousLabel={"précédent"}
//                   nextLabel="suivant"
//                   activeClassName={Styles.activated}
//                   breakLabel="..."
//                   pageClassName ={Styles.paginate}
//                   containerClassName={Styles.customPaginate}
//                   />
//               </div>
//             </div>
          
//         </Layout>
//     )
// }




// export const getServerSideProps = async (context)=>{
   
//     // il va recevoir la query ou si la query n'existe pas il va retoirner la premoère page
//    const page = context.query.page || 1
 
//    //recup tout  les biens avec pagination 
//    const {data} = await api.get(`/api/properties?page=${page}`)
//    const currentPage = data.currentPage;
//    const countPage = data.totalPages
//    const toutLesBiens = data.data
//     return {
//       props:{
//         toutLesBiens,
//         currentPage,
//         countPage
//       }
//     }
  
//   }



// export default ListeBien


