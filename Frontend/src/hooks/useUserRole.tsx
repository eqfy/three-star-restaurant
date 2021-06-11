import React from 'react';
import { createContext, useState } from 'react';

const initialState = {
  userRole: '',
  setUserRole: (role: string): void => {
    throw new Error('setUserRole must be overridden!');
  },
};

const UserRoleContext = createContext(initialState);

export const UserRoleProvider: React.FC = ({ children }) => {
  const [userRole, setURole] = useState('');
  const setUserRole = (role: string) => setURole(role);

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export function useUserRole() {
  return React.useContext(UserRoleContext);
}
