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
        CompletedIdentity: builder.mutation({
            query: (arg) => ({
                url: '/task//identity/complete-task',
                method: 'POST',
                body: arg
            }),
            invalidatesTags: ["collaboration"]
        }),
    })
});

export const { useGetIdentityQuery, useGetTaskQuery, useCompletedIdentityMutation } = CollaborationApi;