import { useMutation, useQuery, useQueryClient } from 'react-query';
import { DB_BASE_URL } from '../common/constants';

export interface Order {
  oid: number;
  status: string;
  created_on: string;
  waiter_id: number;
}

export enum ORDER_MODE {
  DEFAULT,
  SELECTION,
  PROJECTION,
  DIVISION,
}

export interface OrderModeOptions {
  mode: ORDER_MODE;
  selection?: {};
  projection?: {};
}

export function useGetOrders(options: OrderModeOptions = { mode: ORDER_MODE.DEFAULT }) {
  return useQuery<Order[]>(['orders', options], async () => {
    const { mode, selection = {}, projection = {} } = options;
    switch (mode) {
      case ORDER_MODE.SELECTION:
        return selectOrders();
      case ORDER_MODE.PROJECTION:
        return projectOrders();
      case ORDER_MODE.DIVISION:
        return divideOrdersByChef();
      default:
        return getOrders();
    }
  });
}

async function getOrders() {
  let res = await fetch(`${DB_BASE_URL}/orders`);
  return res.json();
}
async function selectOrders() {
  // Stub
  const res = await fetch(`${DB_BASE_URL}/orders`);
  return res.json();
}
async function projectOrders() {
  // Stub
  const res = await fetch(`${DB_BASE_URL}/orders`);
  return res.json();
}
async function divideOrdersByChef() {
  const res = await fetch(`${DB_BASE_URL}/divideOrderByChef`);
  return res.json();
}

export function useGetOrderCount() {
  return useQuery(['getOrderCount'], async () => {
    const res = await fetch(`${DB_BASE_URL}/ordercount`);
    return res.json();
  });
}

export function useAddOrder() {
  const queryClient = useQueryClient();
  return useMutation(
    async (newOrder: Order) => {
      const res = await fetch(`${DB_BASE_URL}/addorder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });
      if (res.status < 200 || res.status >= 300) {
        throw console.error('An error occured', res);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('orders');
      },
    }
  );
}

export function useDeleteOrder() {
  const queryClient = useQueryClient();
  return useMutation(
    async (oid: number) => {
      const queryParams = new URLSearchParams();
      queryParams.set('oid', `${oid}`);
      const res = await fetch(`${DB_BASE_URL}/deleteorder?` + queryParams);
      if (res.status < 200 || res.status >= 300) {
        throw console.error('An error occured', res);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('orders');
      },
    }
  );
}

export function useUpdateOrder() {
  const queryClient = useQueryClient();
  return useMutation(
    async (newOrder: Order) => {
      const queryParams = new URLSearchParams();
      queryParams.set('oid', `${newOrder.oid}`);
      const res = await fetch(`${DB_BASE_URL}/updateorder?` + queryParams, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });
      if (res.status < 200 || res.status >= 300) {
        throw console.error('An error occured', res);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('orders');
      },
    }
  );
}

export function useProjectOrders() {
  // TODO: Project Orders
}
