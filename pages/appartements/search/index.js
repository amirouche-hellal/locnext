
import { useState, useEffect } from "react";
import  Layout  from "../../../components/layout";
import { useRouter } from "next/router";
import api from "../../../auth/axios";
import  {SearchFilter}  from "../../../components/searchFilter";
import Error404 from '../../../components/Error404'
import SpinnerLoad from "../../../components/spinner";
import ScrollComponent from "../../../components/scrollComponent";

const Search = ({TousLesBiens}) => {

  const router = useRouter();
  const [resSearch, setresSearch] = useState("");
  const [loading , setLoading] =  useState(true)
  const [error , setError] =  useState(true)
  const [limit , setLimit] =  useState(3)
  const [toutLesBiens , setToutLesBiens] =  useState(TousLesBiens)



// redirect si query est vide 
  
   
   
  useEffect(() => {
    
    async function getProperty() {
      
      if(router.query.titre || router.query.categorie){

          const filters= {
            titre: router.query.titre,
            categorie: router.query.categorie,
          }

        await api.post("/api/biens/search", {filters})
        .then(res => {
          if (res.status === 200) { 
            
            setresSearch(res.data);
            setLoading(false)
        
          } else {
            setLoading(true)
          }
        }).catch(err=>{
          setError("Il y'a une erreur , probablement c'est le réseau" )
          
        })

      }
    
    }
    getProperty();
  }, [router.query.titre, router.query.categorie]);



 useEffect(() => {

  addLimit

 }, [limit])


  
  //incrementer le nombre de bien à afficher
  const addLimit = ()=>{
    
    if(resSearch.length > limit){

      setLimit( limit +1)
      
    }
  }

  return (
    <Layout>
      <div className="container">
        <SearchFilter />
        { router.query.categorie || router.query.titre ? (

          <div>
            <div className="mb-4 text-center globalColor font-weight-bolder">
              {resSearch.length} Bien(s) trouve(s)
            </div>
            { error && (
              <div className="col-12 text-center text-danger">
                {error}
              </div>
            )}
            { resSearch  ?(

              <ScrollComponent listelScroll={resSearch}  addLimit={addLimit} limit={limit} toutLesBiens={[]} />

            ) : <SpinnerLoad/> }
            
          </div>
        ) : null}
        
        {/* { loading ? <SpinnerLoad/>   : '' } */}

        {resSearch.length ===0 &&(
          <Error404/>
        )}
      </div>
    </Layout>
  );
};

export default Search;

export const getServerSideProps = async (context)=>{

 //recup tout  les biens pour utiiser length etc 
 const toutProduit = await api.get(`/api/biens/tous-biens`)
 const TousLesBiens= toutProduit.data

  return {
    props:{
      TousLesBiens
    }
  }

}



































































// import { useState, useEffect } from "react";
// import  Layout  from "../../../components/layout";
// import Router , { useRouter } from "next/router";
// import api from "../../../auth/axios";
// import  Product  from "../../../components/product";
// import { SearchFilter } from "../../../components/searchFilter";
// import Error404 from '../../../components/Error404'
// import SpinnerLoad from "../../../components/spinner";

// const Search = () => {


//   const router = useRouter();
//   const [properties, setProperties] = useState("");
//   const [loading , setLoading] =  useState(true)
//   const [error , setError] =  useState(true)
  
// // redirect si query est vide 
  
   
   
//   useEffect(() => {
    
//     async function getProperty() {

//      await api.post("/api/property/list/search", {
//         filters: {
//           titre: router.query.titre,
//           categorie: router.query.categorie,
//         },
//       })
//       .then(res => {
//         if (res.status === 200) { 
//           setProperties(res.data.data);
//           setLoading(false)
//         } else {
//           setLoading(true)
//         }
//       }).catch(err=>{
//         setError("Il y'a une erreur , probablement c'est le réseau" )
        
//       })
    
//     }
//     getProperty();
//   }, [router.query.titre, router.query.categorie]);


  
//   return (
//     <Layout>
//       <div className="container">
//         <SearchFilter />
//         {router.query.categorie || router.query.titre ? (

//           <div>
//             <div className="mb-4 text-center globalColor font-weight-bolder">
//               {properties.length} Bien(s) trouve(s)
//             </div>
//             { error && (
//               <div className="col-12 text-center text-danger">
//                 {error}
//               </div>
//             )}
//             { properties ?(

//               <Product products={properties} />

//             ) : <SpinnerLoad/> }
            
//           </div>
//         ) : null}
//         {properties.size ===0 &&(
//           <Error404/>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Search;
