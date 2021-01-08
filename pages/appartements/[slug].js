import React from 'react'
import api from '../../auth/axios'
import Layout from '../../components/layout'
import CarouselProduit from '../../components/produitCarousel'
import TabsProduit from '../../components/tabsProduit'
import ProduitSimilaire from '../../components/produitSimilaires'

function Propriete ({propriete  }) {

    return (
        <Layout>
            <div className="col-xl-11 row mx-auto " style={{marginTop:"100px"}}>
              
                <div className="col-md-9 row ">
                    <CarouselProduit propriete={propriete}/>
                    <div><h1 className="text-center py-3 font-weight-bold">{propriete.titre}</h1></div>
                    <hr></hr>
                    <TabsProduit propriete={propriete} />
                </div>
                <div className="col-md-3 row px-0 ml-1">
                  {/* {produitSimilaire.length !=0 && (
                    <ProduitSimilaire produitSimilaire={produitSimilaire}/>
                   ) 
                  }
                  {produitSimilaire.length == 0 && (
                    <div className="d-flex justify-content-center align-items-center  bg-danger col-12 text-white mt-2 ml-2" style={{height:"250px"}}>
                      Dommage on a que ce produit 
                      C'est le dernier 
                    </div>
                   ) 
                  } */}
                </div> 

                
            </div>
        </Layout>
    )
}
//getStaticPath
//le but de guet staticpahs est de definir les composantes de params qui se trouve dans context ( sinon on ne peut pas lire les params directement) 
  export const getStaticPaths = async () => {
    //recum tout 
    const toutProduit = await api.get(`/api/biens/tous-biens`)
    const properties= toutProduit.data
    const paths = properties.map((property) => ({
      params: { slug: property.slug.toString() }
    }));

   
    return   { 
      paths ,
      fallback: false
      } ;    //si je mets à true ça marche en dev mais ne build pas et si j'ai mets en false ça build mais il y a des soucis d'affichage

  };


//getStaticProps

  export const getStaticProps = async ({ params }) => {
    const slug  = params.slug;

    const { data} = await api.get(`/api/biens/bien-seule?slug=${slug}`);
    //recup produits similaires
    const propriete = data
    console.log(data)
    // //  il selectionne les produits de la meme categorie du produit selectionné ( select produits in table where category = la meme category de ce produit selectioné  )
    //  const { data : produitSimilaire}  = await api.get(`/api/biens/similar-product?id_categorie=${propriete[0].id_categorie}&id_bien=${propriete[0].id_bien}`);
  
    return {
      props: {
        propriete,
        // produitSimilaire
      }
    };
  };

export default Propriete

