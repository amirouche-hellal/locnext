import React, { Fragment } from 'react'
import Styles from './index.module.css'
import {MDBCard , MDBCardBody, MDBCardText,MDBCardTitle ,MDBCol,MDBView,MDBRow  } from "mdbreact";
import {FormatPrice} from '../formatPrice'
import Link from "next/link";

function propertyLastAdd({properties }) {
    return (
        <Fragment>
           
            <h2 className={`h2-responsive font-weight-bold text-center my-4 ${Styles.globaleColor}`}   > Biens sponsorisés</h2>
            <MDBCard className="z-depth-1-half">
                <MDBRow className={`text-white ${Styles.cardBlock}`} >
                    {
                        properties && properties.map(property=>(
                            <MDBCol md="4" lg="4"  className="my-2 " key={property.id_bien}>
                                <Link href="/appartements/[slug]" as={`/appartements/${property.slug}`} passHref>
                                    <a>
                                        <MDBView zoom>
                                            <img src={property.image} alt={property.titre} className={`${Styles.img_produits} ${Styles.pointer}` }/>
                                        </MDBView>
                                    </a>
                                </Link>
                                <MDBCardBody className="bg-white text-dark">
                                    <MDBCardTitle style={{fontSize: "1.2em"}}>
                                        {property.titre}
                                    </MDBCardTitle>
                                    <div className="d-flex justify-content-between pt-3">
                                        <MDBCardText>
                                            <strong className="text-dark">{FormatPrice(property.prix)}</strong>
                                        </MDBCardText>
                                        <Link href={`/appartements/[slug]`} as={`/appartements/${property.slug}`} passHref>
                                            <a>
                                                <MDBCardText className={Styles.pointer}>
                                                    <strong>Voir Détails</strong>
                                                </MDBCardText>
                                            </a>
                                        </Link>
                                    </div>
                                </MDBCardBody>

                            </MDBCol>
                        ))
                    }
                </MDBRow>
            </MDBCard> 
           
        </Fragment>
    )
}



export default propertyLastAdd