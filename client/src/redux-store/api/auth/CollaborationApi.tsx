import BaseApi from "../BaseApi";

const CollaborationApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        GetIdentity: builder.query({
            query: () => ({
                url: '/collaboration/identity',
                method: 'GET',
            }),
            providesTags: ["collaboration"]
        }),
        GetTask: builder.query({
            query: (arg) => ({
                url: '/collaboration/task',
                method: 'GET',
                params: {
                    identity: arg
                }
            }),
            providesTags: ["collaboration"]
        }),
    })
});

export const {useGetIdentityQuery, useGetTaskQuery} = CollaborationApi;