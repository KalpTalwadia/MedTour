import { List, ListItemButton, ListItemText, Rating } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function ServiceDoctorCard({name, city, state, rating, hospitals}) {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="feature-container feature-bx2 feature1">
    <div className="feature-box-xl mb-20">
        <span className="icon-cell">
            <image/>
        </span> 
    </div>
    <div className="icon-content">
        <h3 className="ttr-title">{name}</h3>
        <b>City : </b> {city} <br/>
        <b>State : </b> {state} <br/>
        <Rating name="read-only" value={rating} readOnly />
        <p><i class=" bi-chevron-compact-up" color='red'></i></p>
        <br/>
        <List>
          <ListItemButton>
            <ListItemText primary="Hospital">
               {open ? <i class=" bi-chevron-compact-up" color='red'></i> : <i class=" bi-chevron-compact-down" color='red'></i>}
            </ListItemText>
          </ListItemButton>
        </List>
        <Link to="no where" className="btn btn-primary light"> Know More</Link>
    </div>
    </div>
  )
}

export default ServiceDoctorCard