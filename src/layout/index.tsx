import * as React from 'react';
import style from './layout.module.scss';
import { Link } from 'gatsby';
import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Layout = ({ children }: any) => (
  <div className={style.layout}>
    <AppBar position="fixed" className={style.header}>
      <Toolbar>
        <IconButton edge="start" aria-label="Menu" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" className={style.title}>
          CMT Systems
        </Typography>
      </Toolbar>
    </AppBar>

    <main>{children}</main>
  </div>
);

export default Layout;
