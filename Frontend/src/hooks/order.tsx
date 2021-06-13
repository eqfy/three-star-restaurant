import { useMutation, useQuery, useQueryClient } from 'react-query';
import { DB_BASE_URL } from '../common/constants';

export interface Order {
  oid: number;
  status: string;
  created_on: string;
  waiter_id: number;
}

export function useGetOrders() {
  return useQuery<Order[]>(['orders'], async () => {
    const res = await fetch(`${DB_BASE_URL}/orders?`);
    return res.json();
  });
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
