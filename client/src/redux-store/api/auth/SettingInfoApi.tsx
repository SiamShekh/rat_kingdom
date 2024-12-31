import BaseApi from "../BaseApi";

const SettingInfoApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        ChannelJoinedInfo: builder.query({
            query: () => ({
                url: '/setting/channel-status',
                method: 'GET',
            })
        }),
        DashboardStats: builder.query({
            query: () => ({
                url: '/setting/stats',
                method: 'GET',
            })
        }),
    })
});

export const { useChannelJoinedInfoQuery, useDashboardStatsQuery } = SettingInfoApi;