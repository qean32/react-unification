import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cashServices = createApi({
    reducerPath: 'cashServices',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/cash/' }),
    endpoints: (build: any) => ({
        GETAllUsers: build.query({
            query: () => `search/cash/`
        }),
        POSTUser: build.mutation({
            query: (body_: any) => ({
                url: 'reg/cash/',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `JWT ${() => { const token: any = localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : 'zxc'; return token }}`
                },
                body: JSON.stringify(body_)
            })
        }),
    })
})