import React, { Fragment } from 'react'
import Styles from './index.module.css'
import {FormatPrice} from '../formatPrice'
import Link from 'next/link';


export default function PropertyCatalog({produitSimilaire}) {
   
 
   const dataSimilaire = produitSimilaire.map(produit=>(

     
       <Fragment>
            <Link href={`[slug]`} as={`${produit.slug}`} passHref>

                <div className="col-12 px-0">
                    <h6 className={Styles.category}>{produit.categorie}</h6>
                    <img  className={ `img-fluid ${Styles.imageProduitSimilaire}` } src={produit.image} alt="ggg"/>
                    <div className={`d-flex ${Styles.prixEtTitre}`}>
                        <span >{produit.titre}</span>
                        <span >{FormatPrice(produit.prix)}</span>
                    </div>
                </div>
            </Link>

       </Fragment>
   ))
   
    return (
        <Fragment>
           <div className="col-12 ">
                    <h3 className="text-center"> Bien similaires</h3>
                     {dataSimilaire}
            </div>  
        </Fragment>
    )
}