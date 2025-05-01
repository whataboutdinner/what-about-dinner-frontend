import React from 'react';
import { AuthProvider } from '@/lib/auth-context'; 
import { PartyProvider } from '@/lib/party-context'; 
import Header from '@/components/Header'; 


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider> 
          <PartyProvider>
            <Header /> 
            {children}
          </PartyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
