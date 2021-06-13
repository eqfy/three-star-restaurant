import { makeStyles } from '@material-ui/core';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import CustomTable from '../../common/CustomTable';
import {
  ORDER_MODE,
  useAddOrder,
  useDeleteOrder,
  useGetOrders,
  useUpdateOrder,
} from '../../hooks/order';
import { ALL_ORDER } from '../../hooks/orderItem';

const useStyles = makeStyles({
  table: {
    padding: '6px 20px',
  },
});

interface OrderTableProps {
  currOrder: number;
  setCurrOrder: Dispatch<SetStateAction<number>>;
  orderMode: ORDER_MODE;
  setOrderMode: Dispatch<SetStateAction<ORDER_MODE>>;
}

const OrderTable: FunctionComponent<OrderTableProps> = (props) => {
  const { currOrder, setCurrOrder, orderMode } = props;
  const classes = useStyles();

  const { data = [] } = useGetOrders(orderMode);
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
        onRowClick={(_event: any, rowData: any) =>
          rowData.oid === currOrder ? setCurrOrder(ALL_ORDER) : setCurrOrder(rowData.oid)
        }
      />
    </div>
  );
};

export default OrderTable;
