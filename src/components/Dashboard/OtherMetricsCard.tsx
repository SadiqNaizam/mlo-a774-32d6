import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

const OtherMetricsCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Other data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-center md:text-left">
          <div>
            <p className="text-4xl font-bold">900</p>
            <p className="text-sm text-muted-foreground mt-1">total leads count</p>
          </div>
          <div>
            <p className="text-4xl font-bold">12</p>
            <p className="text-sm text-muted-foreground mt-1">days in average to convert lead</p>
          </div>
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <p className="text-4xl font-bold">30</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Leads with no activity in the last 30 days.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-sm text-muted-foreground mt-1">inactive leads</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OtherMetricsCard;
