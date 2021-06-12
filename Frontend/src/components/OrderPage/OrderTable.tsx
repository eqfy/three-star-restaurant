import { makeStyles } from '@material-ui/core';
import { FunctionComponent } from 'react';
import CustomTable from '../../common/CustomTable';
import { GetOrders } from '../../hooks/order';
import { Order } from '../../types/order';
import { DB_BASE_URL } from '../../common/constants';

const useStyles = makeStyles({
  table: {
    padding: '6px 20px 6px 10px',
  },
});

const OrderTable: FunctionComponent = (props) => {
  const classes = useStyles();
  const { data } = GetOrders();

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
          new Promise(async (resolve, reject) => {
            await fetch(`${DB_BASE_URL}/addorder`,{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newData)
            }).then(res => {
              resolve(res.json);
            }).catch(err => {
              reject(err);
            });
          }),

          onRowUpdate: (newData, oldData) =>
          new Promise(async (resolve, reject) => {
            const queryParams = new URLSearchParams();
            queryParams.set('oid',`${(oldData as Order).oid}`);
            await fetch(`${DB_BASE_URL}/updateorder?` + queryParams,{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newData)
            }).then(res => {
              console.log(res.json);
              resolve(res.json);
            }).catch(err => {
              reject(err);
            }); 
            }),
            
          onRowDelete: oldData => 
            new Promise(async (resolve, reject) => {
              const queryParams = new URLSearchParams();
              queryParams.set('oid',`${(oldData as Order).oid}`);
              await fetch(`${DB_BASE_URL}/deleteorder?` + queryParams).then(res => {
                resolve(res.json);
              }).catch(err => {
                reject(err);
              });
            }),
        }}
      />
    </div>
  );
};

export default OrderTable;