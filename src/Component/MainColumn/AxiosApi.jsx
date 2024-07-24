import axios from "axios";

const AxiosApi = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/products',
    timeout: 10000,
});

export const createProducts = (formData) => {
    return AxiosApi.post('', formData);
};

export const getProductsById = (id) => {
    return AxiosApi.get(`/${id}`);
};
export const getProducts = () => {
    return AxiosApi.get('');
};


export const updateProducts = (id, formData) => {
    return AxiosApi.put(`/${id}`, formData);
};

export const deleteProducts = (id, formData) => {
    return AxiosApi.delete(`/${id}`, formData);
};

AxiosApi.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    console.error('Bad Request', error.response.data);
                    break;
                case 401:
                    console.error('Unauthorized Request', error.response.data);
                    break;
                case 404:
                    console.error('Not Found', error.response.data);
                    break;
                case 500:
                    console.error('Internal Server Error', error.response.data);
                    break;
                default:
                    break;
            }
        } else {
            console.error('Network Error', error.response.data);
        }
        return Promise.reject(error);
    }
);


export default AxiosApi;