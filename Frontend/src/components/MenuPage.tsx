import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useDishInfoIngredient, useMenuDishInfo } from '../hooks/api';

const useStyles = makeStyles({
  card: {
    backgroundColor: 'ghostWhite',
  },
  price: {
    fontSize: 14,
  },
  ingredient: {
    fontSize: 11,
    color: 'grey',
  },
});

interface IngredientListProps {
  menuName: string;
}

export const IngredientList: React.FC<IngredientListProps> = ({ menuName }) => {
  const classes = useStyles();
  const { data } = useDishInfoIngredient(menuName);

  return data ? (
    data.map((i: any) => (
      <Typography
        className={classes.ingredient}
        component="p"
      >{`${i.name}: ${i.amount}${i.unit}`}</Typography>
    ))
  ) : (
    <div />
  );
};

interface MenuPageProps {
  menuName: string;
}

export const MenuPage: React.FC<MenuPageProps> = ({ menuName }) => {
  const classes = useStyles();
  const { data: menuData } = useMenuDishInfo(menuName);

  return (
    <Grid container spacing={2}>
      {menuData !== undefined &&
        menuData.map((dishInfo: any) => (
          <Grid item xs={3}>
            <Card>
              <CardContent className={classes.card}>
                <Typography display="inline" variant="h5" align="left">
                  {dishInfo.name}
                </Typography>
                <Typography className={classes.price} display="inline" variant="h6" align="right">
                  {` $${dishInfo.price}`}
                </Typography>
                <Typography component="p">{dishInfo.description}</Typography>
                <hr />
                <IngredientList menuName={dishInfo.name} />
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};
