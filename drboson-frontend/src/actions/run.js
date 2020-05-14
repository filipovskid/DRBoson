import axios_instance from '../axios/axios-config'
import qs from 'qs';

const RunService = {
    createRun: (projectId, run) => {
        const formParams = qs.stringify(run);

        return axios_instance.post(`/${projectId}/run`, formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },
    fetchProjectRunMetrics: (projectId) => {
        return axios_instance.get(`/${projectId}/run/logs`);
    },
    fetchRunMetrics: (projectId, runId) => {
        return axios_instance.get(`/${projectId}/run/${runId}/logs`);
    }
};

export default RunService;