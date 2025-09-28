import { InterfaceLayoutContext, LayoutContext } from 'context';
import ThemeProvider from 'provider/ThemeProvider';
import React, { ReactNode } from 'react';

type PropsType = {
  extractedData: InterfaceLayoutContext;
  children: ReactNode;
};

export default function Layout({ extractedData, children }: PropsType) {
  return (
    <LayoutContext.Provider value={extractedData}>
      <ThemeProvider>
        <div className="min-h-screen relative">{children}</div>
      </ThemeProvider>
    </LayoutContext.Provider>
  );
}
