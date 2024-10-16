import { ReactNode } from 'react';
// import { LiveProvider } from './liveProvider';
import { SettingProvider } from './settingProvider';
import { AuthProvider } from './authProvider';


interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <SettingProvider>
          {children}
      </SettingProvider>
    </AuthProvider>
  );
};

export default Providers;