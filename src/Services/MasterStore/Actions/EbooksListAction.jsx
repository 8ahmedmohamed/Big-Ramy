// Axios Middleware
import Request from '../../Middleware/Requests/RequestMaster';

export const GetEbooksListAction = async () => {
    const response = await Request.get('/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book');
    return response.data;
}