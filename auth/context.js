import React,{useState ,createContext,useContext,useEffect } from 'react'
import Api from './axios'
import Router from 'next/router'
import {setCookie,removeCookie,getCookieFromBrowser} from "./cookies"
import Jwt from  'jwt-decode'

const AuthContext = createContext({})

export const AuthProvider =({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //authentification
    //ici on envoie l'username et le password avec la data qui est le token  
    const login = async( username ,password)=>{
         const {data:token}= await Api.post("/api/login" , {
             username,
             password
         })
         //si ya le token enregistre le au local 
         if(token){
             setCookie("token" ,token)
             //définir l'authorisation globale dans la tête de nos requete ( pour la sécurité des requetes)
             Api.defaults.headers.Authorization = `Bearer ${token}` //il faut laisser espace entre Bearer et ${token} sinon ça bloque l'authorisation
             //récupere la data du token el le décodant car le token contien l'id de l'utilisateur et son role (admin ou pas)
             const userData = Jwt(token);
             //on va faire une requete pour récuperer la data de mon utilisateur en utilisant son id que j'ai décodé juste en haut 
             const {data:user} = await Api.get(`/api/user/${userData._id}`)
             //ici j'ai mon utilisateur récuperer et je vais mettre à jour mon user avec setUser 
             setUser(user)
             //redirige à la page accueil
             await Router.push('/')

         }
    }
    const logout =()=>{
        //supp token
        removeCookie("token")
        //vider user 
        setUser(null)
        //redirection vers la page home ici
        Router.push("/")

    }



    

    //ce code permet de persister la connexion de notre utilisateur : il verifie si on a le token dans cookie du browser 
    useEffect(() => {
        
        async function loadUserFromCookies(){
            const token = getCookieFromBrowser("token")
            //si nous avon le token on va définir l'entete globale pour avoir l'authorisation de faire les requetes
            if(token){
            //meme code dans la fonction login
            Api.defaults.headers.Authorization = `Bearer ${token}` //il faut laisser espace entre Bearer et ${token} sinon ça bloque l'authorisation
             //récupere la data du token el le décodant car le token contien l'id de l'utilisateur et son role (admin ou pas)
             const userData = Jwt(token);
             //on va faire une requete pour récuperer la data de mon utilisateur en utilisant son id que j'ai décodé juste en haut 
             const {data:user} = await Api.get(`/api/user/${userData._id}`)
             //ici j'ai mon utilisateur récuperer et je vais mettre à jour mon user avec setUser 
              if(user) {
                  setUser(user)
              }

            }
            setLoading(false) // pas de chargement de notre truk de chargement data
        }

        loadUserFromCookies() //lancer la fonction

    }, [])
    // fin du code de persistance de connexion




    return(
        //ici j'ai définit mon Authcontext , je lui passer une condition :
        //si authentifié je laisse passer les données utilisateur que je récupere , notre fonction login et logout 
        <AuthContext.Provider value ={{ isAuthenticated : !!user , user , login ,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

//cette fonction va recevoir notre context que nous avont définit en haut ( c'est avec useAuth qu on va utiliser toute ces valeurs )
//on va l'importer dans login par exemple
//cette fonction contient login logout isAuthenticated user
const useAuth=() =>{
  return useContext(AuthContext)
}
export default  useAuth;
