import { Grid, makeStyles } from '@material-ui/core';
import { FunctionComponent, useState } from 'react';
import OrderControlPanel from './OrderControlPanel';
import OrderItemTable from './OrderItemTable';
import OrderTable from './OrderTable';

import '../../styles/Common.css';
import { ALL_ORDER } from '../../hooks/orderItem';
import { ORDER_MODE } from '../../hooks/order';

const useStyles = makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 84px)',
    margin: '10px 10px',
  },
});

const OrderPage: FunctionComponent = (props) => {
  const classes = useStyles();

  const [currOrder, setCurrOrder] = useState(ALL_ORDER);
  const [orderMode, setOrderMode] = useState(ORDER_MODE.DEFAULT);

  return (
    <section className={classes.page}>
      <Grid container>
        <Grid item xs={12} md={3} className="flex-1 flex-col-display">
          <OrderControlPanel {...{ orderMode, setOrderMode }} />
        </Grid>
        <Grid item xs={12} md>
          <Grid container direction="column">
            <Grid item xs>
              <OrderTable {...{ currOrder, setCurrOrder, orderMode, setOrderMode }} />
            </Grid>
            <Grid item xs>
              <OrderItemTable currOrder={currOrder} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default OrderPage;
