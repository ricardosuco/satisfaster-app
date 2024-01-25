import { useFetch } from 'nuxt/app'

// export const useDrinksFetch = async () => {
//   const { data, error } = await useFetch(
//     "http://127.0.0.1:3333/drinks/?page=1&rowsPerPage=50"
//   );
//   console.log(error)
//     // fazer o tratamento de erros
//   return {
//     drinks: toRaw(data.value.data),
//     pagination: toRaw(data.value.meta),
//   };
// };

type useFetchType = typeof useFetch

export const useFetchDrinks: useFetchType = (request, opts = {}) => {
    const config = useRuntimeConfig()

    return useFetch(request, { baseURL: config.public.baseURL, ...opts })
}
