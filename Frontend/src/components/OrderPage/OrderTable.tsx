import { makeStyles } from '@material-ui/core';
import { FunctionComponent } from 'react';
import CustomTable from '../../common/CustomTable';
import { GetOrders } from '../../hooks/order';
// import { GetOrders, UpdateOrder, DeleteOrder, ProjectOrders, GetOrderCount } from '../../hooks/order';
import { Order } from '../../types/order';

const useStyles = makeStyles({
  table: {
    padding: '6px 20px 6px 10px',
  },
});

const OrderTable: FunctionComponent = (props) => {
  const classes = useStyles();
  const { data } = GetOrders();
  console.log(data);
  return (
    <div className={classes.table}>
      <CustomTable
        columns={[
          { title: 'ID', field: 'oid' },
          { title: 'Status', field: 'status' },
          { title: 'Created On', field: 'created_on', type:'date' },
          { title: 'Waiter ID', field: 'waiter_id' },
        ]}
        data={data}
        title="Orders"
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              //TODO: add new row
            }),
          onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
              // TODO: update row 
              // UpdateOrder(((newData as Order).oid) as number, newData);  
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              // TODO: delete row
            }),
        }}
      />
    </div>
  );
};

export default OrderTable;
