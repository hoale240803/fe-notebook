import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (paths, options = {}) => {
    const response = await httpRequest.get(paths, options);
    return response.data;
};

export default httpRequest;
