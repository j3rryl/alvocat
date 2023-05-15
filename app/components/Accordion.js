"use client";
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Avatar, Divider, ListItemAvatar, Typography } from '@mui/material';
import { PARTNERS } from '../utils/constants';

export const Accordion = () => {
  const [open, setOpen] = React.useState(-1);

  const handleClick = (index) => {
      open===index?setOpen(-1):setOpen(index);
  };

  return (
    <List
      sx={{ width: '100%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      className='!font-handlee'
    >
      {PARTNERS?.map((item, index)=>{
        return (
          <React.Fragment key={item?.name}>
          <ListItemButton onClick={()=>handleClick(index)}>
      <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item?.imageUrl} />
        </ListItemAvatar>
        {item?.name}
        <ListItemText />
        {open===index ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider variant="inset" component="li" />

      <Collapse in={open===index} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          {item?.description}
            <ListItemText />
          </ListItemButton>
        </List>
      </Collapse>
          </React.Fragment>
        )
      })}
    </List>
  );
}