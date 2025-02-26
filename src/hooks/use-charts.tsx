import type { StockData } from 'src/types/charts';

import { useState, useEffect } from 'react';

import { getCharts } from 'src/api/chartApi';


export function useCharts() {

    const [chart, setChart] = useState<StockData>({
        symbol: '',
        closePrices: [],
        months:  [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ],
        name: '',
        monthlyGrowth: 0,
        yearlyGrowth: 0
    });
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () =>
        {
            setLoading(true);            
            const data = await getCharts<any>('AAPL');
            setChart(data); 
            setLoading(false);           
          };
        fetchData();
    }, []);

      const findChartData = async (symbol: string = 'AAPL') => {
        setLoading(true);            
        const data = await getCharts<any>(symbol);
        setChart(data); 
        setLoading(false);
      };

  return {
    chart,
    loading,
    findChartData
  };
}
