import config from "../config/config";
export const getTrending = async (
    media_type = 'all',
     time_window = 'day') =>{
    const {ApiKey, Endpoint} = config;
    //https://api.themoviedb.org/3/movie/550?api_key=ea54704fa95ce57ec66774a5be24e37d
    //De donde vamos a traer los datos url
    const url = `${Endpoint}/trending/${media_type}/${time_window}?api_key=${ApiKey}`;
    //promesa
    const resp = await fetch (url);
    //espera a que se resuelva el json  de resp
    const { results } = await resp.json();

    return results;
}