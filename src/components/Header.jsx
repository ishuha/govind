import { Avatar, Typography } from '@mui/material'
import React from 'react'
import Crypto from "./Dropdowns/Crypto"

export default function Header() {
  return (
    <Typography component="header" display="flex"  alignItems="center" padding="10px" justifyContent="space-between" >
      <div style={{display:"flex"}} >
      <Avatar variant='circular' src="https://picsum.photos/30" height={30} width={30} alt="icon" style={{marginRight:"12px"}} />
      <Crypto image="https://picsum.photos/20" list={["a","b","c"]} />
      </div>
      <Crypto style={{background:"rgba(251, 17, 142, 0.24)"}} list={["option 1","option 2","option 3"]} iconStyle={{color:"rgb(251, 17, 142)"}} >
        <Typography className='vertical-line' color="rgb(251, 17, 142)" marginLeft="5px" fontSize="17px" fontWeight="600">
          Connect
        </Typography>

      </Crypto>
    </Typography>
  )
}
