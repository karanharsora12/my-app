import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
        <a href="">
            <img src="/images/logo.svg" alt="" />      
        </a>
        <Menu>
              <a href="">Model S</a>  
              <a href="">Model 3</a>  
              <a href="">Model X</a>  
              <a href="">Model Y</a>  
              <a href="">Solar roofs</a>  
              <a href="">Solar panels</a>  
        </Menu>
        <RightMenu>
            <a href="">Shop</a>
              <a href="">Tesla Account</a>
              <CustomMenu onClick={() => {
                  setBurgerStatus(true)
              }} />
        </RightMenu> 
        <BurgerNav show={burgerStatus}>
              <CloseWrapper>  
                <CustomClose onClick={() => {
                     setBurgerStatus(false) 
                }}/>
              </CloseWrapper>
            <li><a href="">Model S</a></li>  
            <li> <a href="">Model 3</a></li>  
            <li><a href="">Model X</a></li>  
            <li><a href="">Model Y</a></li>  
            <li><a href="">Solar roofs</a></li>  
            <li><a href="">Solar panels</a></li> 
            <li><a href="">Existing Inventory</a></li>
            <li><a href="">Used Inventory</a></li>
            <li><a href="">Trade-In</a></li>
            <li><a href="">Demo Drive</a></li>
            <li><a href="">Insurance</a></li>
            <li><a href="">Powerwall</a></li>
            <li><a href="">Commercial Energy</a></li>
            <li><a href="">Charging</a></li>
            <li><a href="">Find Us</a></li>
            <li><a href="">Support</a></li>
            <li><a href="">Investor Relations</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Account</a></li>
        </BurgerNav>
    </Container>
  )
}

const Container = styled.div`

    min-height : 60px ;
    position : fixed ;
    display : flex ;
    align-items : center ;
    justify-content : space-between ;
    padding : 0 20px ;
    top : 0 ;
    left : 0 ;
    right : 0 ;
    z-index : 1 ;

`
const Menu = styled.div`

    display : flex ;
    align-items : center ;
    justify-content : center ;
    flex : 1 ;

    a {
        font-weight : 600 ;
        text-transform : uppercase ;
        padding : 0 10px ;
        flex-wrap : no-wrap ;
    }
    @media only screen and (max-width: 768px) {
        display : none ;
    }

`
const RightMenu = styled.div`

    display : flex ;
    align-items : center ;
    a {
        font-weight : 600 ;
        text-transform : uppercase ;
        margin-right : 10px ;
    }
    @media only screen and (max-width: 768px) {
        a {
            display : none ;
        }
    }

`
const CustomMenu = styled(MenuIcon)`

    display : flex ;
    cursor : pointer ;

`
const BurgerNav = styled.div`

    position : fixed ;
    top : 0;
    bottom : 0 ;
    right : 0 ;
    background : white ;
    width : 300px ;
    z-index : 16;
    list-style : none ;
    padding : 20px ;  
    display : flex ;
    flex-direction : column ;
    text-align : start ;
    transform : ${props => props.show ? 'translateX(0)' : 'translate(100%)'} ;
    transition : transform 0.2s ease-in-out ;
    overflow-y: scroll ;
    li{
        padding : 15px 0 ;
        border-bottom : 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight : 600 ;
        }
    }

`
const CustomClose = styled(CloseIcon)`

    cursor : pointer 

`
const CloseWrapper = styled.div`

    display : flex ;
    justify-content : flex-end 

`
