import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton  } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/material/styles';

function FormDrawer() {
  const [drawerState , setDrawerState] = useState(false);

  const ToggleDrawer = () => {
    return setDrawerState(prev => !prev);
  };

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={ToggleDrawer}>
          <MenuIcon style={{ color: '#fff' }}/>
        </IconButton>
        <Drawer open={drawerState} onClose = {ToggleDrawer} >
          <List>
            <ListItem>
              SideBar
            </ListItem>
          </List>
        </Drawer>
      </React.Fragment>
    </div>
  )
}

export default FormDrawer