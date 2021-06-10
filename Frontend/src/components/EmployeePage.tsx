import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  makeStyles,
} from '@material-ui/core';
import MaterialTable from 'material-table';
import { FunctionComponent, useState } from 'react';
import { useGetEmployee } from '../hooks/employee';
import { tableIcons } from './MaterialTableConstants';

const useStyles = makeStyles({
  page: {
    margin: 10,
  },
  ckboxForm: {
    marginLeft: 20,
  },
  table: {
    margin: 20,
  },
});

const EmployeePage: FunctionComponent = (props) => {
  const [employeeTypes, setEmployeeTypes] = useState({
    manager: false,
    chef: false,
    waiter: false,
  });

  const { data: employee } = useGetEmployee(
    // @ts-ignore
    Object.keys(employeeTypes).filter((k) => employeeTypes[k])
  );
  const classes = useStyles();

  const handleChange = (key: string) => (event: any) => {
    setEmployeeTypes({ ...employeeTypes, [key]: event.target.checked });
  };

  return (
    <div className={classes.page}>
      <FormControl component="fieldset" className={classes.ckboxForm}>
        <FormLabel component="legend">Select a employee type</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={employeeTypes.manager} onChange={handleChange('manager')} />
            }
            label="Manager"
          />
          <FormControlLabel
            control={<Checkbox checked={employeeTypes.chef} onChange={handleChange('chef')} />}
            label="Chef"
          />
          <FormControlLabel
            control={<Checkbox checked={employeeTypes.waiter} onChange={handleChange('waiter')} />}
            label="Waiter"
          />
        </FormGroup>
      </FormControl>
      <div className={classes.table}>
        <MaterialTable
          columns={[
            { title: 'ID', field: 'eid' },
            { title: 'Name', field: 'name' },
            { title: 'Role', field: 'table_name' },
            { title: 'Employement Date', field: 'employment_date', type: 'date' },
            { title: 'Salary', field: 'salary', type: 'currency' },
          ]}
          data={employee}
          title="Employees"
          icons={tableIcons}
        />
      </div>
    </div>
  );
};

export default EmployeePage;
