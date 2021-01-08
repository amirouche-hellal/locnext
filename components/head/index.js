import React, { Fragment } from 'react'
import Head  from 'next/head'
//importer la data de head qui est en format json
import headJson from '../../jsonhead/head.json'




const MyHead =({namePage})=> {
  
    const SpecificElHeadPage = headJson.find( element => element.page == namePage);

    // console.log(SpecificElHeadPage)

    
     
    return (
      
        <Fragment>
            <Head>
              
              <title>{ namePage && SpecificElHeadPage ? SpecificElHeadPage.title : namePage}</title>
              
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"/>
              

             


            </Head>
            
        </Fragment>
    )
}


export default  MyHead
