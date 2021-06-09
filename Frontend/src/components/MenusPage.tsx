import { AppBar, Container, makeStyles, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import { useMenus } from '../hooks/api';
import { MenuPage } from './MenuPage';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const useStyles = makeStyles({
  panel: {
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
  },
});

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container className={classes.panel} maxWidth={false}>
          <>{children}</>
        </Container>
      )}
    </div>
  );
};

export const MenusPage: React.FC = () => {
  const [value, setValue] = useState(0);
  const { data: menuData } = useMenus();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar>
        <Tabs value={value} onChange={handleChange}>
          {menuData !== undefined &&
            menuData.map((menu: any) => <Tab label={menu.name} id={menu.name} key={menu.name} />)}
        </Tabs>
      </AppBar>
      {menuData !== undefined &&
        menuData.map((menu: any, i: number) => (
          <TabPanel value={value} index={i}>
            <MenuPage menuName={menu.name} />
          </TabPanel>
        ))}
    </div>
  );
};
