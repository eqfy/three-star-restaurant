import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
} from '@material-ui/core';
import { ChangeEvent, Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import { OrderModeOptions, ORDER_MODE } from '../../hooks/order';

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
  modeFormControl: {
    marginTop: '20px',
  },
});

interface ControlPanelProps {
  orderMode: OrderModeOptions;
  setOrderMode: Dispatch<SetStateAction<OrderModeOptions>>;
}

const OrderControlPanel: FunctionComponent<ControlPanelProps> = (props) => {
  const { orderMode } = props;
  const classes = useStyles();

  const [shownMode, setShownMode] = useState(orderMode.mode);

  const handleModeChange = (event: ChangeEvent<{ value: unknown }>) => {
    setShownMode(parseInt(event.target.value as string));
  };
  return (
    <div className={classes.controlPanel}>
      <Paper className="flex-1 flex-col-display" elevation={3}>
        <FormControl className={classes.formControl}>
          <FormLabel>Query mode</FormLabel>
          <Select value={shownMode} onChange={handleModeChange}>
            <MenuItem value={ORDER_MODE.DEFAULT}>Default mode</MenuItem>
            <MenuItem value={ORDER_MODE.SELECTION}>Selection mode</MenuItem>
            <MenuItem value={ORDER_MODE.PROJECTION}>Projection mode</MenuItem>
            <MenuItem value={ORDER_MODE.DIVISION}>Division mode</MenuItem>
          </Select>
          {shownMode === ORDER_MODE.DIVISION && <DivisionControls {...props} />}
        </FormControl>
      </Paper>
    </div>
  );
};

const DivisionControls: FunctionComponent<ControlPanelProps> = (props) => {
  const { setOrderMode } = props;
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const handleChange = () => {
    if (!checked) {
      setOrderMode({ mode: ORDER_MODE.DIVISION });
    } else {
      setOrderMode({ mode: ORDER_MODE.DEFAULT });
    }
    setChecked(!checked);
  };

  return (
    <FormControl component="fieldset" className={classes.modeFormControl}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleChange} name="division" />}
          label="Perfom division"
        />
      </FormGroup>
      <FormHelperText>
        Toggle the checkbox to find all orders that have order items cooked by all chefs
      </FormHelperText>
    </FormControl>
  );
};

export default OrderControlPanel;
