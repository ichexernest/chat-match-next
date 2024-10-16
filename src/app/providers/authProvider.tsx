"use client";

import { createContext, useContext, useReducer, ReactNode } from 'react';

// 定義用戶和上下文的類型
interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

// 定義狀態的類型
interface AuthState {
  user: User | null;
}

// 定義 action 類型
type AuthAction =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' };

// 初始狀態
const initialState: AuthState = {
  user: null,
};

// reducer 函數
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

// 創建 Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider 組件
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // 登入函數
  const login = (userData: User) => {
    dispatch({ type: 'LOGIN', payload: userData });
    // 可以選擇將用戶存儲在 localStorage 中
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // 登出函數
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    // 移除 localStorage 中的用戶信息
    localStorage.removeItem('user');
  };

  const isAuthenticated = state.user !== null;

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// 自定義 Hook，用於方便地使用 AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
