import React from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '../Styles/centerTab.css'

function CenterTabs() {

  return (
    <Paper className='center-tabs'>
      <Tabs
        className='center-tabs__container'
        textColor="primary"
        indicatorColor="primary"
        centered
      >
        <Tab className='childTab' label="Questions" />
        <Tab className='childTab' label="Response" />
      </Tabs>
    </Paper>
  );
}

export default CenterTabs;
