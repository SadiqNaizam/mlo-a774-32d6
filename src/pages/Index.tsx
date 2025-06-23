import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import FunnelCard from '../components/Dashboard/FunnelCard';
import SourcesCard from '../components/Dashboard/SourcesCard';
import TrackingChart from '../components/Dashboard/TrackingChart';
import ReasonsCard from '../components/Dashboard/ReasonsCard';
import OtherMetricsCard from '../components/Dashboard/OtherMetricsCard';

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <PageHeader />
      <div className="mt-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <FunnelCard />
          </div>
          <div className="lg:col-span-2">
            <SourcesCard />
          </div>
        </div>

        <TrackingChart />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ReasonsCard />
          </div>
          <div className="lg:col-span-2">
            <OtherMetricsCard />
          </div>
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
