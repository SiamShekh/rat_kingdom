import BaseApi from "../BaseApi";

const TaskInfoApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        TaskList: builder.query({
            query: () => ({
                url: '/task/info',
                method: 'GET',
            })
        }),
    })
});

export const { useTaskListQuery } = TaskInfoApi;