import React, { useMemo, useState } from 'react';
import { Line, ResponsiveContainer, LineChart, XAxis } from 'recharts';
import Tile from '~/core/ui/Tile';
import Heading from '~/core/ui/Heading';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/core/ui/Table';

import { useUserSession } from '~/core/hooks/use-user-session';
import { BarChart, Bar, CartesianGrid, YAxis, Tooltip, Legend } from 'recharts';

export default function DashboardDemo() {
  const mrr = useMemo(() => generateDemoData(), []);
  // ... other useMemo hooks for your data ...

  return (
    <div className={'flex flex-col space-y-6 pb-36'}>
      <UserGreetings />
      <p>IN DEVELOPMENT-DRAFT</p>

      {/* Your existing tiles and charts */}

      {/* StackedBarChart with editable inputs */}
      <div>
        <Tile>
          <Tile.Heading>Stacked Bar Chart</Tile.Heading>
          <Tile.Body>
            <StackedBarChart />
          </Tile.Body>
        </Tile>
      </div>
    </div>
  );
}

function UserGreetings() {
  const user = useUserSession();
  const userDisplayName = user?.auth?.displayName ?? user?.auth?.email ?? '';

  return (
    <div>
      <Heading type={4}>Welcome Back, {userDisplayName}</Heading>
      <p className={'text-gray-500 dark:text-gray-400'}>
        Here&apos;s what&apos;s happening across your business
      </p>
    </div>
  );
}

function Chart(props: React.PropsWithChildren<{ data: { value: string; name: string }[] }>) {
  return (
    <div className={'h-36'}>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <LineChart data={props.data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2.5}
            dot={false}
          />
          <XAxis dataKey="name" height={15} dy={10} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer Name</TableHead>
          <TableHead>Purchase Date</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Sample table rows */}
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>2023-03-15</TableCell>
          <TableCell>Product A</TableCell>
          <TableCell>$100.00</TableCell>
          <TableCell>Completed</TableCell>
        </TableRow>
        {/* Add more rows as needed */}
      </TableBody>
    </Table>
  );
}

function generateDemoData() {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    // ... more data
  ];

  return [data, data[data.length - 1].value.toString()];
}

const StackedBarChart = () => {
  const [chartData, setChartData] = useState([
    { name: 'Page A', uv: 4000, pv: 2400, xv: 1000, yv: 500, wv: 600 },
    { name: 'Page B', uv: 3000, pv: 1398, xv: 1200, yv: 700, wv: 800 },
    { name: 'Page C', uv: 2000, pv: 9800, xv: 1100, yv: 600, wv: 700 },
    { name: 'Page D', uv: 2780, pv: 3908, xv: 1500, yv: 800, wv: 900 },
    { name: 'Page E', uv: 1890, pv: 4800, xv: 1600, yv: 500, wv: 600 },
    { name: 'Page F', uv: 2390, pv: 3800, xv: 1700, yv: 700, wv: 800 },
    { name: 'Page G', uv: 3490, pv: 4300, xv: 1800, yv: 900, wv: 1000 },
    // ... additional pages if needed ...
  ]);

  const handleDataChange = (page: string, key: string, value: string) => {
    const newData = chartData.map(item =>
      item.name === page ? { ...item, [key]: parseFloat(value) } : item
    );
    setChartData(newData);
  };

  return (
    <div>
      <div style={{ padding: '10px', maxWidth: '800px', margin: 'auto' }}>
        {chartData.map((item, index) => (
          <div key={index} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginBottom: '10px', color: 'blue' }}>
            <label style={{ marginRight: '10px', minWidth: '60px' }}>{item.name}</label>
            <input
              type="number"
              value={item.uv}
              onChange={(e) => handleDataChange(item.name, 'uv', e.target.value)}
              style={{ marginRight: '5px', padding: '5px', width: '80px', color: 'blue' }}
            />
            <input
              type="number"
              value={item.pv}
              onChange={(e) => handleDataChange(item.name, 'pv', e.target.value)}
              style={{ marginRight: '5px', padding: '5px', width: '80px', color: 'blue' }}
            />
            <input
              type="number"
              value={item.xv}
              onChange={(e) => handleDataChange(item.name, 'xv', e.target.value)}
              style={{ marginRight: '5px', padding: '5px', width: '80px', color: 'blue' }}
            />
            <input
              type="number"
              value={item.yv}
              onChange={(e) => handleDataChange(item.name, 'yv', e.target.value)}
              style={{ marginRight: '5px', padding: '5px', width: '80px', color: 'blue' }}
            />
            <input
              type="number"
              value={item.wv}
              onChange={(e) => handleDataChange(item.name, 'wv', e.target.value)}
              style={{ padding: '5px', width: '80px', color: 'blue' }}
            />
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" stackId="a" fill="#8884d8" />
          <Bar dataKey="pv" stackId="a" fill="#82ca9d" />
          <Bar dataKey="xv" stackId="a" fill="#ffc658" />
          <Bar dataKey="yv" stackId="a" fill="#a52a2a" />
          <Bar dataKey="wv" stackId="a" fill="#deb887" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};