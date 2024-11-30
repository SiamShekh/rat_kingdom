import BaseApi from "../BaseApi";

const UserInfoApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        loginForUser: builder.mutation({
            query: (arg) => ({
                url: '/user/login',
                body: arg,
                method: 'POST',
            })
        }),
        MarkAsOld: builder.mutation({
            query: () => ({
                url: '/user/mark-as-old',
                method: 'PATCH',
            })
        }),
        MyInfo: builder.query({
            query: () => ({
                url: '/user/me',
                method: 'GET',
            })
        }),
        Leaderboard: builder.query({
            query: () => ({
                url: '/user/leaderboard',
                method: 'GET',
            })
        }),
    })
});

export const { useMyInfoQuery, useLoginForUserMutation, useMarkAsOldMutation, useLeaderboardQuery } = UserInfoApi;