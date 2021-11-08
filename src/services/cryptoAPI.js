import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '51796150fdmshcbf0eb18ef13887p1d1ca5jsnbcbd33cb0247'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count)=>createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: (coinId, timePeriod) => createRequest(`coin/${coinId}/history/${timePeriod}`)
            // there is a problem with history/time it is not fetched from external API
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`),
        }),

    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery
} = cryptoApi;

