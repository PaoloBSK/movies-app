import config from "../config/config";
export const getTrending = async (media_type = 'all', time_window = 'day') =>{
    const {ApiKey, Endpoint} = config;
    //https://api.themoviedb.org/3/movie/550?api_key=ea54704fa95ce57ec66774a5be24e37d
    const url = `${Endpoint}/trending/${media_type}/${time_window}?api_key=${ApiKey}`;
    const resp = await fetch (url);
    const { results } = await resp.json();

    return results;
}