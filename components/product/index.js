import React ,{ Fragment }   from "react";
import Styles from './index.module.css'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBBtn } from "mdbreact";
import {FormatPrice} from '../formatPrice'
import Link from "next/link";
import SlideImageProduit from './slideImageProduit'



const Produits = ({products}) => {
        // console.log(products)

        return(
            <Fragment>
                { products && products.map( produit =>(
                    
                        <MDBCard className="my-5 px-0" key={produit.id_bien}>
                           
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol lg="5"  >
                                        
                                        {/* liste image produit */}
                                            <SlideImageProduit images={produit.image} />
                                       
                                    </MDBCol>
                                    <MDBCol lg="7">
                                    <a href="#!" className="green-text ">
                                        <h6 className="font-weight-bold my-3">
                                        <MDBIcon icon="utensils" className="pr-2" />
                                         {produit.categorie}
                                        </h6>
                                    </a>
                                    <h3 className="font-weight-bold mb-3 p-0">
                                        <strong> {produit.titre}</strong>
                                    </h3>
                                    <p>
                                    {produit.description.substring(0,250)}
                                    </p>
                                    <MDBRow>
                                        <div className=" col-12 d-flex justify-content-between">
                                            
                                            <p>
                                                <MDBIcon icon="city" className="px-1"/>
                                                  Localisation :
                                                <a href="#!">
                                                <strong className="pl-3">{produit.ville} </strong>
                                                </a>
                                            </p>
                                            <p>
                                            Prix
                                                <a href="#!">
                                                <strong className="pl-3">{FormatPrice(produit.prix)} </strong> 
                                                </a>
                                            </p>
                                        </div>
                                        <Link href="/appartements/[slug]" as={`/appartements/${produit.slug}`} passHref>
                                            <a className={`col-11 col-md-5 waves-light  ${Styles.btnVoir}`}>
                                                <MDBBtn color="success" size="md" >
                                                    Voir les détails
                                                </MDBBtn>
                                            </a>
                                        </Link>
                                    </MDBRow>
                                   
                                   
                                    
                                    </MDBCol>
                                </MDBRow>
                            
                            </MDBCardBody>
                        </MDBCard>
                    
                    ))
                
                }
            </Fragment>
        )
                        
                   
                
    

}

export default Produits;


