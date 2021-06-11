import { useQuery } from 'react-query';
import { DB_BASE_URL } from '../common/constants';

export function useGetEmployee(employeeTypes: string[] = []) {
  return useQuery(['employee', employeeTypes], async () => {
    const queryParams = new URLSearchParams();
    employeeTypes.forEach((etype) => queryParams.append('type', etype));
    const res = await fetch(`${DB_BASE_URL}/employee?` + queryParams);
    return res.json();
  });
}
