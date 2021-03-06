import { makeStyles } from '@material-ui/core';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import CustomTable from '../../common/CustomTable';
import { useOrderItemCount } from '../../hooks/api';
import {
  OrderModeOptions,
  useAddOrder,
  useDeleteOrder,
  useGetOrders,
  useUpdateOrder,
} from '../../hooks/order';
import { ALL_ORDER } from '../../hooks/orderItem';
import { useUserRole } from '../../hooks/useUserRole';

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
  const { data: orderCountData = {} } = useOrderItemCount();
  const deleteOrder = useDeleteOrder();
  const updateOrder = useUpdateOrder();
  const addOrder = useAddOrder();
  const role = useUserRole();

  const colTitle = (field: string) => {
    let title = '';
    switch (field) {
      case 'oid':
        title = 'Order ID';
        break;
      case 'status':
        title = 'Status';
        break;
      case 'created_on':
        title = 'Created On';
        break;
      case 'waiter_id':
        title = 'Waiter ID';
        break;
    }
    return title;
  };

  const colType = (field: string) => {
    let type = '';
    switch (field) {
      case 'oid':
        type = 'numeric';
        break;
      case 'status':
        type = 'string';
        break;
      case 'created_on':
        type = 'date';
        break;
      case 'waiter_id':
        type = 'numeric';
        break;
    }
    return type;
  };

  let columns: any = [];
  if (orderMode.projection) {
    orderMode.projection.forEach((col) => {
      columns.push({ title: colTitle(col), field: col, type: colType(col) });
    });
  } else {
    columns = [
      { title: 'Order ID', field: 'oid', type: 'numeric' },
      { title: 'Status', field: 'status', type: 'string' },
      { title: 'Created On', field: 'created_on', type: 'datetime' },
      { title: 'Waiter ID', field: 'waiter_id', type: 'numeric' },
      { title: 'Order Items Amount', field: 'order_item_count', type: 'numeric' },
    ];
  }

  return (
    <div className={classes.table}>
      <CustomTable
        columns={columns}
        data={data.map((d) => ({ ...d, order_item_count: orderCountData[d.oid] }))}
        title="Orders"
        editable={{
          isEditable: getEditPerms(role.userRole),
          isDeletable: getDelPerms(role.userRole),
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

const getEditPerms = (role: string) => {
  return () => role === 'Manager' || role === 'Waiter';
};

const getDelPerms = (role: string) => {
  return () => role === 'Manager';
};

export default OrderTable;
