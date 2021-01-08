import { useState ,useEffect} from "react";
import { MDBIcon } from "mdbreact";
import api from "../../auth/axios";
import { useRouter } from "next/router";






 export const SearchFilter =  () => {

const [listaCategories, setListaCategories] = useState([])

const router = useRouter();

 const getCategories = async () =>{

  const url = "/api/biens/categories"

  const res = await api.get(url)
  const data = res.data
  setListaCategories(data)

 }
 getCategories()


  const categorieList = (listaCategories) => {
    return (
      listaCategories &&
      listaCategories.map((option) => (
        <option name={option.id_categorie} key={option.categorie} value={option.categorie}>
          {option.categorie}
        </option>
      ))
    );
  };

  const [values, setValues] = useState({
    titre: "",
    categorie: "",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(values.titre && !values.categorie){
      router.push(
        `/appartements/search?titre=${values.titre}`
      );

    }else if ( !values.titre && values.categorie ){
      router.push(
        `/appartements/search?categorie=${values.categorie}`
      );
    }else if(values.titre && values.categorie){

      if(values.categorie == "tous" && values.titre){
        router.push(
          `/appartements/search?titre=${values.titre}`
        );

      }else{

        router.push(
          `/appartements/search?titre=${values.titre}&categorie=${values.categorie}`
        );

      }
     
    }
    
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-6 firstCol">
            <div className="input-group-sm mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text customColor">
                  <MDBIcon icon="list-ul" />
                </span>
                <select
                  name="categorie"
                  onChange={handleChange("categorie")}
                  value={values.categorie}
                  className="form-control form-field"
                >
                  <option value="tous">Categorie</option>
                  {listaCategories && categorieList(listaCategories)}
                </select>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-7 col-6 secondCol">
            <div className="input-group-sm mb-3">
              <div className="input-group-prepend">
                <input
                  name="titre"
                  onChange={handleChange("titre")}
                  placeholder="Recherche"
                  className="form-control form-field"
                />
                <span className="input-group-text customColor">
                  <MDBIcon icon="search" onClick={onSubmit} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <style jsx>
        {`
          .firstCol {
            padding-right: 1px;
          }
          .secondCol {
            padding-left: 1px;
          }
          .container {
            margin-top: 40px;
          }
          .form-field {
            background-color: #f5f5f5;
          }
          @media screen and (min-width: 768px) {
            .container {
              width: 65%;
              margin-top: 65px;
            }
            .customColor {
              background-color: white;
            }
          }
        `}
      </style>
    </div>
  );
};
