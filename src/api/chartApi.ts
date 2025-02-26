import axios from "axios";

import { API_CONFIG } from "src/config-global";


export const assetsApi = axios.create({
	baseURL: API_CONFIG.baseURL,
});


/**
 * 
 * @param company  The company to get the chart data for
 * @returns 
 */
export const getCharts = async <T>(company: string = 'AAPL') => {
    const response = await assetsApi.get(`/api/charts/${company}`);
    return response.data as T;
}