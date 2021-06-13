import { makeStyles } from '@material-ui/core';
import { FunctionComponent } from 'react';
import CustomTable from '../../common/CustomTable';
import { useAddOrder, useDeleteOrder, useGetOrders, useUpdateOrder } from '../../hooks/order';

const useStyles = makeStyles({
  table: {
    padding: '6px 20px 6px 10px',
  },
});

const OrderTable: FunctionComponent = (props) => {
  const classes = useStyles();
  const { data } = useGetOrders();

  const deleteOrder = useDeleteOrder();
  const updateOrder = useUpdateOrder();
  const addOrder = useAddOrder();

  return (
    <div className={classes.table}>
      <CustomTable
        columns={[
          { title: 'ID', field: 'oid' },
          { title: 'Status', field: 'status' },
          { title: 'Created On', field: 'created_on', type: 'date' },
          { title: 'Waiter ID', field: 'waiter_id' },
        ]}
        data={data}
        title="Orders"
        editable={{
          onRowAdd: (newData: any) => addOrder.mutateAsync(newData),
          onRowUpdate: (newData: any) => updateOrder.mutateAsync(newData),
          onRowDelete: (oldData: any) => deleteOrder.mutateAsync(oldData.oid),
        }}
      />
    </div>
  );
};

export default OrderTable;
