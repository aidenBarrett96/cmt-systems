import * as React from 'react';
import style from './nav.module.scss';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Drawer,
  Typography,
  Hidden,
  Divider,
} from '@material-ui/core';
import { Link } from 'gatsby';
import HomeIcon from '@material-ui/icons/Home';
import AlertIcon from '@material-ui/icons/ErrorOutline';

const Nav = ({ open, setOpen }: any) => {
  return (
    <>
      <Hidden mdUp implementation="js">
        <Drawer variant="temporary" anchor="left" open={open} onClose={() => setOpen(false)}>
          <List className={style.nav}>
            <ListItem>
              <ListItemText>
                <Typography variant="h5">CMT Systems</Typography>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemIcon>
                <AlertIcon />
              </ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="js">
        <Drawer variant="permanent" anchor="left" open onClose={() => setOpen(false)}>
          <List className={style.nav}>
            <ListItem>
              <ListItemText>
                <Typography variant="h5">CMT Systems</Typography>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemIcon>
                <AlertIcon />
              </ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Nav;
