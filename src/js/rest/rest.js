import axios from 'axios';

const server_address = "https://dermadetect.appspot.com/api/"

export function get(args, page, limit)
{
    return axios.get( server_address + args + "?_page="+page + "&_limit="+limit+"&_sort=id&_order=desc").then( (data) => {
        return data.data;
    } )
}

export function post(target, args)
{
    return axios.post( server_address + target, args ).then( (response) => {
        return true;
    } )
}