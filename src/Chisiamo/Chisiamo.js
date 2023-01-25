import '../App.css';
import {useState, useEffect} from 'react'
import { BarLoader } from 'react-spinners';
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ResponsiveAppBar from '../ResponsiveAppBar/ResponsiveAppBar';
import Typography from '@mui/material/Typography';
import Album from './Album';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import '../App.css';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Chisiamo = () => {
    const cards=[1, 2, 3]
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

    <h1 style={{color: '#FFFFFF', fontSize: '70px', marginTop: '10%'}}>Chi Siamo</h1>
    <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                   
                  />
                          
                </Card>
                <h1 style={{color: 'white' , marginTop:0 , marginBottom:0}}>nom</h1>
                <h1 style={{color: 'white' , marginTop:0 , marginBottom:0}}>profession</h1>
              </Grid>
            ))}
          </Grid>


    </Container>
    </div>
    );
}
 
export default Chisiamo;