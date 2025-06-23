import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PageHeader: React.FC = () => {
  return (
    <div className="pt-4">
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="bg-transparent p-0 border-b rounded-none">
          <TabsTrigger 
            value="sales" 
            className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 pb-2 text-muted-foreground data-[state=active]:text-primary"
          >
            Sales
          </TabsTrigger>
          <TabsTrigger 
            value="leads" 
            className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 pb-2 text-muted-foreground data-[state=active]:text-primary"
          >
            Leads
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PageHeader;
