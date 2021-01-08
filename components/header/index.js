import React, { useState,useEffect } from "react";
import Styles from './index.module.css'

import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavbarToggler,
    MDBCollapse,
    MDBFormInline,
    MDBContainer,
  } from 'mdbreact';
import Link from "next/link"

//import useAuth pour jouer sur les liens nav lors de la connexion
import useAuth from "../../auth/context";
import { Fragment } from "react";

export const Header =()=>{

    const [state, setState] = useState({
        collapsed: false
      })

    const { collapsed } = state;
    const {isAuthenticated , user , logout} = useAuth() //j'appel la variable isAuthenticated qui se trouve dans context 
    // const navStyle = { marginTop: '4rem' };

    const handleTogglerClick = () => {
        const { collapsed } = state;
        setState({
          collapsed: !collapsed
        });
      };

      useEffect(() => {

        document.querySelector('nav').style.height = '65px';

      }, [])

      useEffect(() => {

        document.querySelector('nav').style.height = 'auto';

      }, [])
     
      const overlay = (
        <div
          id='sidenav-overlay'
          style={{ backgroundColor: 'transparent' }}
          onClick={()=>handleTogglerClick()}
        />
      );
    return(
        <Fragment>
            <MDBNavbar
                color='white'
                light
                expand='md'
                fixed='top'
                scrolling
                transparent
                >
                <MDBContainer>
                <MDBNavbarBrand>
                    <strong>MDB</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={()=>handleTogglerClick()} />
                <MDBCollapse isOpen={collapsed} navbar>
                    <MDBNavbarNav left>
                    <MDBNavItem >
                    <Link href="/"  passHref >
                        <a className="nav-link waves-effect waves-light">Home</a> 
                    </Link>
                    </MDBNavItem>
                    <MDBNavItem>
                    <Link href="/appartements/liste" passHref >
                        <a className="nav-link waves-effect waves-light">Locations</a>
                    </Link>
                    </MDBNavItem>
                    {//si l'utilisateur n'est pasconnecté
                        !isAuthenticated &&(       
                        <MDBNavItem>
                            <Link Link href="/login" passHref >
                                <a className="nav-link waves-effect waves-light">Login</a>
                            </Link>
                        </MDBNavItem>
                        )
                    }
                    {//si l'utilisateur n'est pasconnecté
                        isAuthenticated &&(       
                            <MDBNavItem>
                                <span onClick={logout} className="nav-link waves-effect waves-light" >
                                    Deconnexion
                                </span>
                            </MDBNavItem>
                            )
                    }
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBFormInline waves>
                        <div className='md-form my-0'>
                            <input
                            className='form-control mr-sm-2'
                            type='text'
                            placeholder='Search'
                            aria-label='Search'
                            />
                        </div>
                        </MDBFormInline>
                    </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
                </MDBContainer>
                </MDBNavbar>
                {collapsed && overlay}

        </Fragment>

                
    )
}

