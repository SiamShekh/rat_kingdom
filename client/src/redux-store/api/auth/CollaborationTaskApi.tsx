import BaseApi from "../BaseApi";

const CollaborationTaskApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        GetCollaborationTask: builder.query({
            query: () => ({
                url: '/collaboration/admin/task',
                method: 'GET',
            }),
            providesTags: ["collaboration_task"]
        }),
        GetTask: builder.query({
            query: (arg) => ({
                url: '/collaboration/task',
                method: 'GET',
                params: {
                    identity: arg
                }
            }),
            providesTags: ["collaboration"]
        }),
        GetIdentityId: builder.query({
            query: () => ({
                url: '/collaboration/admin/identity/id',
                method: 'GET',
            }),
            providesTags: ["collaboration_task"]
        }),
        NewCollaborationTask: builder.mutation({
            query: (e) => ({
                url: '/collaboration/task',
                method: 'POST',
                body: e
            }),
            invalidatesTags: ["collaboration_task"]
        }),
        DeleteCollaborationTask: builder.mutation({
            query: (e) => ({
                url: '/collaboration/task',
                method: 'DELETE',
                body: e
            }),
            invalidatesTags: ["collaboration_task"]
        }),
        CompletedIdentity: builder.mutation({
            query: (arg) => ({
                url: '/task/identity/complete-task',
                method: 'POST',
                body: arg
            }),
            invalidatesTags: ["collaboration"]
        }),
    })
});

export const { useGetIdentityIdQuery, useGetCollaborationTaskQuery, useGetTaskQuery, useCompletedIdentityMutation, useNewCollaborationTaskMutation, useDeleteCollaborationTaskMutation } = CollaborationTaskApi;