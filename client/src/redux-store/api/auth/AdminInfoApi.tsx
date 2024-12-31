import BaseApi from "../BaseApi";

const AdminInfoApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        loginForAdmin: builder.mutation({
            query: (arg) => ({
                url: '/login',
                body: arg,
                method: 'POST',
            })
        }),
        
    })
});

export const { useLoginForAdminMutation } = AdminInfoApi;