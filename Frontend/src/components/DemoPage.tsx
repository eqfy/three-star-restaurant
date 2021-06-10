import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import backgroundImage from '../assets/background-image.jpg';
import { useUserRole } from '../hooks/useUserRole';
import { useHistory } from 'react-router-dom';

export default function DemoPage() {
  const classes = useStyles();
  const history = useHistory();

  const { setUserRole } = useUserRole();

  const handleChange = (event: any) => {
    setUserRole(event.target.value);
  };

  const navigateToMainPage = () => {
    history.push('/menus');
  };

  return (
    <div className={classes.container}>
      <div className={classes.rolesContainer}>
        <h1 className={classes.title}>Michelin 3 Star Restaurant</h1>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="restaurant-role-label">Role</InputLabel>
          <Select labelId="restaurant-role-label" label="Role" onChange={handleChange}>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Waiter">Waiter</MenuItem>
            <MenuItem value="Chef">Chef</MenuItem>
          </Select>
        </FormControl>
        <br></br>
        <Button variant="contained" color="primary" onClick={navigateToMainPage}>
          Begin
        </Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
  },
  rolesContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  title: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  formControl: {
    minWidth: 200,
    background: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'left',
  },
}));
