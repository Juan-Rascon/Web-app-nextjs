import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GroupAdd from '@material-ui/icons/GroupAdd';
import Button from '@material-ui/core/Button';
import VpnKey from '@material-ui/icons/VpnKey';
import { NextLinkComposed } from '../src/Link';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  }));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>        
          <Button  component={NextLinkComposed}
          to={{pathname: '/login' }} >
          <VpnKey className={classes.menuButton} />
          <Hidden xsDown>
          <Typography variant="h6">Members Only</Typography>
          </Hidden>
          </Button>
          <div className={classes.title}></div>
          <Button className={classes.menuButton}  component={NextLinkComposed}
          to={{pathname: '/register'}}>
          <GroupAdd className={classes.menuButton}/>
          <Hidden xsDown>
          <Typography variant="h6" >Join</Typography>
          </Hidden>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
