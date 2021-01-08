import Cookie from 'js-cookie'

export const setCookie = (key , value)=>{
    //process.broser = true si je suis coté client et egal false coté serveur
    if(process.browser){ //si process.broser ( ca dire si je suis coté client )
        Cookie.set(key , value , {
            expires:2,//expire dans 2 jours
            path:"/" //le chemin pour le cookies (point entré)
        })
    }

}

export const  removeCookie = ( key)=>{
    if(process.browser){

        Cookie.remove(key)
    }
}

export const getCookieFromBrowser =(key)=>{
    return Cookie.get(key)
}

//si vous utilisez getServerSideProps TU UTILISE CETTE fonction pour pouvoir récuperer les cookies du server
export const getCookieFromServer =(key , req)=>{

   //si nous avons pas de cookie coté client
    if(!req.headers.cookie){
        return undefined
    }
    //sinon si le cookie existe on va l'appeler 
    const rawCookie = req.headers.cookie.split(";")
                       .find(c=>c.trim().startsWith(`${key}`))
    if(rawCookie){
        return undefined
    }
   return rawCookie.split("=")[1] //je retourn rawcookie en enlevant = et récuperer le deuxieme élément [1]
}

