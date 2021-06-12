import { useQuery } from 'react-query';
import { DB_BASE_URL } from '../common/constants';
import { Order } from '../types/order';

export function GetOrders() {
  return useQuery(['orders'], async () => {
    const res = await fetch(`${DB_BASE_URL}/orders?`);
    return res.json();
  });
}
