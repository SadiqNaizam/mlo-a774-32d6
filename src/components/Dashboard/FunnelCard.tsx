import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
  showTooltip?: boolean;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-500' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400', showTooltip: true },
  { name: 'In conversation', count: 50, value: 100, duration: '8 days', color: 'bg-primary' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-success' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const FunnelCard: React.FC = () => {
  const totalCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2 mb-4">
          <p className="text-5xl font-bold">600</p>
          <p className="text-muted-foreground pb-1">active leads</p>
        </div>
        <div className="w-full flex rounded-full h-2.5 overflow-hidden mb-6">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className={cn('h-full', stage.color)}
              style={{ width: `${(stage.count / totalCount) * 100}%` }}
            />
          ))}
        </div>
        <ul className="space-y-4">
          {funnelData.map((stage) => (
            <li key={stage.name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 text-sm">
              <div className="flex items-center gap-3">
                <span className={cn('w-2.5 h-2.5 rounded-full', stage.color)} />
                <span className="text-muted-foreground">{stage.name}</span>
              </div>
              <span className="font-medium text-right">{stage.count}</span>
              <span className="text-muted-foreground text-right">$ {stage.value}</span>
              {stage.showTooltip ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-muted-foreground text-right cursor-pointer">{stage.duration}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>average time on this stage</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <span className="text-muted-foreground text-right">{stage.duration}</span>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelCard;
