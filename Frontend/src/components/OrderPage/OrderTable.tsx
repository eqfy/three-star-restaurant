import { makeStyles } from '@material-ui/core';
import { FunctionComponent } from 'react';
import CustomTable from '../../common/CustomTable';
import { GetOrders } from '../../hooks/order';
import { Order } from '../../types/order';
import { DB_BASE_URL } from '../../common/constants';
import { useMutation } from 'react-query';


const useStyles = makeStyles({
  table: {
    padding: '6px 20px 6px 10px',
  },
});

const OrderTable: FunctionComponent = (props) => {
  const classes = useStyles();
  const { data, refetch} = GetOrders();

  const deleteOrder = useMutation(async (oid) => {
    const queryParams = new URLSearchParams();
    queryParams.set('oid',`${oid}`);
    return await fetch(`${DB_BASE_URL}/deleteorder?` + queryParams);
  });

  const updateOrder = useMutation(async (options: {oldData: any, newData: any}) => {
    const {oldData, newData} = options;
    const queryParams = new URLSearchParams();
    queryParams.set('oid',`${oldData.oid}`);
    return await fetch(`${DB_BASE_URL}/updateorder?` + queryParams,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });
  });

  const addOrder = useMutation(async (newData: Order) => {
    await fetch(`${DB_BASE_URL}/addorder`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
  });

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
          addOrder.mutateAsync(newData)
            .then(res => 
              refetch())
            .catch(err => 
              console.error(err)),


          onRowUpdate: (newData, oldData) =>
            updateOrder.mutateAsync({oldData, newData})
            .then(res => 
              refetch())
            .catch(err => 
              console.error(err)),

          onRowDelete: oldData => 
          deleteOrder.mutateAsync(((oldData as Order).oid) as void)
          .then(res => 
            refetch())
          .catch(err => 
            console.error(err))
        }}
      />
    </div>
  );
};

export default OrderTable;