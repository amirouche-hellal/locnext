import React ,{Fragment} from "react";
import Styles from './index.module.css'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import {FormatPrice} from '../formatPrice'

const CarouselProduit = (props) => {

const propriete = props.propriete
const imageListe= props.propriete[0].image //il faut le changer si on a plusieurs images 

const proprieteImage = []
proprieteImage.push(imageListe)

// console.log(proprieteImage)

// console.log(proprieteImage)
  return (
    <MDBView className="container-fluid px-0 mt-1 col-12" >
      <MDBCarousel
      activeItem={1}
      length={proprieteImage.length}
      showControls={true}
      showIndicators={true}
      className={`z-depth-1  ${Styles.carouselMain} `}
    >
    
      <MDBCarouselInner>
        { 
            proprieteImage && proprieteImage.map( (image , index ) =>(
                
                   <MDBCarouselItem itemId={index+1} key={index+1} >
                       
                            
                                <img
                                    className={`d-block h-100 w-100 ` + Styles.carouselItems}
                                    src={image}
                                    alt={propriete.titre}
                                />

                          <MDBCarouselCaption className=" mb-1 font-weight-bold bg-success" >
                              <h3 className="h3-responsive">{ propriete[0].titre }</h3>
                              <p>{ FormatPrice(propriete[0].prix)}</p>
                          </MDBCarouselCaption>
                          
                         
                        
                    </MDBCarouselItem> 
             ))
        }
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBView>
  );
}

export default CarouselProduit;