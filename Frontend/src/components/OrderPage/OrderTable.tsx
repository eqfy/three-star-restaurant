import { makeStyles } from '@material-ui/core';
import { FunctionComponent } from 'react';
import CustomTable from '../../common/CustomTable';

const useStyles = makeStyles({
  table: {
    padding: '6px 20px 6px 10px',
  },
});

const OrderTable: FunctionComponent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.table}>
      <CustomTable
        columns={[
          { title: 'ID', field: 'eid' },
          { title: 'Name', field: 'name' },
          { title: 'Role', field: 'table_name' },
          { title: 'Employement Date', field: 'employment_date', type: 'date' },
          { title: 'Salary', field: 'salary', type: 'currency' },
        ]}
        data={[]}
      />
    </div>
  );
};

export default OrderTable;
