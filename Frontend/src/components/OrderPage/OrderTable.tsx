import { makeStyles } from '@material-ui/core';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import CustomTable from '../../common/CustomTable';
import {
  OrderModeOptions,
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
  orderMode: OrderModeOptions;
  setOrderMode: Dispatch<SetStateAction<OrderModeOptions>>;
}

const OrderTable: FunctionComponent<OrderTableProps> = (props) => {
  const { currOrder, setCurrOrder, orderMode } = props;
  const classes = useStyles();

  const { data = [] } = useGetOrders(orderMode);
  const deleteOrder = useDeleteOrder();
  const updateOrder = useUpdateOrder();
  const addOrder = useAddOrder();

  const colTitle = (field: string) => {
    let title = '';
    switch(field){
      case 'oid': title = 'Order ID'; break;
      case 'status': title = 'Status'; break;
      case 'created_on': title = 'Created On'; break;
      case 'waiter_id': title = 'Waiter ID'; break;
    }
    return title;
  }

  const colType = (field: string) => {
    let type = '';
    switch(field){
      case 'oid': type = 'numeric'; break;
      case 'status': type = 'string'; break;
      case 'created_on': type = 'date'; break;
      case 'waiter_id': type = 'numeric'; break;
    }
    return type;
  }

  let columns: any = [];
  if(orderMode.projection){
    orderMode.projection.forEach(col => {
      columns.push({title:colTitle(col), field: col, type: colType(col)});
    });
  } else {
    columns = [
      { title: 'Order ID', field: 'oid', type: 'numeric' },
      { title: 'Status', field: 'status', type: 'string' },
      { title: 'Created On', field: 'created_on', type: 'date' },
      { title: 'Waiter ID', field: 'waiter_id', type:'numeric' },
    ]
  }

  return (
    <div className={classes.table}>
      <CustomTable
        columns={columns}
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
