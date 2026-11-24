import './globals.css';
import type { Metadata } from 'next';
import { SWRConfig } from 'swr';
import { getUser, getTeamForUser } from '@/lib/db/queries';

export const metadata: Metadata = {
  title: 'Formwork Studio | Project board',
  description: 'A working brief and handover board for small design studios.',
  icons: { icon: '/formwork.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const configured = Boolean(process.env.AUTH_SECRET && process.env.POSTGRES_URL);
  return (
    <html lang="en">
      <body>
        <SWRConfig value={{ fallback: configured ? {
          '/api/user': getUser(), '/api/team': getTeamForUser()
        } : {} }}>
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
