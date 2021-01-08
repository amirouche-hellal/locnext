import React from 'react'
import {Tabs ,Tab  } from 'react-bootstrap'

function TabProduit(props) {
    const propriete = props.propriete
       
    const MonProduitTab =  propriete.map(el=>{
        return [

            <Tabs defaultActiveKey="description" key={el.id_bien}>
                <Tab eventKey="description" title="Description">
                    <h2>{el.titre} </h2>
                    {el.description}
                </Tab>
                <Tab eventKey="adress" title="adresse">
                   <h2>Adresse : </h2> 
                   {el.addresse}
                </Tab>
                <Tab eventKey="Maps" title="Maps" >
                    eee
                </Tab>
            </Tabs>
        ]
    })
 
    
    // console.log(propriete)
    return (
        <div className="container" style={{minHeight:"150px"}}>
            {MonProduitTab}
        </div>
    )
}

export default TabProduit
