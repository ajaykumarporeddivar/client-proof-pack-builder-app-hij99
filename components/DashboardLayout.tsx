import { useClient } from 'react';
import { Inter } from 'next/font/google';
import { cn } from 'clsx';
import { Lucide } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

useClient();

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <nav className="bg-zinc-900 text-zinc-100 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold text-2xl">Client Proof Pack Builder</h1>
          <ul className="flex items-center space-x-4">
            <li>
              <a
                href="/dashboard/intake"
                className="text-zinc-100 hover:text-white py-2 px-4 rounded-lg"
              >
                <Lucide icon="Inbox" className="mr-2" />
                Evidence Intake
              </a>
            </li>
            <li>
              <a
                href="/dashboard/dashboard"
                className="text-zinc-100 hover:text-white py-2 px-4 rounded-lg"
              >
                <Lucide icon="LayoutDashboard" className="mr-2" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/dashboard/proof-pack-export"
                className="text-zinc-100 hover:text-white py-2 px-4 rounded-lg"
              >
                <Lucide icon="FileText" className="mr-2" />
                Proof Packs
              </a>
            </li>
            <li>
              <a
                href="/dashboard/settings"
                className="text-zinc-100 hover:text-white py-2 px-4 rounded-lg"
              >
                <Lucide icon="Settings" className="mr-2" />
                Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-8">{children}</main>
    </div>
  );
}