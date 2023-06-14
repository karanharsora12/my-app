import React from 'react'
import styled from 'styled-components'
import Section from './Section'

export default function Home() {
  return (
    <Container>
        <Section
            title='Model S'
            discription='Order Online For Touchless Delivery'
            backgroundImg='model-s.jpg'
            leftBtnText='Custom Order'
            rightBtnText ='Existing inventory'
        />      
        <Section
            title='Model Y'
            discription='Order Online For Touchless Delivery'
            backgroundImg='model-y.jpg'
            leftBtnText='Custom Order'
            rightBtnText ='Existing inventory'  
        />      
        <Section
            title='Model 3'
            discription='Order Online For Touchless Delivery'
            backgroundImg='model-3.jpg'
            leftBtnText='Custom Order'
            rightBtnText ='Existing inventory'   
        />      
        <Section
            title='Model X'
            discription='Order Online For Touchless Delivery'
            backgroundImg='model-x.jpg'
            leftBtnText='Custom Order'
            rightBtnText ='Existing inventory'     
        />  
        <Section
            title='Lowest Cost Solar Panels in America'
            discription='Money-back guarantee'
            backgroundImg='solar-panel.jpg'
            leftBtnText='Order now'
            rightBtnText ='Learn more'     
        />
        <Section
            title='Solar For New Roofs'
            discription='Solar roof cost less than a new roof plus solar panels'
            backgroundImg='solar-roof.jpg'
            leftBtnText='Order now'
            rightBtnText ='Learn more'     
        /> 
         <Section
            title='Accessories'
            discription=''
            backgroundImg='accessories.jpg'
            leftBtnText='Shop now'    
        />   
    </Container>
  )
}

const Container = styled.div`
    height : 100vh ;
`