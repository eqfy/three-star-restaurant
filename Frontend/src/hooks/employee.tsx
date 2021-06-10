import { useQuery } from 'react-query';

export function useGetEmployee(employeeTypes: string[] = []) {
  return useQuery(['employee', employeeTypes], async () => {
    const queryParams = new URLSearchParams();
    employeeTypes.forEach((etype) => queryParams.append('type', etype));
    const res = await fetch('http://localhost:3001/employee?' + queryParams);
    return res.json();
  });
}
