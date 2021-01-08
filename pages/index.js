import React  from 'react'
import Layout from '@/components/layout'
import api from '../auth/axios'
import PropertyLastAdded from '@/components/propertyLastAdded/'
import {MDBContainer,MDBBtn} from 'mdbreact'
import CatalogData from '../components/catalogData'
import FeaturesPage from '@/components/features'
import { useRouter } from 'next/router'




export default function Home({propertyLastAdded ,propertyCatalogue , produits , listeCategories}) {

  const router = useRouter()
// -----------------------------------début----------------------------------------//
// console.log( router.query)
const addedLimit =  async ()=>{
    //recup les biens

    const limit= Number(router.query.limit)
    const produitsLength = Number(produits.data.length)
    
    if(router.query.limit === undefined){

        router.push({
          pathname: '/',
          query: { limit: 12 },
        })

    }

    if(router.query.limit){ 
        
         if( produitsLength > limit){
            
            router.push({
                pathname: '/',
                query: { limit: limit + 6 },
              })
            }

         }
        //  console.log(limit)
        //   console.log(produitsLength)
        if(limit > produitsLength){
          router.push({
            pathname: '/',
            query: { limit: produitsLength},
          })

          const btnVoirPlus = document.getElementById("voir_plus");
          btnVoirPlus.innerHTML ="pas de produit"
          btnVoirPlus.disabled = true;
        }
  }
// ----------------------------------- fin----------------------------------------//
  return (
    <Layout namePage="home" >
      
      <MDBContainer>
        
        {/* LastAdded catalogue */}
         <PropertyLastAdded properties={propertyLastAdded} />
        {/* notre catalogue */}
        {/* <CatalogData properties={propertyCatalogue}/> */}
        <div className="row ">
            <MDBBtn  id="voir_plus" outline  className=" col-8 col-md-4 mx-auto mt-3" 
                onClick={() => addedLimit()}>Voir plus 
            </MDBBtn>
            </div>
        <hr></hr>
        {/* section features */}
        <FeaturesPage/>

      </MDBContainer>
    </Layout>
  )
}



export const getServerSideProps = async ({query})=>{

   let limitsearch =""
    if (query.limit){
        limitsearch = query.limit
    }else{
        limitsearch = 6
        
    }

  //recup tout  les biens LastAdded 
  const {data} =  await api.get(`/api/biens/last-added`)
  const propertyLastAdded = data
  // console.log(propertyLastAdded)
  //recup catalogue property 
  const dataCatalogue = await api.get(`/api/biens/tous-biens?limit=${limitsearch}`)
  const propertyCatalogue= dataCatalogue.data

  //recum tout 
  const toutProduit = await api.get(`/api/biens/tous-biens`)
  const produits= toutProduit.data



   return {
     props:{
       propertyLastAdded,
       propertyCatalogue,
       produits
     }
   }
 
 }


