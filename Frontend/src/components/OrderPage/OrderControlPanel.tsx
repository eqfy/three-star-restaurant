import {
  Button,
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
  TextField,
} from '@material-ui/core';
import { ChangeEvent, Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import { OrderModeOptions, ORDER_MODE, SelectionCondition } from '../../hooks/order';

const useStyles = makeStyles({
  controlPanel: {
    flex: 1,
    padding: '6px 10px',
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    minWidth: 120,
    padding: '6px',
  },
  // Division related
  divisionContainer: {
    marginTop: '20px',
  },
  // Selection related
  selectionContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
  },
  selectionCondContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: '100%',
  },
  selectionElement: {
    minWidth: '130px',
  },
  selectionComparator: {
    maxWidth: '60px',
  },
  selectionTextField: {
    marginTop: '3px',
  },
  selectionOperationContainer: {
    marginTop: '10px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface ControlPanelProps {
  orderMode: OrderModeOptions;
  setOrderMode: Dispatch<SetStateAction<OrderModeOptions>>;
}

const OrderControlPanel: FunctionComponent<ControlPanelProps> = (props) => {
  const { orderMode, setOrderMode } = props;
  const classes = useStyles();

  const [shownMode, setShownMode] = useState(orderMode.mode);

  const handleModeChange = (event: ChangeEvent<{ value: unknown }>) => {
    const targetValue = parseInt(event.target.value as string);
    setShownMode(targetValue);
    if (targetValue === ORDER_MODE.DEFAULT) {
      setOrderMode({
        mode: ORDER_MODE.DEFAULT,
      });
    }
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
        </FormControl>
        <div className={classes.formControl}>
          {shownMode === ORDER_MODE.SELECTION && <SelectionControls {...props} />}
          {shownMode === ORDER_MODE.DIVISION && <DivisionControls {...props} />}
        </div>
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
    <FormControl component="fieldset" className={classes.divisionContainer}>
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

const SelectionControls: FunctionComponent<ControlPanelProps> = (props) => {
  const columns = [
    { name: 'oid', value: 'ID' },
    { name: 'status', value: 'Status' },
    { name: 'created_on', value: 'Created On' },
    { name: 'waiter_id', value: 'Waiter Id' },
  ];
  const comparators = ['=', '!=', '>', '>=', '<', '<=', 'LIKE', 'IN'];

  const { setOrderMode } = props;
  const [selectConds, setSelectConds] = useState<SelectionCondition>({
    name: '',
    value: '',
    comparator: '=',
  });
  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<{
      name?: string;
      value: unknown;
    }>
  ) => {
    const newConds = {
      ...selectConds,
      [event.target.name as string]: event.target.value,
    };
    setSelectConds(newConds);
  };

  const handleClick = () => {
    setOrderMode({
      mode: ORDER_MODE.SELECTION,
      selection: [selectConds],
    });
  };

  return (
    <div className={classes.selectionContainer}>
      <div className={classes.selectionCondContainer}>
        <Select
          className={classes.selectionElement}
          value={selectConds.name}
          name={'name'}
          onChange={handleChange}
        >
          {columns.map(({ name, value }) => (
            <MenuItem key={name} value={name}>
              {value}
            </MenuItem>
          ))}
        </Select>
        <Select
          className={classes.selectionComparator}
          value={selectConds.comparator}
          name={'comparator'}
          onChange={handleChange}
        >
          {comparators.map((comp) => (
            <MenuItem key={comp} value={comp}>
              {comp}
            </MenuItem>
          ))}
        </Select>
        <TextField
          className={classes.selectionTextField}
          size="small"
          name="value"
          onChange={handleChange}
        />
      </div>
      <div className={classes.selectionOperationContainer}>
        <Button onClick={handleClick}>Select</Button>
      </div>
    </div>
  );
};

export default OrderControlPanel;
