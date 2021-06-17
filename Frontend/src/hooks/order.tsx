import { useMutation, useQuery, useQueryClient } from 'react-query';
import { DB_BASE_URL } from '../common/constants';

export interface Order {
  oid: number;
  status: string;
  created_on: string;
  waiter_id: number;
  order_item_count?: number;
}

export enum ORDER_MODE {
  DEFAULT,
  SELECTION,
  PROJECTION,
  DIVISION,
  NESTED_AGGREGATION,
}

export interface OrderModeOptions {
  mode: ORDER_MODE;
  selection?: SelectionCondition[];
  projection?: string[];
  nestedAggregate?: NestedAggregateCondition;
}

export interface SelectionCondition {
  name: string;
  value: any;
  comparator: '=' | '!=' | '>' | '>=' | '<' | '<=' | 'LIKE';
}

export interface NestedAggregateCondition {
  comparator: '>' | '>=' | '<' | '<=';
  aggregator: 'AVG' | 'MIN' | 'MAX';
}

export function useGetOrders(options: OrderModeOptions = { mode: ORDER_MODE.DEFAULT }) {
  return useQuery<Order[]>(['orders', options], async () => {
    const {
      mode,
      selection = [],
      projection = [],
      nestedAggregate = { comparator: '>', aggregator: 'AVG' },
    } = options;
    switch (mode) {
      case ORDER_MODE.SELECTION:
        return selectOrders(selection);
      case ORDER_MODE.PROJECTION:
        return projectOrders(projection);
      case ORDER_MODE.DIVISION:
        return divideOrdersByChef();
      case ORDER_MODE.NESTED_AGGREGATION:
        return nestedAggregateOrders(nestedAggregate);
      default:
        return getOrders();
    }
  });
}

async function getOrders() {
  let res = await fetch(`${DB_BASE_URL}/orders`);
  return res.json();
}
async function selectOrders(conditions: SelectionCondition[]) {
  const res = await fetch(`${DB_BASE_URL}/selectOrders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(conditions),
  });
  return res.json();
}
async function projectOrders(projections: string[]) {
  const res = await fetch(`${DB_BASE_URL}/projectorders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projections),
  });
  return res.json();
}
async function nestedAggregateOrders(conditions: NestedAggregateCondition) {
  console.log(JSON.stringify(conditions));

  const res = await fetch(`${DB_BASE_URL}/ordersNestedAggregate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(conditions),
  });
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
      if (newOrder.order_item_count) delete newOrder.order_item_count;
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
      if (newOrder.order_item_count) delete newOrder.order_item_count;
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
