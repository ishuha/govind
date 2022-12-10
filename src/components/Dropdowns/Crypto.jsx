import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { Avatar, Popover } from '@mui/material';
import React from 'react';
import "./style.css";

export default function Crypto(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick =(event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose =() => {
      setAnchorEl(null)
    };
  return (
    <>
      <Popover open={!!anchorEl} id={props.id} anchorEl={anchorEl} onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }} >
        <ul onClick={handleClose} className='dropdown-values pointer' >
          {props.list?.map(item => <li>{item}</li>) || <li>No Data Found</li> }
        </ul>
      </Popover>
    <div className='dropdown-button pointer' style={{background:props.background, ...props.style}} onClick={handleClick}>
      {props.image && <Avatar style={{height:"22px", width:"22px",marginRight:props.children?"5px":undefined}} src={props.image} alt="crypto img" />}
      {props.children || ""}
      <KeyboardArrowDownSharpIcon style={{marginLeft:"5px",...props.iconStyle}} />
    </div>
    </>
  )
}
