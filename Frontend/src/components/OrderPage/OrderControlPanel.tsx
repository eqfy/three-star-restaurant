import { makeStyles, Paper } from '@material-ui/core';
import { FunctionComponent } from 'react';

const useStyles = makeStyles({
  controlPanel: {
    flex: 1,
    padding: '6px 10px 6px 20px',
    display: 'flex',
    flexDirection: 'column',
  },
});

const OrderControlPanel: FunctionComponent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.controlPanel}>
      <Paper className="flex-1" elevation={3}>
        Controls here
      </Paper>
    </div>
  );
};

export default OrderControlPanel;
