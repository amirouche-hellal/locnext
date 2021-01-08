import React ,{useState} from "react";
import Layout from "../components/layout/";
//import useAuth 
import useAuth from "../auth/context";

function Login() {

    const [value, setvalue] = useState({
                                        username:"",
                                        password:""
                                    })

//pour l'authentification

const {login ,isAuthenticated} = useAuth() //j'ai mis login entre {} car c'est une fonction qui se trouve dans le fichier context (elle est exporter dans useAuth )

//en tapant sur les input 
const handlChange = (event)=>{

         
    setvalue(  { ...value ,[event.target.name]: event.target.value })

}
//en submit login 
const onSubmit = (event)=>{
  event.preventDefault()
 //je vais loguer mobn utilisateur
 login(value.username,value.password)
}


  

  return (
    <Layout namePage="login">
        <div className="container px-0 row mx-auto">
            <form className=" row col-md-6 col-11 mx-auto mt-5 p-5" style={{background:"#ebda873d", borderRadius:"12px"}}>
                <div className="form-group col-12">
                    <label htmlFor="username">Adresse username</label>
                    <input
                        
                        className="form-control"
                        id="username"
                        aria-describedby="usernameHelp"
                        onChange={handlChange}
                        name="username"
                    />
                    <small id="usernameHelp" className="form-text text-muted">
                        vous pouvez display ereur ici 
                    </small>
                </div>
                <div className="form-group col-12">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={handlChange}
                        name="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary col-8 mx-auto" onClick={onSubmit}>
                Login
                </button>
            </form>
      </div>
    </Layout>
  );
}

export default Login;
