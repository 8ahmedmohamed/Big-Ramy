import React from 'react';

// Axios Instance
import Request from './RequestMaster';

// React Toastify
import { toast } from 'react-toastify';

const RequestProvider = ({ children }) => {

    // Global Response Handler
    Request.interceptors.response.use((Response) => { return Response },
        async (Error) => {
            if (Error.response) {
                // Validations Errors
                if (Error.response.status === 422) {
                    for (const key in Error.response.data.errors) {
                        const Element = Error.response.data.errors[key];
                        for (const ErrorMessage of Element) {
                            toast.error(ErrorMessage, {
                                position: toast.POSITION.TOP_RIGHT,
                                toastId: 'uniqueId',
                            });
                        }
                    }
                }
                if (Error.response.status === 401) {
                    const Token = localStorage.getItem('token') || '';
                    const IsAuthenticated = Token && JSON.parse(Token).access_token;
                    toast.error(Error.response.data.message, {
                        position: "top-right",
                        toastId: 'uniqueId',
                    });
                    if (IsAuthenticated) {
                        localStorage.clear();
                        // dispatch(ClientSignOut(Navigate));
                    }
                }
                if (Error.response.status === 403) {
                    toast.error(Error.response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        toastId: 'uniqueId',
                    });
                }
                if (Error.response.status === 429) {
                    toast.error(Error.response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        toastId: 'uniqueId',
                    });
                }
                // Development Errors
                if (Error.response.status === 404) {
                    toast.error('Something Went Wrong In API \n Please Contact With Developers', {
                        position: toast.POSITION.TOP_RIGHT,
                        toastId: 'uniqueId',
                    });
                }
                // Servers Errors
                if (Error.response.status === 500) {
                    toast.error('Something Went Wrong In Server \n Please Contact With IT', {
                        position: toast.POSITION.TOP_RIGHT,
                        toastId: 'uniqueId',
                    });
                }
                // Internet and Firewall Errors
                if (Error.response.status === 0) {
                    toast.error('No Internet Connection \n Please Contact With IT', {
                        position: toast.POSITION.TOP_RIGHT,
                        toastId: 'uniqueId',
                    });
                }
            }
            return Promise.reject(Error);
        }
    );

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
};

export default RequestProvider;