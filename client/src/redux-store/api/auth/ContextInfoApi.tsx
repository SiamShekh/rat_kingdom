import BaseApi from "../BaseApi";

const ContextInfoApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        MyInfoContext: builder.query({
            query: () => ({
                url: '/user/me',
                method: 'GET',
            })
        }),
    })
});

export const { useMyInfoContextQuery, } = ContextInfoApi;