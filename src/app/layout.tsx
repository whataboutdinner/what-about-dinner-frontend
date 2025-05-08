import type { Metadata } from 'next'; 
import { AuthProvider } from '@/lib/auth-context';
import { PartyProvider } from '@/lib/party-context';
import Header from '@/components/Header';
import './globals.css'; 


export const metadata: Metadata = {
  title: 'What About Dinner',
  description: 'Decide what to eat, together!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> {/* Corrected syntax */}
        <AuthProvider> {/* AuthProvider should ideally wrap PartyProvider if PartyProvider needs auth context, or vice-versa, or they can be siblings if independent */} 
          <PartyProvider>
            <Header />
            {children}
          </PartyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
