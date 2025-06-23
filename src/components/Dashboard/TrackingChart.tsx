import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays } from 'lucide-react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Area } from 'recharts';

const chartData = [
  { name: 'March', 'Closed won': 65, 'Closed lost': 68 },
  { name: 'April', 'Closed won': 25, 'Closed lost': 45 },
  { name: 'May', 'Closed won': 62, 'Closed lost': 55 },
  { name: 'June', 'Closed won': 68, 'Closed lost': 5 },
  { name: 'July', 'Closed won': 85, 'Closed lost': 40 },
  { name: 'August', 'Closed won': 28, 'Closed lost': 95 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border border-border rounded-lg shadow-sm">
        <p className="label font-bold">{`${label}`}</p>
        <p className="intro text-success">{`Won : ${payload[0].value}`}</p>
        <p className="intro text-destructive">{`Lost : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const CustomLegend = () => (
    <div className="flex justify-center items-center gap-6 mt-4">
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success/80" />
            <span className="text-sm text-muted-foreground">Closed won</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-destructive/80" />
            <span className="text-sm text-muted-foreground">Closed lost</span>
        </div>
    </div>
);


const TrackingChart: React.FC = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
                <CardTitle>Leads tracking</CardTitle>
                <div className="flex items-end gap-6 mt-2">
                    <div className="flex items-end gap-2">
                        <p className="text-3xl font-bold">680</p>
                        <p className="text-muted-foreground pb-1">total closed</p>
                    </div>
                    <div className="flex items-end gap-2">
                        <p className="text-3xl font-bold">70</p>
                        <p className="text-muted-foreground pb-1">total lost</p>
                    </div>
                </div>
            </div>
            <Select defaultValue="last-6-months">
                <SelectTrigger className="w-[180px]">
                    <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground"/>
                    <SelectValue placeholder="Select a time range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="last-6-months">last 6 months</SelectItem>
                    <SelectItem value="last-12-months">last 12 months</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                    <YAxis tickLine={false} axisLine={false} dx={-10} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }} />
                    <defs>
                        <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="Closed won" stroke="hsl(var(--success))" fillOpacity={1} fill="url(#colorWon)" strokeWidth={2} />
                    <Area type="monotone" dataKey="Closed lost" stroke="hsl(var(--destructive))" fillOpacity={1} fill="url(#colorLost)" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
        <CustomLegend />
      </CardContent>
    </Card>
  );
};

export default TrackingChart;
