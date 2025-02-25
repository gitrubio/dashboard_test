import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useCharts } from 'src/hooks/use-charts';

import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsWebsiteVisits } from '../overview/analytics-website-visits';
import { AnalyticsWidgetSummary } from '../overview/analytics-widget-summary';


// ----------------------------------------------------------------------

export function ChartsView() {

  const algo =  useCharts();

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Companys Analytics
      </Typography>

      <Grid container spacing={3} >
        <Grid xs={12} md={6} lg={8}>   
          <AnalyticsWebsiteVisits
            title="Website visits"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              series: [
                { name: 'Team A', data: [43, 33, 22, 37, 67, 68, 37, 24, 55, 33,23,42] },
                { name: 'Team B', data: [51, 70, 47, 67, 40, 37, 24, 70, 24, 34,21, 10] }
              ],
            }}
          />
        </Grid>

        <Grid xs={12} sm={12} md={4} rowGap={3} display="inline-grid"  >
          <AnalyticsWidgetSummary
            title="Weekly sales"
            percent={2.6}
            total={714000}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              series: [22, 8, 35, 50, 82, 84, 77, 12, 22, 8, 35, 50]
            }}
          />
          <AnalyticsWidgetSummary
            title="Weekly sales"
            percent={2.6}
            total={714000}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              series: [22, 8, 35, 50, 82, 84, 77, 12, 22, 8, 35, 50]
            }}
          />
        </Grid>
       

      </Grid>
    </DashboardContent>
  );
}
