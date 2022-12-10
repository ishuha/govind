import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import Crypto from '../Dropdowns/Crypto';
import "./styles.css";

export default function Swapper() {

  const [from, setFrom] = useState({qty:"",value:""})
  const [to, setTo] = useState({qty:"",value:""})
  const [swap, setSwap] = useState(true)

  function copy(e) {
    e?.target?.innerText && navigator.clipboard.writeText(e?.target?.innerText)
  }

  return (<Typography component="section" className='swapper-wrapper' flexDirection={swap?"column":"column-reverse"} >
      <div className='input-field-wrapper' >
        <input name="from" value={from?.qty} placeholder="0" type="number" onChange={(e)=>setFrom({...from, qty: e?.target?.value})} className='input-field' />
        <Crypto list={["ETH","BT","DC","INR"]} image="https://picsum.photos/15" style={{background:"rgb(234, 235, 240)"}} >
          <Typography variant='h6' >
            ETH
          </Typography>
        </Crypto>
        <span className='pointer' title='Click to copy' onClick={copy}> {from?.value} </span>
      </div> 
      
      <div className='input-field-wrapper' >
        <input name="to" defaultValue={to?.qty} placeholder="0" type="number" onChange={(e)=>setTo({...to, qty: e?.target?.value})} className='input-field' />
        <Crypto list={["tok1","tok2","tok3"]} style={{background:"rgb(251, 17, 142)"}} iconStyle={{color:"white"}} >
          <Typography variant='h6' color="white" marginLeft="5px" whiteSpace="nowrap" >
            SELECT TOKEN
          </Typography>
        </Crypto>
        <span className='pointer' title='Click to copy' onClick={copy}> {to?.value} </span>
      </div>
      <ArrowDownwardRoundedIcon id="swap-icon" className='pointer' onClick={()=>setSwap(!swap)} />
    </Typography >
  )
}
