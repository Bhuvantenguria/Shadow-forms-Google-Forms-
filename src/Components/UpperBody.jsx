import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButton } from '@mui/material'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import '../Styles/UpperBody.css'
import blank from '/images/blankTemplate.png'
import contact from '/images/contactTemplate.png'
import event from '/images/eventTemplate.png'
import uuid from "react-uuid"
import { useNavigate } from 'react-router-dom';


function UpperBody() {
  const navigate = useNavigate();
  const createForm = () =>{
    const id_ = uuid()
    navigate("/form/"+id_);
  }
  return (
    <div className='upperBody_section'>
        <div className='upperBody_top'>
            <div className='upperBody_left'>
                <span style={{fontSize:"16px" , color:"#202124" }}>Start New form</span>
            </div>
            <div className='upperBody_right'>
              <div className='gallery_button'>
                Template gallery
                <UnfoldMoreIcon/>
              </div>
              <IconButton>
                <MoreVertIcon/>
              </IconButton>

            </div>
        </div>
        <div className='uperBody_main'>
          <div className='card' onClick={createForm}>
            <img src={blank} alt="Add New" className='card-img' />
            <p className='card-title'>Blank</p>
          </div>
          <div className='card'>
            <img src={contact} alt="Add New" className='card-img'/>
            <p className='card-title'>Contact Information</p>
          </div>
          <div className='card'>
            <img src={event} alt="Add New" className='card-img' />
            <p className='card-title'>Event Registration</p>
          </div>
        </div>

    </div>
  )
}

export default UpperBody