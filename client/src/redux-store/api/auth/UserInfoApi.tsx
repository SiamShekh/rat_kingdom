import BaseApi from "../BaseApi";

const UserInfoApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        loginForUser: builder.mutation({
            query: (arg) => ({
                url: '/user/login',
                body: arg,
                method: 'POST',
            })
        })
    })
});

export const { useLoginForUserMutation } = UserInfoApi;