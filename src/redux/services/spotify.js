import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const spotifyApi = createApi({
    reducerPath:'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify23.p.rapidapi.com',
        prepareHeaders:(headers) =>{
            headers.set('X-RapidAPI-Key','c7beb8e169mshaa74f7681594036p1997bbjsn53a37b5ab0cc')

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: ()=> '/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv'}),
    }),
});

export const {
    useGetTopChartsQuery,
} = spotifyApi;