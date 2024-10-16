"use client";

import { createContext, useContext, useReducer, ReactNode } from 'react';

interface Config {
  language: string;
  theme: string;
}

interface SettingContextType {
  config: Config | null;
  updateConfig: (config: Config) => void;
}

// 定義狀態的類型
interface ConfigState {
  configs: Config | null;
}

// 定義 action 類型
type AuthAction =
  | { type: 'UPDATE_CONFIG'; payload: Config }

// 初始狀態
const initialState: ConfigState = {
    configs: null,
};

// reducer 函數
const settingReducer = (state: ConfigState, action: AuthAction): ConfigState => {
  switch (action.type) {
    case 'UPDATE_CONFIG':
      return {
        ...state,
        configs: action.payload,
      };
    default:
      return state;
  }
};

// 創建 Context
const SettingContext = createContext<SettingContextType | undefined>(undefined);

// Provider 組件
export const SettingProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(settingReducer, initialState);

  const updateConfig = (configData: Config) => {
    dispatch({ type: 'UPDATE_CONFIG', payload: configData });
    // 可以選擇在 localStorage 中
    localStorage.setItem('user', JSON.stringify(configData));
  };

  return (
    <SettingContext.Provider value={{ config: state.configs, updateConfig }}>
      {children}
    </SettingContext.Provider>
  );
};

// 自定義 Hook，用於方便地使用 AuthContext
export const useSetting = () => {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error('useSetting must be used within an SettingProvider');
  }
  return context;
};
