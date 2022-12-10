import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import Swapperbox from '../../components/Swapper/Index';


export default function Contentbox() {
  return (
    <Paper sx={{padding: "8px", borderRadius: "7px", border:"solid 1px rgb(210, 217, 238)", boxShadow:"none", maxWidth: "500px", margin: "50px auto" }} >
        <Typography component="section" gutterBottom display={"flex"} justifyContent ="space-between">
            <Typography component="label" fontWeight="bold" >Swap</Typography>
            <SettingsOutlinedIcon style={{color: 'grey'}} className="pointer" />
        </Typography>
        <Swapperbox />
        <Button style={{background:"rgba(251, 17, 142, 0.24)", color:"rgb(251, 17, 142)", width:"100%",borderRadius:"9px",fontWeight:"600",fontSize:"18px"}}>Connect Wallet</Button>
    </Paper>
  )
}
