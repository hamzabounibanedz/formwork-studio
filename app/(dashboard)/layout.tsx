import StudioShell from './studio-shell';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StudioShell accounts={Boolean(process.env.AUTH_SECRET && process.env.POSTGRES_URL)}>{children}</StudioShell>;
}
