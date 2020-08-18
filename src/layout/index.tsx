import * as React from 'react';
import style from './layout.module.scss';
import { AppBar, Typography, Toolbar, IconButton, Hidden } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Nav from './nav';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
      },
      [theme.breakpoints.down('md')]: {
        paddingLeft: 16,
      },
    },
    appBarTitle: {
      [theme.breakpoints.up('md')]: {
        marginLeft: 24,
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: 8,
      },
    },
    main: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
      },
    },
  }),
);

const Layout = ({ children, title }: any) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <div className={style.layout}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters>
          <Hidden mdUp implementation="css">
            <IconButton
              edge="start"
              aria-label="Menu"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" component="h2" className={classes.appBarTitle}>
            {title}
          </Typography>
          <Nav open={drawerOpen} setOpen={setDrawerOpen} />
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
