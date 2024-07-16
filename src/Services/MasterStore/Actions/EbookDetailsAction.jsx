// Axios Middleware
import Request from '../../Middleware/Requests/RequestMaster';

export const GetEbookDetailsAction = async (id) => {
    const response = await Request.get(`/api/v2/storefront/products/${id}`
        // , {
        //     headers: {
        //         'Authorization': 'Bearer ' + localStorage.getItem('token')
        //     }
        // }
    );
    return response.data;
}