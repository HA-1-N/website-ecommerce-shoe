'use client';

import React, { ReactNode, createContext, useContext, useState } from 'react';

interface EmailContextType {
  email: string;
  setEmail: (email: string) => void;
}

interface EmailProviderProps {
  children: ReactNode;
}
const EmailContext = createContext<EmailContextType | null>(null);

export const EmailProvider: React.FC<EmailProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>('');

  return <EmailContext.Provider value={{ email, setEmail }}>{children}</EmailContext.Provider>;
};

export const useEmail = (): EmailContextType => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
};
