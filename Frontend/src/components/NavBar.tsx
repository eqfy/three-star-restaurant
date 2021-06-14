import { Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import React from 'react';

interface NavBarProps {}

const useStyles = makeStyles({
  appbar: {
    background: '#618685',
  },
  button: {
    marginRight: '25px',
    marginLeft: '25px',
  },
  title: { flexGrow: 1, textTransform: 'uppercase' },
});

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          Three Star Restaurant
        </Typography>
        <Button className={classes.button} color="inherit" onClick={() => history.push('/menus')}>
          Menus
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          onClick={() => history.push('/employees')}
        >
          Employees
        </Button>
        <Button className={classes.button} color="inherit" onClick={() => history.push('/orders')}>
          Orders
        </Button>
      </Toolbar>
    </AppBar>
  );
};
