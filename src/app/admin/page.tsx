'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export default function DashboardPage() {
  const [stats, setStats] = useState({ orders: 0, products: 0, blogs: 0 });
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    async function fetchStats() {
      const res = await fetch('/api/admin/stats');
      const data = await res.json();
      setStats(data.stats);
      setChartData(data.chart);
    }
    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card><CardContent><p>Total Orders: {stats.orders}</p></CardContent></Card>
        <Card><CardContent><p>Total Products: {stats.products}</p></CardContent></Card>
        <Card><CardContent><p>Total Blogs: {stats.blogs}</p></CardContent></Card>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Sales Overview</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
}
