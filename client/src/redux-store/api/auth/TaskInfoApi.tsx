import BaseApi from "../BaseApi";

const TaskInfoApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        TaskList: builder.query({
            query: () => ({
                url: '/task/info',
                method: 'GET',
            }),
            providesTags: ["task"]
        }),
        CompletedTasks: builder.mutation({
            query: (arg) => ({
                url: '/task/complete-task',
                method: 'POST',
                body: arg
            }),
            invalidatesTags: ["task"]
        }),
    })
});

export const { useTaskListQuery, useCompletedTasksMutation } = TaskInfoApi;