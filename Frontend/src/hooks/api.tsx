import { useQuery } from 'react-query';
import { DB_BASE_URL } from '../common/constants';

export function useMenus() {
  return useQuery('menus', async () => {
    const res = await fetch(`${DB_BASE_URL}/menus`);
    return res.json();
  });
}

export function useMenuDishInfo(menuName: string) {
  return useQuery(['menus', menuName], async () => {
    const res = await fetch(`${DB_BASE_URL}/menus?menu_name=${menuName}`);
    return res.json();
  });
}

export function useDishInfoIngredient(dishInfoName: string) {
  return useQuery(['ingredients', dishInfoName], async () => {
    const res = await fetch(`${DB_BASE_URL}/ingredients?dish_info_name=${dishInfoName}`);
    return res.json();
  });
}

export function useDishInfoOrderCount() {
  return useQuery(['dishinfoordercount'], async () => {
    const res = await fetch(`${DB_BASE_URL}/dishinfoordercount`);
    const json = await res.json();
    return json.reduce((acc: any, val: any) => {
      acc[val.dish_info_name] = val.count;
      return acc;
    }, {});
  });
}
