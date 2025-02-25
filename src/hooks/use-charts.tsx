import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
