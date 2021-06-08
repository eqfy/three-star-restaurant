import { useQuery } from 'react-query';

/* Note: how to use:
 *
 * const { data, isLoading } = useMenus();
 * if (!isLoading)
 *     console.log(data["Happy Hour"]);
 */

export function useMenus() {
  return useQuery('menus', async () => {
    const res = await fetch('http://localhost:3001/menus');
    return res.json();
  });
}

export function useMenuDishInfo(menuName: string) {
  return useQuery(['menus', menuName], async () => {
    const res = await fetch(`http://localhost:3001/menus?menu_name=${menuName}`);
    return res.json();
  });
}
