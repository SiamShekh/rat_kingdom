import BaseApi from "../BaseApi";

const IdentityApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        GetAdminIdentity: builder.query({
            query: () => ({
                url: '/collaboration/admin/identity',
                method: 'GET',
            }),
            providesTags: ["identity"]
        }),
        AddIdentity: builder.mutation({
            query: (arg) => ({
                url: '/collaboration/identity',
                method: 'POST',
                body: arg
            }),
            invalidatesTags: ["identity"]
        }),
        DeleteIdentity: builder.mutation({
            query: (arg) => ({
                url: '/collaboration/identity',
                method: 'DELETE',
                body: arg
            }),
            invalidatesTags: ["identity"]
        }),
    })
});

export const { useGetAdminIdentityQuery, useAddIdentityMutation, useDeleteIdentityMutation } = IdentityApi;