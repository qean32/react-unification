import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import useLocalStorege from "../../CustomHooks/useLocalStorege";

const token = useLocalStorege('token', null)

export const cashServices = createApi({
    reducerPath: 'cashServices',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/cash/' }),
    endpoints: (build: any) => ({
        GETAllcash: build.query({
            query: () => `search/cash/`
        }),
        ADDcash: build.mutation({
            query: (body_: any) => ({
                url: 'reg/cash/',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `JWT ${token}`
                },
                body: JSON.stringify(body_)
            })
        }),
    })
})