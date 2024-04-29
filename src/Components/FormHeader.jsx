  import React from 'react'
  import formImg from '/images/logo.png'
  import {FiStar , FiSettings} from 'react-icons/fi'
  import {AiOutlineEye} from 'react-icons/ai'
  import { IconButton } from '@mui/material'
  import avatarImg from '/images/avatar.jpeg'
  import {IoMdFolderOpen} from 'react-icons/io'
  import ColorLensIcon from '@mui/icons-material/ColorLens'
  import MoreVert from '@mui/icons-material/MoreVert'
  import Button from '@mui/material/Button'
  import Avatar from '@mui/material/Avatar'
  import '../Styles/FormHeader.css'

  function FormHeader() {
    const doc_name = 'Shadow Forms'
    return (
      <div className='form_header'>
        <div className='form_header_left'>
          <img src={formImg} alt="Logo" style={{height:"45px", width: "40px"}}/>
          <input type="text" placeholder='Untitled Form' className='form_name' value={doc_name} />
          <IoMdFolderOpen className='form_header_icon' style = {{marginRight : '10px'}} />
          <FiStar className='form_header_icon' style = {{marginRight : '10px'}} />
          <span style={{fontSize:'12px', fontWeight:'600'}}>All changes is saved in Drive</span>
        </div>

        <div className='form_header_right'>
          <IconButton>
            <ColorLensIcon size = 'small' className='form_header_icon' />
          </IconButton>
          <IconButton>
            <AiOutlineEye className='form_header_icon'/>
          </IconButton>
          <IconButton>
            <FiSettings className='form_header_icon' />
          </IconButton>
          <Button varriant = 'contained' color='primary' href='#contained-button' >Send</Button>
          <IconButton>
            <MoreVert className='form_header_icon' />
          </IconButton>
          <IconButton>
            <Avatar className='form_header_icon' src={avatarImg}/>
          </IconButton>
        </div>

      </div>
    )
  }

  export default FormHeader