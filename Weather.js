import React, { useState } from "react";
import axios from "axios";
import CloudQueueTwoToneIcon from "@mui/icons-material/CloudQueueTwoTone";
import {  Button, Card, CardContent, CardMedia, Container,TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import clearsky from '../Images/clear sky.jpg'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const Weather = () => {
  const classes = useStyles();
    const [city , setCity] = useState('')
    const [cityData , setcityData] = useState([])
    const Search=()=>{
        console.log(city);
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=d37cfa99c9b58525b43dc597c65fd537`)
        .then((data) => {setcityData(data.data)
        console.log(cityData)})
    }
    
  return (
    <Container fixed sx={{ alignContent: "center", justifyContent: "center" , marginBlock:'100px',
      backgroundImage: ( typeof cityData.main != 'undefined') ? ((cityData.weather[0].main=='clear sky') ? `${clearsky}` : ''):''
    
    }}>
      <Button className={classes.root}>Hook</Button>
      
      <TextField label="Search here..." value={city|| ''} onChange={(e)=>{setCity(e.target.value)}} variant="standard"></TextField>
      <Button size="large" color="primary" onClick={Search}>
        <CloudQueueTwoToneIcon fontSize="large" />{" "}
      </Button>

      <Card sx={{ maxWidth: 500 }}>
      {( typeof cityData.main != 'undefined')  ? (       
<CardContent sx={{backgroundImage : clearsky}}> 
        <Box >
        <CardMedia
        component="img"
        height="140"
        // image={cityData.weather[0].description=='clear sky' ? clearsky : ''}
        alt="green iguana"
      />
        <Typography gutterBottom variant="h3" component="div">
                {Math.round(cityData.main.temp ) || 'city Temp....'}°C 
              </Typography>
                <Typography gutterBottom variant="h4" component="div">
                {cityData.name || 'city....'} {cityData.sys.country || 'country...'}
              </Typography>
              <Typography variant="h2" color="primary">
               {cityData.weather[0].main} 
               <img src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`} />
              </Typography></Box></CardContent>
                )
                :('')
                } 
    </Card>
    </Container>
  );
};

export default Weather;
