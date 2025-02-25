import axios from 'axios';
import { useState, useEffect } from 'react';

// ----------------------------------------------------------------------

export function useCharts() {

    const [chart, setChart] = useState(null);

    useEffect(() => {
        axios.get('api/stock-data')
            .then((response) => {
                console.log(response.data);
                
                setChart(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);


  return null;
}
