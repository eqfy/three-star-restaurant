import { Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import { useHistory } from 'react-router';

interface NavBarProps {}

const useStyles = makeStyles({
  button: {
    marginRight: '25px',
    marginLeft: '25px',
  },
  title: { flexGrow: 1 },
});

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          Three Star Restaurant
        </Typography>
        <Button className={classes.button} color="inherit" onClick={() => history.push('/menus')}>
          Menus
        </Button>
        <Button className={classes.button} color="inherit" onClick={() => history.push('/')}>
          Employees
        </Button>
        <Button className={classes.button} color="inherit" onClick={() => history.push('/')}>
          Orders
        </Button>
      </Toolbar>
    </AppBar>
  );
};
