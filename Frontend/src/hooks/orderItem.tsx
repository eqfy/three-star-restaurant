import { useMutation, useQuery, useQueryClient } from 'react-query';
import { DB_BASE_URL } from '../common/constants';

export interface OrderItem {
  dish_id: number;
  order_id: number;
  description: string;
  amount: number;
  status: string;
  dish_info_name: string;
  chef_id: number;
}

export function useGetOrderItem() {
  return useQuery<OrderItem[]>('orderItems', async () => {
    console.log('orderItems ran');

    const res = await fetch(`${DB_BASE_URL}/orderItem`);
    return res.json();
  });
}

export function useAddOrderItem() {
  const queryClient = useQueryClient();
  return useMutation(
    async (newOrderItems: OrderItem) => {
      const res = await fetch(`${DB_BASE_URL}/orderItem`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrderItems),
      });
      if (res.status !== 200) {
        throw console.error('An error occured', res);
      }
    },
    {
      onSuccess: () => {
        // Refetch all order items
        queryClient.invalidateQueries('orderItems');
      },
    }
  );
}

export function useDeleteOrderItem() {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: number) => {
      const res = await fetch(`${DB_BASE_URL}/orderItem/${id}`, {
        method: 'DELETE',
      });
      if (res.status !== 200) {
        throw console.error('An error occured', res);
      }
    },
    {
      onSuccess: () => {
        // Refetch all order items
        queryClient.invalidateQueries('orderItems');
      },
    }
  );
}

export function useUpdateOrderItem() {
  const queryClient = useQueryClient();
  return useMutation(
    async (data: OrderItem) => {
      const res = await fetch(`${DB_BASE_URL}/orderItem/${data.dish_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (res.status !== 200) {
        throw console.error('An error occured', res);
      }
    },
    {
      onSuccess: () => {
        // Refetch all order items
        queryClient.invalidateQueries('orderItems');
      },
    }
  );
}
