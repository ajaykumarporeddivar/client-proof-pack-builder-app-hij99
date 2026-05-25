 { useClient } from 'react';
import { Inter } from 'next/font/google';
import { cn } from 'cls';
import { Lucide } from 'lucide-react';
import {_CAMPAIGNS, MOCK_CLIENTS } from '@/lib/data';
import DashboardLayout from '../componentsashboardLayout';

const inter = Inter({ subsets: ['latin'] });

useClient();

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-zinc-900">Dashboard</h2>
          <button className="bg-zinc-900 text-white hover:bg-zinc-700 py-2 px-4 rounded-lg">
            Create New Proof Pack
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_CAMPAIGNS.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4"
            >
              <h3 className="font-bold text-zinc-900 mb-2">{campaign.name}</h3>
              <p className="text-zinc-600 mb-4">{campaign.description}</p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-zinc-600">Client:</span>
                <span className="text-zinc-900 font-bold">
                  {MOCK_CLIENTS.find((client) => client.id === campaign.clientId).name}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-zinc-600">Status:</span>
                <span
                  className={cn(
                    campaign.status === 'active' && 'text-emerald-600',
                    campaign.status === 'inactive' && 'text-red-600',
                    'font-bold'
                  )}
                >
                  {campaign.status}
                </span>
              </div>
              <button
                className="bg-zinc-900 text-white hover:bg-zinc-700 py-2 px-4 rounded-lg"
                onClick={() => console.log('Edit Proof Pack button clicked')}
              >
                Edit Proof Pack
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}