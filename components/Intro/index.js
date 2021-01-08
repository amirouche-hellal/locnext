import React from 'react';
import './index.module.css';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon
} from 'mdbreact';
import { Fragment } from 'react';
import {SearchFilter} from '../searchFilter'


export const  Intro =({listeCategories})=> {
  return (
    <Fragment >
        <MDBView src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
            <MDBMask className='rgba-purple-slight ' />
            <MDBContainer
              style={{ height: '100%', width: '100%', paddingTop: '14rem' }}
              className='d-flex justify-content-center align-items-center'
            >
              <MDBRow>
                <MDBCol md='12' className='mb-4 text-center'>
                  <h1 className='display-4 font-weight-bold mb-0 pt-md-5 pt-5'>
                    Appartement , studio ou maison 
                  </h1>
                  <h5 className='pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5'>
                    Cherchez et trouver un appartement près de chez vous 
                  </h5>
                  {/* le filtre et search  */}
                   <SearchFilter />
                </MDBCol> 
              </MDBRow>
            </MDBContainer>
          </MDBView>
    </Fragment>
  )
}

{'>'}