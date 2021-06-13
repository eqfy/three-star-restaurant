import { FormControl, InputLabel, makeStyles, MenuItem, Paper, Select } from '@material-ui/core';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { ORDER_MODE } from '../../hooks/order';

const useStyles = makeStyles({
  controlPanel: {
    flex: 1,
    padding: '6px 10px',
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    minWidth: 120,
    flex: 1,
    padding: '6px',
  },
  inputLabel: {
    paddingLeft: '6px',
  },
});

interface ControlPanelProps {
  orderMode: ORDER_MODE;
  setOrderMode: Dispatch<SetStateAction<ORDER_MODE>>;
}

const OrderControlPanel: FunctionComponent<ControlPanelProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.controlPanel}>
      <Paper className="flex-1 flex-col-display" elevation={3}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>Query mode</InputLabel>
          <Select>
            <MenuItem>Default mode</MenuItem>
            <MenuItem>Selection mode</MenuItem>
            <MenuItem>Projection mode</MenuItem>
            <MenuItem>Division mode</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </div>
  );
};

export default OrderControlPanel;
