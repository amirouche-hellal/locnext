
import React from 'react';
import Styles from './index.module.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = (props) => {

    const images = Array()
    images.push(props.images)

    const slidesImage = [];
    images.map(img =>{
        slidesImage.push(<img src={img} alt="" />)
    })
     
    return (
        <Fade scale={0.4} autoplay={false} pauseOnHover={true} canSwipe={true}  >
          {
            images.map((each, index) => <img   key={index}  src={each} className={`img-fluid mySlidesimage 
            ${Styles.img_produits} ` }   />)
          }
        
        </Fade>
    )
}

export default Slideshow



