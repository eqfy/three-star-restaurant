import { makeStyles } from '@material-ui/core';
import { FunctionComponent } from 'react';
import CustomTable from '../../common/CustomTable';
import {
  useAddOrderItem,
  useDeleteOrderItem,
  useGetOrderItem,
  useUpdateOrderItem,
} from '../../hooks/orderItem';
import { useUserRole } from '../../hooks/useUserRole';

const useStyles = makeStyles({
  table: {
    padding: '6px 20px',
  },
});

interface OrderItemTableProps {
  currOrder: number;
}

const OrderItemTable: FunctionComponent<OrderItemTableProps> = (props) => {
  const { currOrder } = props;
  const classes = useStyles();

  const { data: orderItems = [] } = useGetOrderItem(currOrder);
  const addOrderItem = useAddOrderItem();
  const delOrderItem = useDeleteOrderItem();
  const updateOrderItem = useUpdateOrderItem();
  const role = useUserRole();

  return (
    <div className={classes.table}>
      <CustomTable
        columns={[
          { title: 'ID', field: 'dish_id', type: 'numeric' },
          { title: 'OrderID', field: 'order_id', type: 'numeric' },
          { title: 'Description', field: 'description' },
          { title: 'Amount', field: 'amount', type: 'numeric' },
          { title: 'Status', field: 'status' },
          { title: 'Dish Name', field: 'dish_info_name' },
          { title: 'ChefID', field: 'chef_id', type: 'numeric' },
        ]}
        data={orderItems}
        editable={{
          isEditable: getEditPerms(role.userRole),
          isDeletable: getDelPerms(role.userRole),
          onRowAdd: (newData: any) => addOrderItem.mutateAsync(newData),
          onRowDelete: (oldData: any) => delOrderItem.mutateAsync(oldData.dish_id),
          onRowUpdate: (newData: any) => updateOrderItem.mutateAsync(newData),
        }}
        title={'Order Items'}
      />
    </div>
  );
};

const getEditPerms = (role: string) => {
  return () => role === 'Manager' || role === 'Waiter';
};

const getDelPerms = (role: string) => {
  return () => role === 'Manager' || role === 'Waiter';
};

export default OrderItemTable;
