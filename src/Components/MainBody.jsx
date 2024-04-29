import React from 'react'
import StorageIcon from '@mui/icons-material/Storage'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import { IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import demo from '/images/demo.png'
import '../Styles/MainBody.css'

function MainBody() {
  return (
    <div className='mainbody'>
      <div className='mainbody_top'>
        <div className='mainbody_top_left' style={{fontSize:"16px", fontWeight:"500"}}>
          Recent forms
        </div>
        <div className='mainbody_top_right'>
          <div className='mainbody_top_center' style={{fontSize:"14px", marginRight: "125px"}}>
            Owned By Anyone 
            <ArrowDropDownIcon/>
          </div>
          <IconButton>
            <StorageIcon style={{fontSize:"16px", color:"black"}} />
          </IconButton>
          <IconButton>
            <FolderOpenIcon style={{fontSize:"16px", color:"black"}} />
          </IconButton>
        </div>

      </div>
      <div className='mainbody_docs'>
        <div className='doc_card'>
          <img src={demo} alt="demo Doc" className='doc_image' />
          <div className='doc_card_content'>
            <h5></h5>
            <div className='doc_content' style={{fontSize:"12px" , color:"gray"}}>
              <div className='content_left'>
                <StorageIcon style={{color:"white" , fontSize:"12px", backgroundColor:"#6E2594" , 
                padding:"3px" , marginRight:"3px" , borderRadius:"2px"}} />Form Name
              </div>
              <MoreVertIcon style={{fontSize:"12px" , color:"gray"}}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MainBody