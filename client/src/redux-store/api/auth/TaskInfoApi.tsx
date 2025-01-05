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
        TaskListForAdmin: builder.query({
            query: () => ({
                url: '/task/get-task',
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
        UpdateTaskForAdmin: builder.mutation({
            query: (arg) => ({
                url: '/task/update-task',
                method: 'PATCH',
                body: arg
            }),
            invalidatesTags: ["task"]
        }),
        DeleteTaskForAdmin: builder.mutation({
            query: (arg) => ({
                url: '/task/delete-task',
                method: 'DELETE',
                body: {_id:arg}
            }),
            invalidatesTags: ["task"]
        }),
        CreateTaskForAdmin: builder.mutation({
            query: (arg) => ({
                url: '/task/create-task',
                method: 'POST',
                body: arg
            }),
            invalidatesTags: ["task"]
        }),
    })
});

export const { useTaskListQuery, useCompletedTasksMutation, useTaskListForAdminQuery, useUpdateTaskForAdminMutation,useDeleteTaskForAdminMutation,useCreateTaskForAdminMutation } = TaskInfoApi;