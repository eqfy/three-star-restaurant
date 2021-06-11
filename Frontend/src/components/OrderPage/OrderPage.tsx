import { Grid, makeStyles } from '@material-ui/core';
import { FunctionComponent } from 'react';
import OrderControlPanel from './OrderControlPanel';
import OrderItemTable from './OrderItemTable';
import OrderTable from './OrderTable';

import '../../styles/Common.css';

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
  return (
    <section className={classes.page}>
      <Grid container>
        <Grid item xs={12} md={3} className="flex-1 flex-col-display">
          <OrderControlPanel />
        </Grid>
        <Grid item xs={12} md>
          <Grid container direction="column">
            <Grid item xs>
              <OrderTable />
            </Grid>
            <Grid item xs>
              <OrderItemTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default OrderPage;
