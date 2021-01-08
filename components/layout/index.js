import React from 'react'
import Footer from '../footer'
// importer mon head.js
 import Head from '../head'
import{Header} from"../header"
//ce component est le hero image avec le filtre , je l'affiche seulement si la page est home ( je le mets ici car mon header descent si je le mets direct dans home page)
import { Intro } from "../../components/Intro";


function Layout({children , namePage }) {
    return (
        <>
             <Head namePage={namePage}/>
             {namePage == "home" &&(
                <div className="fluid-container">
                < Intro />
                </div>
             )
            }
             <div className="mb-5">
             <Header/>
             </div>

             {children }

            <Footer/>
            
        </>
    )
}

export default Layout
