import { Grid, makeStyles, Paper } from '@material-ui/core';
import { FunctionComponent } from 'react';
import CustomTable from '../common/CustomTable';

const useStyles = makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 84px)',
    margin: '10px 10px',
  },
  table: {
    padding: '6px 20px 6px 10px',
  },
  controlPanel: {
    flex: 1,
    padding: '6px 10px 6px 20px',
    display: 'flex',
    flexDirection: 'column',
  },
  controlPanelInner: {
    flex: 1,
  },
});

const OrderPage: FunctionComponent = (props) => {
  const classes = useStyles();
  return (
    <section className={classes.page}>
      <Grid container>
        <Grid item xs={12} md={3} className={classes.controlPanel}>
          <Paper className={classes.controlPanelInner}>Controls here</Paper>
        </Grid>
        <Grid item xs={12} md>
          <Grid container direction="column">
            <Grid item xs className={classes.table}>
              <CustomTable
                columns={[
                  { title: 'ID', field: 'eid' },
                  { title: 'Name', field: 'name' },
                  { title: 'Role', field: 'table_name' },
                  { title: 'Employement Date', field: 'employment_date', type: 'date' },
                  { title: 'Salary', field: 'salary', type: 'currency' },
                ]}
                data={[]}
              />
            </Grid>
            <Grid item xs className={classes.table}>
              <CustomTable
                columns={[
                  { title: 'ID', field: 'eid' },
                  { title: 'Name', field: 'name' },
                  { title: 'Role', field: 'table_name' },
                  { title: 'Employement Date', field: 'employment_date', type: 'date' },
                  { title: 'Salary', field: 'salary', type: 'currency' },
                ]}
                data={[]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default OrderPage;
