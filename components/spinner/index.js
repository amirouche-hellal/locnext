import React from "react";
import Styles from './index.module.css'
import Loader from 'react-loader-spinner'

 const SpinnerLoad = ()=> {

     return(
       <div className="col-12 mx-auto d-flex justify-content-center " style={{height:"500px"}}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
    
          />
      </div>
     );
    
 }
 export default SpinnerLoad