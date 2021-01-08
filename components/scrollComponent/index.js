import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Product from '../product'


const ScrollComponent=({listelScroll  , addLimit , limit , toutLesBiens})=> {

    const affichListelScroll = listelScroll
    const listeScrollLength = listelScroll.length
    const addLimitFunction = addLimit
    const allProduit = toutLesBiens
    const limitAffiche = limit
    
     
        return (
    
            <InfiniteScroll
            dataLength={listeScrollLength} //This is important field to render the next data
            next={()=>addLimitFunction()}
            hasMore={true}
            loader={ 
                ( Number(limitAffiche) < Number(allProduit.length || Number(limitAffiche) === Number(allProduit.length ))

                    ?
                    <h4 className="text-center text-success">chargement...</h4> 
                    :
                    <h4 className="text-center text-success">fin</h4>
                )
                }  
            >
             <Product products={affichListelScroll}  className="col-12 "/>
          
          </InfiniteScroll>
        )
    }

export default ScrollComponent
