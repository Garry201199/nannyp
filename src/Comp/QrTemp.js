import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import { useForm } from "react-hook-form";
import GetAppRoundedIcon  from '@mui/icons-material/GetAppRounded';
import Facebook from '@mui/icons-material/Facebook';
import QrCodeSharpIcon from '@mui/icons-material/QrCodeSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import defaultqr from '../Images/Default.png'
import {
    Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Container,
  TextField,
  Typography,
  Stack
} from "@mui/material";
import { blue, green } from "@mui/material/colors";


const QrTemp = () => {
  const [link, setLink] = useState("");
  const [data, setdata] = useState("");
  const { register, handleSubmit } = useForm();


  const onSubmit =(res)=>{ 
      setdata(res.input)

    QRCode.toDataURL(res.input)
    .then((url) => {
      setLink(url);
      console.log(url);
    })
 }

  return (
    <div>
      <Container> 
          <Typography variant='h4' color='whitesmoke' > Garry QR Generator <br/>
      </Typography> 
          
     
        <Card sx={{ maxWidth: 500, marginTop: 10   , alignItems:'center', justifyContent:'center' }}>
          <CardActionArea>
          <CardContent>
              
           <form onSubmit={handleSubmit(onSubmit)}>
          <TextField id="outlined-basic" {...register("input")} label="Enter your website or text" 
          variant="outlined" />
           <Button  type='submit'  > <strong>Get</strong>
        <Avatar sx={{background: '#CCFBFE' ,width: 45, height: 45  }}  >
          <QrCodeSharpIcon color="primary"  />
      </Avatar>
          </Button>
        </form>   
          </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 350, marginTop: 7 , alignItems:'center', justifyContent:'center' 
          }}>
            <CardActionArea>
          <CardContent>
              <Typography>{(data.length !=0 )?`QR with your data is available now ...
              DownLoad and Scan it using Google Lense ` : `This is Default QR code..`}</Typography>
            <Box sx={{justifyContent:'center' ,display: 'flex', alignItems:'center', color:'red' }}>
              
              <img src={link || defaultqr } alt="qrcode"></img>
               </Box>
              
               <Card sx={{maxWidth:350}}>
                   <CardContent>
           <Typography variant="p" >
           Your text / Website is-'{data && <mark>{data}</mark>}.......'
          </Typography>    
                   </CardContent>  
               </Card>
          </CardContent>
          <CardActions>

          <Stack direction="row" spacing={2}>

    <Avatar disabled sx={{ bgcolor: blue[500] }}>
   
    <a href={link.length!=0 ? link : ''}  download="MyQrCode" ><GetAppRoundedIcon  sx={{ color: 'white'}}  /> </a>
        
      </Avatar>
      <Avatar  sx={{ bgcolor: '#4267B2' }}>
      <a href='https://www.facebook.com/' style={{ color:"inherit"}}> <Facebook/></a>

      
      </Avatar>
      <Avatar sx={{ bgcolor: green[500] }}>
      <a href='https://web.whatsapp.com/' style={{ color:"inherit"}}>       <WhatsAppIcon/> </a>

 
      </Avatar>
      <Avatar sx={{ bgcolor:'#2AABEE' }}>
          <a href='https://web.telegram.org/' style={{ color:"inherit"}}> <TelegramIcon/></a>
       
      </Avatar>
      <Avatar  sx={{background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%) ' }}>
      <a href='https://www.instagram.com/' style={{ color:"inherit"}}> <InstagramIcon/></a>

      
      </Avatar>
    </Stack>
          
        
      </CardActions>
      </CardActionArea>
        </Card>
      </Container>
    </div>
  );
};

export default QrTemp;
