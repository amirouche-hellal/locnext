import React, { Fragment } from 'react'
import Styles from './index.module.css'
import {MDBCard , MDBCardBody, MDBCardText,MDBCardTitle ,MDBCol,MDBView,MDBRow ,MDBBtn} from "mdbreact";
import {FormatPrice} from '../formatPrice'
import Link from 'next/link';



export default function PropertyCatalog(props) {

    
   const properties = props.properties.data

    return (
        <Fragment>
           
            <h2 className={`h2-responsive font-weight-bold text-center my-4 ${Styles.globaleColor}`}   > Notre catalogue</h2>
            <MDBCard className="z-depth-1-half">
                <MDBRow className={`text-white ${Styles.cardBlock}`} >
                    {
                        properties && properties.map(property=>(
                            <MDBCol md="4" lg="4"  className="my-2 " key={property.id_bien}>
                                <Link href="/appartements/[slug]" as={`/appartements/${property.slug}`} passHref>
                                    <MDBView zoom>
                                        <img src={property.pictures[0]} alt={property.title} className={`${Styles.img_produits} ${Styles.pointer}` }/>
                                    </MDBView>
                                </Link>
                                <MDBCardBody className="bg-white text-dark">
                                    <MDBCardTitle style={{fontSize: "1.2em"}}>
                                        {property.title}
                                    </MDBCardTitle>
                                    <div className="d-flex justify-content-between pt-3">
                                        <MDBCardText>
                                            <strong className="text-dark">{FormatPrice(property.price)}</strong>
                                        </MDBCardText>
                                        <Link href={`/appartements/[slug]`} as={`/appartements/${property.slug}`}  passHref>
                                            <MDBCardText className={Styles.pointer}>
                                                <strong>Voir Détails</strong>
                                            </MDBCardText>
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



 
