"use client";

import { AuthProvider } from '@/lib/auth-context';
import { PartyProvider } from '@/lib/party-context';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PartyProvider>
          <AuthProvider>
          {children}
        </AuthProvider>
        </PartyProvider>
      </body>
    </html>
  )
}
