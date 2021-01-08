import React ,{useEffect} from 'react'
import Router , { useRouter } from 'next/router'
 
//le but de ce component est de rediriger tout les urls qui sont pas bonnes
export function RouterUnknown () {

      const router = useRouter();

     
      const gestionUrl = async ()=>{
        
        if( router.asPath == "/_error" || router.route == "/_error" ){
            router.path = "/"
           
             await Router.push('/')
         }
      
        //  console.log(router)
         
    }
    useEffect(() => {
        gestionUrl()

      }, [router.asPath])

   
   
}



