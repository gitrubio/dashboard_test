import { useState } from 'react';

import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useCharts } from 'src/hooks/use-charts';

import { DashboardContent } from 'src/layouts/dashboard';

import { Loader } from 'src/components/loader';

import { PostSort } from '../blog/post-sort';
import { AnalyticsWebsiteVisits } from '../overview/analytics-website-visits';
import { AnalyticsWidgetSummary } from '../overview/analytics-widget-summary';





// ----------------------------------------------------------------------

export function ChartsView() {
  const [symbol, setSymbol] = useState('AAPL');
  const {chart, findChartData} =  useCharts();


  const handleChart = (company: string) => {
    setSymbol(company);
    findChartData(company);
  }

  

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Companys Analytics
      </Typography>

      <Box display="flex" alignItems="center" gap={2} justifyContent="end" sx={{ mb: 3 }}>
       <Typography variant="subtitle1" >
        Current Company: 
      </Typography>      
        <PostSort
          sortBy={symbol}
          onSort={handleChart}
          options={[
            { value: 'AAPL', label: 'Apple Inc.' },
            { value: 'GOOGL', label: 'Google Inc.' },
            { value: 'MSFT', label: 'Microsoft Corporation' },
          ]}
        />
      </Box>

      <Grid container spacing={3} >
        <Grid xs={12} md={6} lg={8}>   
          <AnalyticsWebsiteVisits
            title="Actions"
            textHover='USD'
            subheader={`(+${chart.yearlyGrowth.toFixed(1)}%) than last year`}
            chart={{
              categories: chart.months,
              series: [
                { name: chart.name, data: chart.closePrices },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} sm={12} md={4} rowGap={3} display="inline-grid"  >
          <AnalyticsWidgetSummary
            title="Yearly Growth"
            percent={chart.yearlyGrowth}
            total={chart.yearlyGrowth}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: chart.months,
              series: chart.closePrices
            }}
          />
          <AnalyticsWidgetSummary
            title="Last Monthly Growth"
            percent={chart.monthlyGrowth}
            total={chart.monthlyGrowth}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-message.svg" />}
            color='error'
            chart={{
              categories: ['Last Month', 'This Month'],
              series:  chart.closePrices
            }}
          />
        </Grid>
       

      </Grid>
    </DashboardContent>
  );
}
