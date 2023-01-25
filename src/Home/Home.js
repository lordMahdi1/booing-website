import '../App.css';
import React from 'react';
import Puce from '../Puces/Puce';
import Icon from '../Icons/Icon';
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ResponsiveAppBar from '../ResponsiveAppBar/ResponsiveAppBar';
import './Home.css';

const Home = () => {
    return ( 
        <div className='App'>
    <Container fixed style={{backgroundColor: "#040114", height:"100%", position : "relative"}}>
    <ResponsiveAppBar/>   
    <Stack direction="row" spacing={2} alignItems="baseline" justifyContent="right"> 
    <p style={{color: '#FFFFFF' }}>Boing.cloud</p>   
    <p style={{color: '#FFFFFF'}}>Chi siamo</p>     
    <FaApple style={{color: '#FFFFFF'}}/>
    <FaGooglePlay style={{color: '#FFFFFF'}}/>
    </Stack>

    <h1 style={{color: '#FFFFFF', fontSize: '70px', marginTop: '10%'}}>Booing</h1>
    
    <div className='descriptionContainer'>
        <Stack direction="column" spacing={0} alignItems="flex-start" style={{ fontSize: '20px',    textAlign: 'justify' }} justifyContent="center">
            <Puce name={'Join 50m+ users buying and selling 250+ cryptocurrencies at true cost'} />
            <Puce name={'Spend with Crypto.com Visa Card and get up to 5% back'} />
            <Puce name={'Grow your portefolio by receiving rewards up to 14.5% on your crypto assets'} />
        </Stack>
    </div>
    <div className='footerContainer'>

    <Stack direction="row" spacing={10} alignItems="center" justifyContent="center" left="25%" bottom="5%" position ="absolute" fontSize= '20px'>    
    <Icon name1={'Download on the Apple Store'} icon={FaApple}/>
    <Icon name1={'GET IT ON Google Play'} icon={FaGooglePlay}/>
    </Stack>
    </div>
    </Container>
</div>
    );
}
 
export default Home;