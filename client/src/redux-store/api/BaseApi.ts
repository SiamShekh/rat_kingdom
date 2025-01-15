import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseApi = createApi({
    reducerPath: 'api',
    endpoints: () => ({}),
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.DEV ? import.meta.env.VITE_LOCAL_SERVER : import.meta.env.VITE_LIVE_SERVER,
        prepareHeaders(headers) {
            headers.set("Authorization", `Bearer ${sessionStorage.getItem('token')}`);
            return headers;
        },
        validateStatus(_response, body) {
            const pathName = location.pathname;
            if (body?.status_code === 403) {
                location.href = `/login?redirect=${pathName}`;
            }
            return true;
        },
    }),
    tagTypes: ["task", "collaboration","identity","collaboration_task"]
});

export default BaseApi;