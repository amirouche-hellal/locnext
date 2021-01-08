// import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// ngprogresspour le chargement des pages avec l'effet de la ligne en haut. 
import Router  from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
//pour le chargement des pages avec l'effet de la ligne en haut. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
//gestion des urls inconnues 
import {RouterUnknown} from '@/components/routeError'
import { AuthProvider} from '../auth/context'



function MyApp({ Component, pageProps }) {
   //redirect all url avec des chemins inconnu
    // RouterUnknown()

    
    return(

        <AuthProvider>
       
          <Component {...pageProps} />
   
        </AuthProvider>
        
    )
}

export default MyApp
