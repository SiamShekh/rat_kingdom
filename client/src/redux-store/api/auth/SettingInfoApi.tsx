import BaseApi from "../BaseApi";

const SettingInfoApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        ChannelJoinedInfo: builder.query({
            query: () => ({
                url: '/setting/channel-status',
                method: 'GET',
            })
        }),
    })
});

export const { useChannelJoinedInfoQuery } = SettingInfoApi;