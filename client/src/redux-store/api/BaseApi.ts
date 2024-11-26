import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseApi = createApi({
    reducerPath: 'api',
    endpoints: ()=> ({}),
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.DEV? import.meta.env.VITE_LOCAL_SERVER: import.meta.env.VITE_LIVE_SERVER,
        
    }),

});

export default BaseApi;