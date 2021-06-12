import { useQuery } from 'react-query';
import { DB_BASE_URL } from '../common/constants';

export function GetOrders() {
  return useQuery(['orders'], async () => {
    const res = await fetch(`${DB_BASE_URL}/orders?`);
    return res.json();
  });
}

export function GetOrderCount(){
  return useQuery(['getOrderCount'], async () => {
    const res = await fetch(`${DB_BASE_URL}/ordercount`);
    return res.json();
  });
}

export function ProjectOrders(){
  // TODO: Project Orders
}